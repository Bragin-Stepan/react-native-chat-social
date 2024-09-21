import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WView} from '../../shared/themed';
import DefaultRoute from '../search-comps/default-route';

const Stack = createNativeStackNavigator();

const SearchComponent = React.memo((props: any) => {
  return (
    <WView style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="searchDefault" component={DefaultRoute} />
        {/* <Stack.Screen name="feedPage" component={SettingsChatRoute} /> */}
      </Stack.Navigator>
    </WView>
  );
});

export {SearchComponent};
