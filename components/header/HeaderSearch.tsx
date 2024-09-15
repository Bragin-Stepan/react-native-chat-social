import React from 'react';

import {View, Image, StyleSheet} from 'react-native';
import {WInput} from '../../shared/themed';
import icons from '../../shared/icons';
import {borderRadius} from '../../shared/sizes';
import useAppColor from '../../shared/colors/useColor';
import {padding} from '../../shared/sizes';

interface SearchProps {
  placeholder?: string;
}

const HeaderSearch = React.memo((props: SearchProps) => {
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
        iconsLeft={[icons.search]}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: padding.md,
    borderRadius: borderRadius.md,
  },
  input: {
    borderRadius: borderRadius.md,
    flex: 1,
  },
});

export default HeaderSearch;
