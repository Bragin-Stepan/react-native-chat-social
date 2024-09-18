import React from 'react';
import {WText} from '../../shared/fonts';
import {WView} from '../../shared/themed';
import useAppColor from '../../shared/colors/use-color';

const ChatRoute = React.memo((props: any) => {
  const appColor = useAppColor();
  return (
    <WView isParent style={{backgroundColor: appColor.base_primary_light}}>
      <WText variant="T2">Chat Route</WText>
    </WView>
  );
});

export {ChatRoute};
