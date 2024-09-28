import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {LoadHeader, WView, WText} from '../../../shared/themed';
import {HeaderComponent} from '../../header';
import useAppColor from '../../../shared/colors/use-color';
import {arrowLeftIcon} from '../../button';
import icons from '../../../shared/icons';
import {TBaseIcon} from '../../../shared/types';
import {ProfileItem} from '../../shared/profile-item';
import {useAppDispatch, useAppSelector} from '../../../shared/redux/hooks';
import {fetchUserMessages} from '../../../shared/redux/actions/user-messages';
import {fetchUsers} from '../../../shared/redux/actions/users';
import {formatLastOnlineTime} from '../../../utils/online-format';
import MessageItem from './chat-message-item';
import {formatLastMessagesGroupTime} from '../../../utils/time-format';
import {borderRadius, spacing} from '../../../shared/sizes';

const dotsIcon: TBaseIcon = {
  icon: icons.dots,
  onPress: () => null,
};

// Компонент для разделителя с датой

const ChatMessagesRoute = React.memo((props: any) => {
  const appColor = useAppColor();
  const dispatch = useAppDispatch();
  const {userId} = props.route.params;

  const {users, usersLoading} = useAppSelector(state => state.users);
  const {userMessages, messagesLoading} = useAppSelector(
    state => state.userMessages,
  );

  const user = users.find(user => user.id === userId);
  const chatMessages = userMessages.find(chat => chat.senderId === userId);

  const DateSeparator = ({date}: {date: string}) => (
    <View style={styles.dateSeparator}>
      <WText
        variant="C1"
        // customColor="base_secondary_light"
      >
        {date}
      </WText>
    </View>
  );

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

  let lastMessageDate = '';

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
        contentContainerStyle={{paddingBottom: spacing.lg}}
        style={[
          styles.scrollContent,
          {backgroundColor: appColor.base_secondary_normal},
        ]}>
        {chatMessages?.messages.map((message, index) => {
          const messageDate = formatLastMessagesGroupTime(message.timestamp);
          const showDateSeparator = messageDate !== lastMessageDate;

          lastMessageDate = messageDate;

          return (
            <React.Fragment key={index}>
              {showDateSeparator && <DateSeparator date={messageDate} />}
              <MessageItem message={message} />
            </React.Fragment>
          );
        })}
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
  dateSeparator: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    alignSelf: 'center',
    borderRadius: 55,
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
});

export {ChatMessagesRoute};
