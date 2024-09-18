import React from 'react';
import icons from './../shared/icons';
import {useNavigation} from '@react-navigation/native';
import {TBaseIcon} from './../shared/types';
import {Alert} from 'react-native';

const navigation = useNavigation();

export const arrowLeftIcon: TBaseIcon = {
  icon: icons.arrow_left,
  onPress: () => navigation.goBack(),
};

// export const notificationsIcon: IPressedIcon = {
//   icon: icons.notifications,
//   onPress: () => navigation.navigate('Notifications'),
// };

// const arrowLeftIcon = React.memo((icon: IPressedIcon) => {
//   return (
//      icon: icons.arrow_left,
//   onPress: () => navigation.goBack(),
//   );
// });
