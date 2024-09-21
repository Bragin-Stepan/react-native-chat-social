import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Image,
  Text,
} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import useAppColor from './shared/colors/use-color';
import icons from './shared/icons';
import {ChatsComponent} from './components/tabs/chats';
import {FeedComponent} from './components/tabs/feed';
import {SearchComponent} from './components/tabs/search';
import {ProfileComponent} from './components/tabs/profile';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const appColor = useAppColor();

  // Навбар
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'feed',
      title: '',
      focusedIcon: () => icons.home_fill,
      unfocusedIcon: () => icons.home_outline,
    },
    {
      key: 'search',
      title: '',
      focusedIcon: () => icons.search_fill,
      unfocusedIcon: () => icons.search_outline,
    },
    {
      key: 'chat',
      title: '',
      focusedIcon: () => icons.chat_fill,
      unfocusedIcon: () => icons.chat_outline,
    },
    {
      key: 'profile',
      title: '',
      focusedIcon: () => icons.profile_fill,
      unfocusedIcon: () => icons.profile_outline,
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feed: FeedComponent,
    search: SearchComponent,
    chat: ChatsComponent,
    profile: ProfileComponent,
  });

  return (
    <SafeAreaView
      style={{
        height: '100%',
        flex: 1,
        backgroundColor: appColor.base_secondary_light,
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={appColor.base_secondary_light}
      />
      <BottomNavigation
        key={index}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
        // Style
        // renderLabel={({route, focused}) => (
        //   <Text
        //     style={{
        //       fontFamily: fonts.bold,
        //       fontSize: 10,
        //       marginTop: 4,
        //       color: focused
        //         ? appColor.base_primary_dark
        //         : appColor.base_primary_light,
        //       textAlign: 'center',
        //     }}>
        //     {route.title}
        //   </Text>
        // )}
        activeIndicatorStyle={{backgroundColor: appColor.base_secondary_light}}
        barStyle={{
          backgroundColor: appColor.base_secondary_light,
          borderTopWidth: 2,
          borderColor: appColor.base_secondary_normal,
          height: 80,
          // marginBottom: 20,
        }}
      />
    </SafeAreaView>
  );
}

export default App;
