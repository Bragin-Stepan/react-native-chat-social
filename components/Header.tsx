import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WText} from '../shared/themed';

const HeaderComponent = React.memo((props: any) => {
  return (
    <View style={styles.headerStyle}>
      {/* ======== Icons Left ======== */}
      {props.iconsLeft && (
        <View style={styles.headerIconsRowContainer}>
          {props.iconsLeft.map((icon: any) => (
            <View
              style={[styles.headerIconContainer, {alignItems: 'flex-start'}]}>
              {icon}
            </View>
          ))}
        </View>
      )}
      {/* ======== Title ======== */}
      {props.title && (
        <WText
          style={styles.headerTitle}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.title}
        </WText>
      )}

      {/* ======== Search ======== */}
      {/* {props.title && <WText style={styles.headerTitle}>{props.title}</WText>} */}

      {/* ======== Icons Right ======== */}
      {props.iconsRight && (
        <View style={styles.headerIconsRowContainer}>
          {props.iconsRight.map((icon: any) => (
            <View
              style={[styles.headerIconContainer, {alignItems: 'flex-end'}]}>
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
  // ======== Header ========
  headerStyle: {
    backgroundColor: 'gray',
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    overflow: 'hidden',
  },
  headerIconsRowContainer: {
    flexDirection: 'row',
  },
  headerIconContainer: {
    height: 40,
    width: 40,
    // alignItems: 'center',
    justifyContent: 'center',
  },
});

export {HeaderComponent};
