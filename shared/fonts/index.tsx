import React from 'react';
import {Text, TextProps} from 'react-native';

import fontsStyles from './fonts-styles';
import useAppColor from '../colors/use-color';
import {getColorVariant} from './get-color-variant';

interface IWTextProps extends TextProps {
  variant: keyof typeof fontsStyles;
  children: string;
}

export const WText = React.memo((props: IWTextProps) => {
  const {variant, style, children, ...rest} = props;

  const textStyle = fontsStyles[variant];

  const color = getColorVariant(variant);

  return (
    <Text {...rest} style={[textStyle, {color}, style]}>
      {children}
    </Text>
  );
});

// Так сделанно из за функции useAppColor(), она работает только внутри функции
// Пример использования:
{
  /*
  <WText variant="T1"> Заголовок T1 </WText> 
*/
}
