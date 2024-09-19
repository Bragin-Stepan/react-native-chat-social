import React from 'react';
import {Text, TextProps} from 'react-native';

import fontsStyles from './font-styles';
import useAppColor from '../colors/use-color';
import {getColorVariant} from './get-color-variant';

interface IWTextProps extends TextProps {
  variant: keyof typeof fontsStyles;
  customColor?: keyof ReturnType<typeof useAppColor>;
  children: string;
}

export const WText = React.memo((props: IWTextProps) => {
  const {variant, style, children, customColor, ...rest} = props;
  const textStyle = fontsStyles[variant];
  const appColor = useAppColor();

  const color = customColor ? appColor[customColor] : getColorVariant(variant);

  return (
    <Text {...rest} style={[textStyle, {color}, style]}>
      {children}
    </Text>
  );
});

// Так сделанно из за функции useAppColor(), она работает только внутри Другой функции

// Пример использования обертки:
{
  /*
  <WText variant="T1" customColor="base_primary_dark"> Заголовок T1 </WText> 
*/
}
