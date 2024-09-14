import {TextProps, ViewProps} from 'react-native';
import fonts from './fonts';

// Define a type for the slice state
export interface IMainSlice {
  value: number;
}

//
export interface IWText extends TextProps {
  fontFamily?: keyof typeof fonts;
}

export interface IWView extends ViewProps {
  isParrent?: boolean;
}
