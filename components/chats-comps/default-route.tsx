import React from 'react';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import {arrowLeftIcon} from '../button';

const DefaultRoute = React.memo((props: any) => {
  return (
    <WView isParent>
      <HeaderComponent
        // iconsLeft={[arrowLeftIcon]}
        // title="Чаты"
        placeholder="Найти чат..."
        iconsRight={[arrowLeftIcon]}
      />
      <WText variant="T2">Первый экран в чатах</WText>
    </WView>
  );
});

export default DefaultRoute;
