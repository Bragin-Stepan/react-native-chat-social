import React from 'react';
import {Text, View, TextInput} from 'react-native';

import fonts from '../shared/fonts';
import {IWText, IWView, IWInput} from './types';
import useAppColor from './colors/useColor';
import textStyles from './textStyles';
import {borderRadius} from './sizes';
import {padding} from './sizes';

// ======== Text ========
export const WText = React.memo((props: IWText) => {
  const appColor = useAppColor();

  return (
    <Text {...props} style={[{color: appColor.base_primary_dark}, props.style]}>
      {props.children}
    </Text>
  );
});

// ======== View ========
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

// ======== Input ========
export const WInput = React.memo((props: IWInput) => {
  const appColor = useAppColor();

  return (
    <TextInput
      {...props}
      style={[
        {
          color: appColor.base_primary_dark,
        },
        props.style,
        {
          backgroundColor: appColor.base_secondary_normal,
          borderRadius: borderRadius.md,
          paddingHorizontal: padding.lg,
        },
        textStyles.caption.C1,
      ]}
      selectionColor={appColor.brand_primary_normal}
      placeholderTextColor={appColor.base_secondary_dark}
    />
  );
});
