import React from 'react';
import {TextInput, Animated} from 'react-native';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';

import icons from '../../shared/icons';
import {TBaseIcon} from '../../shared/types';

const DefaultRoute = React.memo((props: any) => {
  const [isSearching, setIsSearching] = React.useState(false);

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
        {...(!isSearching
          ? {title: 'Чаты', iconsRight: [searchIcon]}
          : {iconsLeft: [closeSearchIcon], placeholder: 'Найти чат...'})}
      />
      <WText variant="T2">Первый экран в чатах</WText>
    </WView>
  );
});

export default DefaultRoute;
