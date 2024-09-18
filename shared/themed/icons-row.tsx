import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {TBaseIcon} from '../types';

interface IconsRowProps {
  icons?: TBaseIcon[];
  style?: ViewStyle;
}

export const IconsRow = React.memo(({icons, style}: IconsRowProps) => {
  if (!icons) return null;

  return (
    <View style={[styles.iconsContainer, style]}>
      {icons.map((icon, index) => (
        <View
          key={index}
          onTouchEnd={() => icon.onPress?.()}
          style={styles.iconWrapper}>
          {icon.icon}
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
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
