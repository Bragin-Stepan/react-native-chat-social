import React from 'react';
import {ScrollView, View} from 'react-native';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import {ProfileItem} from '../shared/profile-item';
import icons from '../../shared/icons';
import {IProfileItemProps, TBaseIcon} from '../../shared/types';
import {spacing} from '../../shared/sizes';
import {getUsersInformation} from '../../shared/api/get-users-information';
import {formatLastMessageTime} from '../../utils/time-format';
import {formatLastOnlineTime} from '../../utils/online-format';

const DefaultRoute = React.memo((props: any) => {
  const [isSearching, setIsSearching] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

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
    const fetchUsers = async () => {
      const userData = await getUsersInformation();
      userData.sort((a: any, b: any) => {
        return (
          new Date(b.lastMessageTime).getTime() -
          new Date(a.lastMessageTime).getTime()
        );
      });
      setUsers(userData);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <WView isParent>
        <WText>{'Загрузка...'}</WText>
      </WView>
    );
  }

  return (
    <WView isParent>
      <HeaderComponent
        {...(isSearching
          ? {iconsLeft: [closeSearchIcon], placeholder: 'Найти чат...'}
          : {title: 'Чаты', iconsRight: [searchIcon, settingsIcon]})}
      />

      {/* {formatLastMessageTime}

      {formatLastOnlineTime} */}
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
