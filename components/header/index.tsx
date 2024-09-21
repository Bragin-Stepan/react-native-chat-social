import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconsRow, WText} from '../../shared/themed';
import {spacing} from '../../shared/sizes';
import {IHeaderProps} from '../../shared/types';
import HeaderSearch from './header-search';

const HeaderComponent = React.memo((props: IHeaderProps) => {
  return (
    <View style={styles.headerStyle}>
      {/* ======== Icons Left ======== */}
      {props.iconsLeft && <IconsRow icons={props.iconsLeft} />}

      {/* ======== Title ======== */}
      {props.title && (
        <WText
          variant="T1"
          style={styles.headerTitle}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.title}
        </WText>
      )}

      {/* ======== Search ======== */}
      {props.placeholder && <HeaderSearch placeholder={props.placeholder} />}

      {/* ======== Icons Right ======== */}
      <View />
      {props.iconsRight && <IconsRow icons={props.iconsRight} />}
    </View>
  );
});

// ======== Стили ========
const styles = StyleSheet.create({
  headerStyle: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    overflow: 'hidden',
    paddingStart: spacing.md,
  },
});

export {HeaderComponent};
