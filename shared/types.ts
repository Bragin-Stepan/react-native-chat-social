import {ViewProps, StyleProp, TextStyle} from 'react-native';

// Define a type for the main slice state
export interface IMainSlice {
  value: number;
}

// View
export interface IWView extends ViewProps {
  isParent?: boolean;
}

// Base Icon
export type TBaseIcon = {
  icon: JSX.Element;
  onPress?: () => void;
};

// Icons Row
export interface IIconsRow {
  iconsLeft?: TBaseIcon[];
  iconsRight?: TBaseIcon[];
  index?: number;
}

// Input
export interface IWInput extends IIconsRow {
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

// Header
export interface IHeaderProps extends IIconsRow {
  title?: string;
  placeholder?: string;
  item?: any;
}
