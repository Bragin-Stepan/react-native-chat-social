import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {WText} from '../../shared/themed';
import HeaderSearch from './HeaderSearch';
import {HeaderIconsLeft, HeaderIconsRight} from './HeaderIcons';

import textStyles from '../../shared/textStyles';
import useAppColor from '../../shared/colors/useColor';
import {padding} from '../../shared/sizes';

const HeaderComponent = React.memo((props: any) => {
  const appColor = useAppColor();
  return (
    <View style={styles.headerStyle}>
      {/* ======== Icons Left ======== */}
      {props.iconsLeft && <HeaderIconsLeft iconsLeft={props.iconsLeft} />}

      {/* ======== Title ======== */}
      {props.title && (
        <WText
          style={[
            textStyles.title.T1,
            styles.headerTitle,
            {color: appColor.base_primary_dark},
          ]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.title}
        </WText>
      )}

      {/* ======== Search ======== */}
      {props.inputText && <HeaderSearch placeholder={props.inputText} />}

      {/* ======== Icons Right ======== */}
      {props.iconsRight && <HeaderIconsRight iconsRight={props.iconsRight} />}
    </View>
  );
});

// ======== Стили ========
const styles = StyleSheet.create({
  // ======== Header ========
  headerStyle: {
    // backgroundColor: 'gray',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: padding.lg,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    overflow: 'hidden',
    paddingStart: padding.md,
  },
});

export {HeaderComponent};
