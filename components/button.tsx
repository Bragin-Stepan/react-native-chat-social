import icons from './../shared/icons';
import {useNavigation} from '@react-navigation/native';
import {TBaseIcon} from './../shared/types';

const navigation = useNavigation();

export const arrowLeftIcon: TBaseIcon = {
  icon: icons.arrow_left,
  onPress: () => navigation.goBack(),
};
