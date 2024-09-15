import React from 'react';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import icons from '../../shared/icons';

const DefaultRoute = React.memo((props: any) => {
  return (
    <WView isParrent>
      <HeaderComponent
        iconsLeft={[icons.arrow_left]}
        title="Чаты"
        // inputText="Найти чат..."
        iconsRight={[icons.arrow_left]}
      />
      <WText>Первый экран в чатах</WText>
    </WView>
  );
});

export default DefaultRoute;
