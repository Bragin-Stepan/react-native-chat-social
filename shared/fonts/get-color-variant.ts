import useAppColor from '../colors/use-color';
import fontsStyles from './fonts-styles';

const darkVariants = [
  'T1',
  'T2',
  'T3',
  'C2',
  'P1',
  'P2',
  'P1_italic',
  'L1',
  'S1',
];
const lightVariants = ['C1', 'B3'];
const secondaryLightVariants = ['B1', 'B2'];

export const getColorVariant = (variant: keyof typeof fontsStyles) => {
  const appColor = useAppColor();

  if (darkVariants.includes(variant)) {
    return appColor.base_primary_dark;
  } else if (lightVariants.includes(variant)) {
    return appColor.base_primary_light;
  } else if (secondaryLightVariants.includes(variant)) {
    return appColor.base_secondary_light;
  } else {
    return appColor.base_primary_dark;
  }
};
