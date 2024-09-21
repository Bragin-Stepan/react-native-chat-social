import React from 'react';
import {ScrollView, View} from 'react-native';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import {ProfileItem} from '../shared/profile-item';

import icons from '../../shared/icons';
import {TBaseIcon} from '../../shared/types';
import {spacing} from '../../shared/sizes';

const DefaultRoute = React.memo((props: any) => {
  const onChatPress = () => {
    props.navigation.navigate('chatPage');
  };

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

  return (
    <WView isParent>
      <HeaderComponent
        {...(isSearching
          ? {iconsLeft: [closeSearchIcon], placeholder: 'Найти чат...'}
          : {title: 'Чаты', iconsRight: [searchIcon, settingsIcon]})}
      />
      <ScrollView>
        <View style={{paddingHorizontal: spacing.lg}}>
          <ProfileItem
            onPress={() => onChatPress()}
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="1 час назад"
            countMessage={3}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={123}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="2 часа назад"
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
          <ProfileItem
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Последнее сообщение"
            titleRight="16:23"
            countMessage={2}
          />
        </View>
      </ScrollView>
    </WView>
  );
});

export default DefaultRoute;
