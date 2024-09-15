import {View, StyleSheet} from 'react-native';

export const HeaderIconsLeft = (props: any) => {
  return (
    <View style={styles.headerIconsRowContainer}>
      {props.iconsLeft.map((icon: any, index: number) => (
        <View
          key={index}
          style={[styles.headerIconContainer, {alignItems: 'center'}]}>
          {icon}
        </View>
      ))}
    </View>
  );
};

export const HeaderIconsRight = (props: any) => {
  return (
    <View style={styles.headerIconsRowContainer}>
      {props.iconsRight.map((icon: any, index: number) => (
        <View
          key={index}
          style={[styles.headerIconContainer, {alignItems: 'center'}]}>
          {icon}
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
