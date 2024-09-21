import useAppColor from '../colors/use-color';
import fontStyle from './font-style';

const primaryDarkVariants = [
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
const primarylightVariants = ['C1', 'B3'];
const secondaryLightVariants = ['B1', 'B2'];

export const getColorVariant = (variant: keyof typeof fontStyle) => {
  const appColor = useAppColor();

  if (primaryDarkVariants.includes(variant)) {
    return appColor.base_primary_dark;
  } else if (primarylightVariants.includes(variant)) {
    return appColor.base_primary_light;
  } else if (secondaryLightVariants.includes(variant)) {
    return appColor.base_secondary_light;
  } else {
    return appColor.base_primary_dark;
  }
};
