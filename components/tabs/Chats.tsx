import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WView} from '../../shared/themed';
import DefaultRoute from '../chats-comps/default-route';
import {ChatSettingsRoute} from '../chats-comps/chat-settings-route';
import {ChatRoute} from '../chats-comps/chat-route';
import {ProfileComponent} from './profile';

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
        <Stack.Screen
          name="chatSettingsPage"
          component={ChatSettingsRoute}
          options={{
            animation: 'none',
            // animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="chatPage"
          component={ChatRoute}
          options={{
            animation: 'none',
            // animation: 'slide_from_right',
          }}
        />
        <Stack.Screen
          name="profilePage"
          component={ProfileComponent}
          options={{
            animation: 'none',
            // animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </WView>
  );
});

export {ChatsComponent};
