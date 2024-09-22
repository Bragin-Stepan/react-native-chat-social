import React from 'react';
import {ScrollView, View} from 'react-native';
import {LoadBlock, WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import {ProfileItem} from '../shared/profile-item';
import icons from '../../shared/icons';
import {IProfileItemProps, TBaseIcon} from '../../shared/types';
import {spacing} from '../../shared/sizes';
import {formatLastMessageTime} from '../../utils/time-format';

import {fetchUsers} from '../../shared/redux/actions/users';
import {useAppSelector, useAppDispatch} from '../../shared/redux/hooks';
import {fetchUserMessages} from '../../shared/redux/actions/user-messages';
import moment from 'moment';

const DefaultRoute = React.memo((props: any) => {
  const dispatch = useAppDispatch();
  const {users, usersLoading} = useAppSelector(state => state.users);
  const {userMessages, messagesLoading} = useAppSelector(
    state => state.userMessages,
  );

  const [searchText, setSearchText] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);

  const settingsIcon: TBaseIcon = {
    icon: icons.settings,
    onPress: () => props.navigation.navigate('chatSettingsPage'),
  };

  const closeSearchIcon: TBaseIcon = {
    icon: icons.arrow_left,
    onPress: () => {
      setIsSearching(!isSearching);
      setSearchText('');
    },
  };

  const searchIcon: TBaseIcon = {
    icon: icons.search_outline,
    onPress: () => {
      setIsSearching(!isSearching);
    },
  };

  const onChatPress = (userId: number) => {
    props.navigation.navigate('chatPage', {userId});
  };

  // Вызов данных
  React.useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserMessages());
  }, [dispatch]);

  if (usersLoading || messagesLoading) {
    return <LoadBlock />;
  }

  const sortedUsers = users
    .map((user: IProfileItemProps) => {
      const userChat = userMessages.find(
        message =>
          message.senderId === user.id || message.receiverId === user.id,
      );

      // Если нет сообщений, устанавливаем null для последнего времени
      const lastMessageTime =
        userChat?.messages[userChat.messages.length - 1]?.timestamp || null;
      const lastMessage =
        userChat?.messages[userChat.messages.length - 1]?.content || '';

      return {
        ...user,
        lastMessageTime,
        lastMessage,
      };
    })
    .sort((a, b) => {
      // Если временная метка отсутствует, помечаем пользователя как с минимальным временем
      if (!a.lastMessageTime) return 1;
      if (!b.lastMessageTime) return -1;

      const aTime = moment(a.lastMessageTime);
      const bTime = moment(b.lastMessageTime);

      return bTime.diff(aTime); // Сортируем по убыванию
    });

  const filteredUsers = sortedUsers.filter(user =>
    user.nickname.toLowerCase().includes(searchText.toLowerCase()),
  );

  const getUnreadMessagesCount = (userId: number) => {
    const chatMessages = userMessages.find(
      chat => chat.senderId === userId || chat.receiverId === userId,
    );
    if (!chatMessages) return 0;

    // Assuming logged in user ID is 0 (change it to actual logged-in user ID)
    const loggedInUserId = 0;

    const unreadMessages = chatMessages.messages.filter(
      message => !message.isRead && userId !== loggedInUserId,
    );
    return unreadMessages.length;
  };
  return (
    <WView isParent>
      <HeaderComponent
        {...(isSearching
          ? {
              iconsLeft: [closeSearchIcon],
              placeholder: 'Найти чат...',
              textValue: {searchText},
              onChangeText: {setSearchText},
            }
          : {title: 'Чаты', iconsRight: [searchIcon, settingsIcon]})}
      />

      <ScrollView>
        <View style={{paddingHorizontal: spacing.lg}}>
          {filteredUsers.map(user => (
            <ProfileItem
              key={user.id}
              id={user.id}
              nickname={user.nickname}
              isOnline={user.isOnline}
              avatar={user.avatar}
              subTitle={user.lastMessage}
              titleRight={formatLastMessageTime(String(user.lastMessageTime))}
              countMessage={getUnreadMessagesCount(user.id)}
              onPress={() => onChatPress(user.id)}
            />
          ))}
        </View>
      </ScrollView>
    </WView>
  );
});

export default DefaultRoute;
