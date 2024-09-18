import {TextProps, ViewProps, StyleProp, TextStyle} from 'react-native';

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
  iconsLeft?: TBaseIcon[];
  iconsRight?: TBaseIcon[];
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

// Header
export interface IHeaderProps {
  iconsLeft?: TBaseIcon[];
  iconsRight?: TBaseIcon[];
  title?: string;
  placeholder?: string;
}

// Base Icon
export type TBaseIcon = {
  icon: JSX.Element;
  onPress?: () => void;
};
