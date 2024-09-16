import React from 'react';
import {useColorScheme} from 'react-native';
import colors from './colors-sources';

const useAppColor = () => {
  const appMode = useColorScheme() ? 'light' : 'dark';

  return colors[appMode];
};

export default useAppColor;
