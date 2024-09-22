import React from 'react';
import {WText} from '../fonts';
import {WView} from './view';

export const LoadBlock = React.memo((props: any) => {
  return (
    <WView
      isParent
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <WText variant="P1">{'Загрузка...'}</WText>
    </WView>
  );
});
