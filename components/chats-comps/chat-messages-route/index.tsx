import React from 'react';
import {LoadHeader, WView} from '../../../shared/themed';
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
import {ScrollView, View, StyleSheet} from 'react-native';
import MessageItem from './chat-message-item';

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
  const chatMessages = userMessages.find(chat => chat.senderId === userId);

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
          {backgroundColor: appColor.base_secondary_normal},
        ]}>
        {chatMessages?.messages.map((message, index) => (
          <MessageItem key={index} message={message} />
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
    padding: 16,
  },
});

export {ChatMessagesRoute};
