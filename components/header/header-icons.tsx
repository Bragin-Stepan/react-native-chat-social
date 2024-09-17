import {View, StyleSheet} from 'react-native';
import {spacing} from '../../shared/sizes';
import {IPressedIcon} from '../../shared/types';

export const HeaderIconsLeft = (props: any) => {
  return (
    <View style={styles.headerIconsRowContainer}>
      {props.iconsLeft.map((icon: IPressedIcon, index: number) => (
        <View
          key={index}
          style={[
            styles.headerIconContainer,
            // {alignItems: 'center'}
          ]}>
          {icon.icon}
        </View>
      ))}
    </View>
  );
};

export const HeaderIconsRight = (props: any) => {
  return (
    <View style={styles.headerIconsRowContainer}>
      {props.iconsRight.map((icon: IPressedIcon, index: number) => (
        <View
          key={index}
          style={[
            styles.headerIconContainer,
            index !== props.iconsRight.length - 1 && {marginRight: spacing.md},
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
