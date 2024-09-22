import {ViewProps, StyleProp, TextStyle} from 'react-native';

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
  textValue?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
}

// Header
export interface IHeaderProps extends IWInput {
  title?: string;
  placeholder?: string;
  item?: any;
}

// Profile Item
export interface IProfileItemProps {
  id: number;
  nickname: string;
  subTitle?: string;
  avatar: string;
  whenWasOnline?: string;
  isOnline: boolean;
  customSubTitle?: StyleProp<TextStyle>;
  titleRight?: string;
  countMessage?: number;
  onPress?: () => void;
}

// Message
export type TMessageProps = {
  messageId: number;
  content: string;
  timestamp: string;
  isRead: boolean;
};

// User messages
export interface IUserMessagesState {
  chatId: number;
  senderId: number;
  receiverId: number;
  messages: TMessageProps[];
}
