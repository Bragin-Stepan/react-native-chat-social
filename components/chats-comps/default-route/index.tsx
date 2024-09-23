import React, {useEffect, useState, useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import {LoadHeader, WView} from '../../../shared/themed';
import {HeaderComponent} from '../../header';
import {ProfileItem} from '../../shared/profile-item';
import icons from '../../../shared/icons';
import {spacing} from '../../../shared/sizes';
import {formatLastMessageTime} from '../../../utils/time-format';
import {IProfileItemProps} from '../../../shared/types.ts';

import useAppColor from '../../../shared/colors/use-color.tsx';
import {useAppSelector, useAppDispatch} from '../../../shared/redux/hooks';
import {fetchUsers} from '../../../shared/redux/actions/users';
import {fetchUserMessages} from '../../../shared/redux/actions/user-messages';
import {setInputTerm} from '../../../shared/redux/reducers/input';

import {
  getSortedUsers,
  filterUsers,
  getUnreadMessagesCount,
} from './default-chat-utils';

const DefaultRoute = React.memo((props: any) => {
  const appColor = useAppColor();

  const dispatch = useAppDispatch();
  const {users, usersLoading} = useAppSelector(state => state.users);
  const {userMessages, messagesLoading} = useAppSelector(
    state => state.userMessages,
  );
  const {inputTerm} = useAppSelector(state => state.input);
  const [isFiltering, setIsFiltering] = useState(false);

  // Иконки для Header
  const settingsIcon = {
    icon: icons.settings,
    onPress: () => props.navigation.navigate('chatSettingsPage'),
  };
  const closeSearchIcon = {
    icon: icons.arrow_left,
    onPress: () => handleClearSearch(),
  };
  const searchIcon = {
    icon: icons.search_outline,
    onPress: () => setIsFiltering(true),
  };

  // Вызов данных
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserMessages());
  }, [dispatch]);

  // Очистка поиска
  const handleClearSearch = useCallback(() => {
    setIsFiltering(false);
    dispatch(setInputTerm(''));
  }, [dispatch]);

  // Загрузка
  if (usersLoading || messagesLoading) {
    const placeholders = Array.from({length: 15}, (_, index) => ({
      index: index,
    }));
    return (
      <LoadHeader>
        <View
          style={{
            marginTop: spacing.md,
            paddingHorizontal: spacing.lg,
          }}>
          {placeholders.map(item => (
            <View
              key={item.index}
              style={{
                height: 53,
                backgroundColor: appColor.base_secondary_normal,
                borderRadius: 50,
                marginBottom: spacing.lg,
              }}
            />
          ))}
        </View>
      </LoadHeader>
    );
  }

  // if (usersLoading || messagesLoading) {
  //   return <LoadHeader />
  // }

  // Сортировки и фильтрации
  const sortedUsers = getSortedUsers(users, userMessages);
  const filteredUsers = filterUsers(sortedUsers, inputTerm);

  return (
    <WView isParent>
      <HeaderComponent
        {...(isFiltering
          ? {
              iconsLeft: [closeSearchIcon],
              placeholder: 'Найти чат...',
              textValue: inputTerm,
              onChangeText: value => dispatch(setInputTerm(value)),
            }
          : {title: 'Чаты', iconsRight: [searchIcon, settingsIcon]})}
      />

      <ScrollView>
        <View style={{paddingHorizontal: spacing.lg}}>
          {filteredUsers.map((user: IProfileItemProps) => (
            <ProfileItem
              key={user.id}
              id={user.id}
              nickname={user.nickname}
              isOnline={user.isOnline}
              avatar={user.avatar}
              subTitle={(user as any).lastMessage}
              titleRight={formatLastMessageTime(
                String((user as any).lastMessageTime),
              )}
              countMessage={getUnreadMessagesCount(user.id, userMessages)}
              onPress={() =>
                props.navigation.navigate('chatPage', {userId: user.id})
              }
            />
          ))}
        </View>
      </ScrollView>
    </WView>
  );
});

export default DefaultRoute;
