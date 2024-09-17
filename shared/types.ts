import {TextProps, ViewProps, StyleProp, TextStyle} from 'react-native';
import fonts from './fonts/fonts-sources';

// Define a type for the main slice state
export interface IMainSlice {
  value: number;
}

// View
export interface IWView extends ViewProps {
  isParent?: boolean;
}

// Input
export interface IWInput {
  iconsLeft?: IPressedIcon[];
  iconsRight?: IPressedIcon[];
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

// Header
export type THeaderProps = {
  iconsLeft?: IPressedIcon[];
  iconsRight?: IPressedIcon[];
  title?: string;
  placeholder?: string;
};

// Base Icon
export interface IBaseIcon {
  icon: JSX.Element;
}

// Pressed Icon
export interface IPressedIcon extends IBaseIcon {
  onPress?: Function;
}
