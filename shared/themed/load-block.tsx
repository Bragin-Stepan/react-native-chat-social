import React from 'react';
import {WText} from '../fonts';
import {WView} from './view';
import {HeaderComponent} from '../../components/header';
import {View} from 'react-native';
import useAppColor from '../colors/use-color';
import {spacing} from '../sizes';

export const LoadHeader = React.memo((props: any) => {
  const appColor = useAppColor();

  return (
    <WView isParent style={{}}>
      <View
        style={{
          borderRadius: 50,
          height: 40,
          backgroundColor: appColor.base_secondary_normal,
          width: '40%',
          margin: spacing.lg,
        }}
      />
      {props.children}
      {/* <View
        style={{
          backgroundColor: appColor.base_secondary_normal,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        <WText variant="P1">{'Загрузка...'}</WText>
      </View> */}
    </WView>
  );
});
