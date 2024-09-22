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

const DefaultRoute = React.memo((props: any) => {
  const dispatch = useAppDispatch();
  const {users, loading} = useAppSelector(state => state.users);

  const [isSearching, setIsSearching] = React.useState(false);

  const settingsIcon: TBaseIcon = {
    icon: icons.settings,
    onPress: () => props.navigation.navigate('chatSettingsPage'),
  };

  const closeSearchIcon: TBaseIcon = {
    icon: icons.arrow_left,
    onPress: () => {
      setIsSearching(!isSearching);
    },
  };

  const searchIcon: TBaseIcon = {
    icon: icons.search_outline,
    onPress: () => {
      setIsSearching(!isSearching);
    },
  };

  const onChatPress = () => {
    props.navigation.navigate('chatPage');
  };

  // Вызов данных
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <LoadBlock />;
  }

  return (
    <WView isParent>
      <HeaderComponent
        {...(isSearching
          ? {iconsLeft: [closeSearchIcon], placeholder: 'Найти чат...'}
          : {title: 'Чаты', iconsRight: [searchIcon, settingsIcon]})}
      />

      <ScrollView>
        <View style={{paddingHorizontal: spacing.lg}}>
          {users.map((user: IProfileItemProps) => (
            <ProfileItem
              key={user.id}
              id={user.id}
              nickname={user.nickname}
              isOnline={user.isOnline}
              avatar={user.avatar}
              subTitle={user.lastMessage || ''}
              titleRight={formatLastMessageTime(String(user.lastMessageTime))}
              countMessage={user.countMessage}
              onPress={() => onChatPress()}
            />
          ))}
        </View>
      </ScrollView>
    </WView>
  );
});

export default DefaultRoute;
