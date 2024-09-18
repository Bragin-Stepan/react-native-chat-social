import React from 'react';
import {View} from 'react-native';

import {IWView} from '../types';
import useAppColor from '../colors/use-color';

export const WView = React.memo((props: IWView) => {
  const appColor = useAppColor();

  return (
    <View
      {...props}
      style={[
        props.isParent && {
          flex: 1,
          backgroundColor: appColor.base_secondary_light,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
});
