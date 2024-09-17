import React from 'react';
import {WText} from '../../shared/fonts';
import {WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import icons from '../../shared/icons';
import {IPressedIcon} from '../../shared/types';

const arrowLeftIcon: IPressedIcon = {
  icon: icons.arrow_left,
  // onPress: () => null,
};

const DefaultRoute = React.memo((props: any) => {
  return (
    <WView isParent>
      <HeaderComponent
        iconsLeft={[arrowLeftIcon]}
        title="Чаты"
        // placeholder="Найти чат..."
        // iconsRight={[icons.arrow_left]}
      />
      <WText variant="T2">Первый экран в чатах</WText>
    </WView>
  );
});

export default DefaultRoute;
