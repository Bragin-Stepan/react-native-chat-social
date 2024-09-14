import React from 'react';
import {Image} from 'react-native';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../Header';
import icons from '../../shared/icons';

const DefaultRoute = React.memo((props: any) => {
  return (
    <WView isParrent>
      <HeaderComponent
        iconsLeft={[icons.arrow_left]}
        title="Чаты"
        iconsRight={[icons.arrow_left]}
      />
      <WText>Default Route</WText>
    </WView>
  );
});

export default DefaultRoute;
