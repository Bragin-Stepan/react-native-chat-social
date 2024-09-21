import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {IWInput} from '../types';
import useAppColor from '../colors/use-color';
import fontStyle from '../fonts/font-style';
import {borderRadius, spacing} from '../sizes';
import {IconsRow} from './';

// ======== Input ========
export const WInput = React.memo((props: IWInput) => {
  const appColor = useAppColor();

  return (
    <View style={styles.inputContainer}>
      {/* Icons Left */}
      {props.iconsLeft && (
        <IconsRow
          side="Left"
          icons={props.iconsLeft}
          style={{marginLeft: spacing.sm}}
        />
      )}
      {/* Input Field */}
      <TextInput
        {...props}
        style={[
          props.style,
          {
            color: appColor.base_primary_dark,
            backgroundColor: appColor.base_secondary_normal,
            borderRadius: borderRadius.md,
            paddingLeft: props.iconsLeft ? -spacing.lg : spacing.lg,
            flex: 1,
          },
          fontStyle.C1,
        ]}
        selectionColor={appColor.brand_primary_normal}
        placeholderTextColor={appColor.base_secondary_dark}
      />
      {/* Icons Right */}
      {props.iconsRight && <IconsRow side="Right" icons={props.iconsRight} />}
    </View>
  );
});

// ======== Стили ========
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
