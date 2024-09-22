import React from 'react';
import {Provider} from 'react-redux';
import App from '../App';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import store from '../shared/redux/store';

const ProviderComp = React.memo((props: any) => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
});

export default ProviderComp;
