import {TextProps, ViewProps} from 'react-native';
import fonts from './fonts/fonts-sources';

// Define a type for the slice state
export interface IMainSlice {
  value: number;
}

export interface IWView extends ViewProps {
  isParrent?: boolean;
}
