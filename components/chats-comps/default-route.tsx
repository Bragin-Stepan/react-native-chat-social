import React from 'react';
import {TextInput, Animated} from 'react-native';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';

import icons from '../../shared/icons';
import {TBaseIcon} from '../../shared/types';
import {spacing} from '../../shared/sizes';

const DefaultRoute = React.memo((props: any) => {
  const [isSearching, setIsSearching] = React.useState(true);

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
          ? {title: 'Чаты', iconsRight: [searchIcon, settingsIcon]}
          : {iconsLeft: [closeSearchIcon], placeholder: 'Найти чат...'})}
      />
      <WView style={{paddingHorizontal: spacing.lg}}>
        <WText variant="T2">Первый экран в чатах</WText>
      </WView>
    </WView>
  );
});

export default DefaultRoute;
