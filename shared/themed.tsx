import React from 'react';
import {Text, View} from 'react-native';

import fonts from '../shared/fonts';
import {IWText, IWView} from './types';
import useAppColor from './colors/useColor';

export const WText = React.memo((props: IWText) => {
  const appColor = useAppColor();

  return (
    <Text
      {...props}
      style={[
        {color: appColor.base_primary_dark},
        props.style,
        {
          fontFamily:
            fonts[props.fontFamily as keyof typeof fonts] ?? fonts.bold,
        },
      ]}>
      {props.children}
    </Text>
  );
});

export const WView = React.memo((props: IWView) => {
  const appColor = useAppColor();

  return (
    <View
      {...props}
      style={[
        props.isParrent && {
          flex: 1,
          backgroundColor: appColor.base_secondary_light,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
});
