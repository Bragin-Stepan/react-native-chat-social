import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {TBaseIcon} from '../types';
import {spacing} from '../sizes';

interface IconsRowProps {
  icons?: TBaseIcon[];
  style?: StyleProp<ViewStyle>;
  styleIcon?: StyleProp<ViewStyle>;
  side: 'Left' | 'Right';
}

export const IconsRow = React.memo(
  ({icons, style, styleIcon, side}: IconsRowProps) => {
    if (!icons) return null;

    const getIconSpacing = (index: number) => {
      if (index !== icons.length - 1) {
        return side === 'Left'
          ? {marginLeft: spacing.sm}
          : {marginRight: spacing.sm};
      }
      return null;
    };

    return (
      <View style={[styles.iconsContainer, style]}>
        {icons.map((icon, index, ...props) => (
          <View
            key={index}
            onTouchEnd={() => icon.onPress?.()}
            style={[styles.iconWrapper, styleIcon, getIconSpacing(index)]}>
            {icon.icon}
          </View>
        ))}
      </View>
    );
  },
);

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
