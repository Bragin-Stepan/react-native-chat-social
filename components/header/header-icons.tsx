import {View, StyleSheet} from 'react-native';
import {spacing} from '../../shared/sizes';
import {TBaseIcon} from '../../shared/types';

export const HeaderIconsLeft = (props: any) => {
  return (
    <View style={styles.headerIconsRowContainer}>
      {props.iconsLeft.map((icon: TBaseIcon, index: number) => (
        <View
          key={index}
          onTouchEnd={() => icon.onPress?.()}
          style={[styles.headerIconContainer]}>
          {icon.icon}
        </View>
      ))}
    </View>
  );
};

export const HeaderIconsRight = (props: any) => {
  return (
    <View style={styles.headerIconsRowContainer}>
      {props.iconsRight.map((icon: TBaseIcon, index: number) => (
        <View
          key={index}
          onTouchEnd={() => icon.onPress?.()}
          style={[
            styles.headerIconContainer,
            // index !== props.iconsRight.length - 1 && {marginRight: spacing.md},
          ]}>
          {icon.icon}
        </View>
      ))}
    </View>
  );
};

// ======== Стили ========
const styles = StyleSheet.create({
  headerIconsRowContainer: {
    flexDirection: 'row',
  },
  headerIconContainer: {
    height: 40,
    width: 40,
    // backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
