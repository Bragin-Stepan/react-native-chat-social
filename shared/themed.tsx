import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import fonts from '../shared/fonts';
import {IWView} from './types';
// import {IWText} from './types';
import useAppColor from './colors/useColor';
import textStyles from './textStyles';
import {borderRadius} from './sizes';
import {padding} from './sizes';

// ======== Text ========
export const WText = React.memo((props: any) => {
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
export const WInput = React.memo((props: any) => {
  const appColor = useAppColor();

  return (
    <View style={styles.inputContainer}>
      {/* Icons Left */}
      {props.iconsLeft && (
        <View style={[{marginLeft: padding.md}, styles.iconsContainer]}>
          {props.iconsLeft.map((icon: any, index: number) => (
            <View key={index} style={styles.iconWrapper}>
              {icon}
            </View>
          ))}
        </View>
      )}

      {/* Input Field */}
      <TextInput
        {...props}
        style={[
          {
            color: appColor.base_primary_dark,
            backgroundColor: appColor.base_secondary_normal,
            borderRadius: borderRadius.md,
            paddingHorizontal: props.iconsLeft ? null : padding.lg,
            flex: 1,
          },
          props.style,
          textStyles.C1,
        ]}
        selectionColor={appColor.brand_primary_normal}
        placeholderTextColor={appColor.base_secondary_dark}
      />

      {/* Icons Right */}
      {props.iconsRight && (
        <View style={[{marginRight: padding.md}, styles.iconsContainer]}>
          {props.iconsRight.map((icon: any, index: number) => (
            <View key={index} style={styles.iconWrapper}>
              {icon}
            </View>
          ))}
        </View>
      )}
    </View>
  );
});

// ======== Стили ========
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
