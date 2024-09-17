import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WView} from '../../shared/themed';
import DefaultRoute from '../chats-comps/default-route';
import {ChatRoute} from '../chats-comps/chat-route';

const Stack = createNativeStackNavigator();

// interface ChatsProps {
//   messages: string[];
//   userId: number;
// }

const ChatsComponent = React.memo((props: any) => {
  return (
    <WView style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="chatDefault" component={DefaultRoute} />
        <Stack.Screen name="chatPage" component={ChatRoute} />
      </Stack.Navigator>
    </WView>
  );
});

export {ChatsComponent};
