import React from 'react';
import {View, StyleSheet} from 'react-native';

import {IconsRow, WText} from '../../shared/themed';
import {spacing} from '../../shared/sizes';
import {IHeaderProps} from '../../shared/types';
import HeaderSearch from './header-search';
import {ProfileItem} from '../shared/profile-item';

const HeaderComponent = React.memo((props: IHeaderProps) => {
  return (
    <View style={styles.headerStyle}>
      {/* ======== Icons Left ======== */}
      {props.iconsLeft && <IconsRow side="Left" icons={props.iconsLeft} />}

      {/* ======== Title ======== */}
      {props.title && (
        <WText
          variant="T1"
          style={[
            styles.headerTitle,
            // props.iconsLeft && {paddingStart: spacing.md},
          ]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.title}
        </WText>
      )}

      {/* ======== Item ======== */}
      {props.item}

      {/* ======== Search ======== */}
      {props.placeholder && (
        <HeaderSearch
          placeholder={props.placeholder}
          textValue={props.textValue}
          onChangeText={props.onChangeText}
        />
      )}

      {/* ======== Icons Right ======== */}
      {props.iconsRight && <IconsRow side="Right" icons={props.iconsRight} />}
    </View>
  );
});

// ======== Стили ========
const styles = StyleSheet.create({
  headerStyle: {
    paddingHorizontal: spacing.lg,
    height: 60,
    // maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    overflow: 'hidden',
  },
});

export {HeaderComponent};
