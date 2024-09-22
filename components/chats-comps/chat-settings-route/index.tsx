import React from 'react';
import {WText, WView} from '../../../shared/themed';
import {HeaderComponent} from '../../header';
import useAppColor from '../../../shared/colors/use-color';
import {arrowLeftIcon} from '../../button';
import {spacing} from '../../../shared/sizes';

const ChatSettingsRoute = React.memo((props: any) => {
  return (
    <WView isParent>
      <HeaderComponent
        iconsLeft={[arrowLeftIcon]}
        title="Настройки чата"
        // placeholder="Найти чат..."
        // iconsRight={[arrowLeftIcon, arrowLeftIcon]}
      />
      <WText variant="T2" style={{paddingHorizontal: spacing.lg}}>
        Экран настроек чата
      </WText>
    </WView>
  );
});

export {ChatSettingsRoute};
