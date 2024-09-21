import React from 'react';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';

import {spacing} from '../../shared/sizes';

const DefaultRoute = React.memo((props: any) => {
  return (
    <WView isParent>
      <HeaderComponent title="Поиск" />
      <WView style={{paddingHorizontal: spacing.lg}}>
        <WText variant="T2">Первый экран в поиске</WText>
      </WView>
    </WView>
  );
});

export default DefaultRoute;
