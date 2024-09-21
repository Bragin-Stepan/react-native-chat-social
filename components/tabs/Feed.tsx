import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WView} from '../../shared/themed';
import DefaultRoute from '../feed-comps/default-route';

const Stack = createNativeStackNavigator();

const FeedComponent = React.memo((props: any) => {
  return (
    <WView style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="feedDefault" component={DefaultRoute} />
        {/* <Stack.Screen name="feedPage" component={SettingsChatRoute} /> */}
      </Stack.Navigator>
    </WView>
  );
});

export {FeedComponent};
