import React from 'react';
import {WText} from '../../shared/themed';
import {WView} from '../../shared/themed';
import useAppColor from '../../shared/colors/use-color';

const ChatRoute = React.memo((props: any) => {
  const appColor = useAppColor();
  return (
    <WView isParrent style={{backgroundColor: appColor.base_primary_light}}>
      <WText>Chat Route</WText>
    </WView>
  );
});

export {ChatRoute};
