import React from 'react';
import {LoadHeader, WText, WView} from '../../../shared/themed';
import {HeaderComponent} from '../../header';
import useAppColor from '../../../shared/colors/use-color';
import {arrowLeftIcon} from '../../button';
import {borderRadius, spacing} from '../../../shared/sizes';
import icons from '../../../shared/icons';
import {TBaseIcon} from '../../../shared/types';
import {ProfileItem} from '../../shared/profile-item';
import {useAppDispatch, useAppSelector} from '../../../shared/redux/hooks';
import {fetchUserMessages} from '../../../shared/redux/actions/user-messages';
import {fetchUsers} from '../../../shared/redux/actions/users';
import {formatLastOnlineTime} from '../../../utils/online-format';
import {ScrollView, View, StyleSheet} from 'react-native';
import {formaHoursMinutesTime} from '../../../utils/time-format';
import {MY_ID} from '../../../shared/constants';

const dotsIcon: TBaseIcon = {
  icon: icons.dots,
  onPress: () => null,
};

const ChatMessagesRoute = React.memo((props: any) => {
  const appColor = useAppColor();
  const dispatch = useAppDispatch();
  const {userId} = props.route.params;

  const {users, usersLoading} = useAppSelector(state => state.users);
  const {userMessages, messagesLoading} = useAppSelector(
    state => state.userMessages,
  );

  const user = users.find(user => user.id === userId);

  const chatMessages = userMessages.find(
    chat => chat.senderId === userId && chat.receiverId === MY_ID,
  );

  const isMyMessage = userId === 0;

  React.useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserMessages());
  }, [dispatch]);

  if (usersLoading || messagesLoading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          {backgroundColor: appColor.base_secondary_normal},
        ]}>
        <View
          style={[
            styles.headerPlaceholder,
            {backgroundColor: appColor.base_secondary_light},
          ]}
        />
      </View>
    );
  }

  return (
    <WView isParent>
      {user && (
        <HeaderComponent
          {...{
            iconsLeft: [arrowLeftIcon],
            iconsRight: [dotsIcon],
          }}
          item={
            <ProfileItem
              id={user.id}
              nickname={user.nickname}
              avatar={String(user.avatar)}
              isOnline={user.isOnline}
              subTitle={formatLastOnlineTime(
                String(user.whenWasOnline),
                user.isOnline,
              )}
              customSubTitle={
                user.isOnline && {color: appColor.system_success_normal}
              }
            />
          }
        />
      )}
      <ScrollView
        style={[
          styles.scrollContent,
          {backgroundColor: '#e6f1ff'}, // base_secondary_normal
        ]}>
        {chatMessages?.messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              {backgroundColor: appColor.base_secondary_light},
              isMyMessage ? styles.myMessage : styles.theirMessage,
            ]}>
            <View
              style={[
                styles.tab,
                {backgroundColor: appColor.base_secondary_light},
              ]}
            />
            <WText variant="P1">{message.content}</WText>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <WText variant="C1" style={styles.timeText}>
                {formaHoursMinutesTime(message.timestamp)}
              </WText>
            </View>
          </View>
        ))}
      </ScrollView>
    </WView>
  );
});

const styles = StyleSheet.create({
  loadingContainer: {
    height: '100%',
  },
  headerPlaceholder: {
    height: '8%',
  },
  scrollContent: {
    padding: spacing.lg,
  },
  messageContainer: {
    shadowOffset: {
      width: 4,
      height: 4,
    },
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    maxWidth: '80%',
    position: 'relative',
  },
  myMessage: {
    alignSelf: 'flex-end',
  },
  theirMessage: {
    alignSelf: 'flex-start',
  },
  tab: {
    position: 'absolute',
    bottom: 0,
    left: -7,
    width: 20,
    height: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 6,
  },
  timeText: {
    marginTop: spacing.xs,
    alignSelf: 'flex-end',
  },
});

export {ChatMessagesRoute};
