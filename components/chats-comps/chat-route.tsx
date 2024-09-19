import React from 'react';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import useAppColor from '../../shared/colors/use-color';
import {arrowLeftIcon} from '../button';

const ChatRoute = React.memo((props: any) => {
  const appColor = useAppColor();
  return (
    <WView isParent>
      <HeaderComponent
        iconsLeft={[arrowLeftIcon]}
        title="Чаты"
        // placeholder="Найти чат..."
        // iconsRight={[arrowLeftIcon]}
      />
      <WText variant="T2">Первый экран в чатах</WText>
    </WView>
  );
});

export {ChatRoute};
