import React from 'react';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import useAppColor from '../../shared/colors/use-color';
import {arrowLeftIcon} from '../button';

const SettingsChatRoute = React.memo((props: any) => {
  return (
    <WView isParent>
      <HeaderComponent
        iconsLeft={[arrowLeftIcon]}
        title="Настройки чата"
        // placeholder="Найти чат..."
        // iconsRight={[arrowLeftIcon, arrowLeftIcon]}
      />
      <WText variant="T2">Экран настроек чата</WText>
    </WView>
  );
});

export {SettingsChatRoute};
