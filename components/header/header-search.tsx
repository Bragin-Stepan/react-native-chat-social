import React from 'react';

import {View, Image, StyleSheet} from 'react-native';
import {WInput} from '../../shared/themed';
import icons from '../../shared/icons';
import {borderRadius, spacing} from '../../shared/sizes';
import useAppColor from '../../shared/colors/use-color';
import {IPressedIcon} from '../../shared/types';

const arrowLeftIcon: IPressedIcon = {
  icon: icons.arrow_left,
  onPress: () => null,
};

const HeaderSearch = React.memo((props: any) => {
  const appColor = useAppColor();
  return (
    <View
      style={[
        {backgroundColor: appColor.base_secondary_normal},
        styles.searchContainer,
      ]}>
      <WInput
        placeholder={props.placeholder}
        style={styles.input}
        iconsLeft={[arrowLeftIcon]}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.md,
    borderRadius: borderRadius.md,
  },
  input: {
    borderRadius: borderRadius.md,
    flex: 1,
  },
});

export default HeaderSearch;