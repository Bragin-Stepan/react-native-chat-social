import {Image} from 'react-native';
import iconSources from './iconSources';

const iconNavBarSize = 46;
const iconSmallSize = 14;

export default {
  // ======= NavBar =======
  chat_outline: (
    <Image
      source={iconSources.ChatOutline}
      style={{width: iconNavBarSize, height: iconNavBarSize}}
    />
  ),
  chat_fill: (
    <Image
      source={iconSources.ChatFill}
      style={{width: iconNavBarSize, height: iconNavBarSize}}
    />
  ),
  profile_outline: (
    <Image
      source={iconSources.ProfileOutline}
      style={{width: iconNavBarSize, height: iconNavBarSize}}
    />
  ),
  profile_fill: (
    <Image
      source={iconSources.ProfileFill}
      style={{width: iconNavBarSize, height: iconNavBarSize}}
    />
  ),
  home_outline: (
    <Image
      source={iconSources.HomeOutline}
      style={{width: iconNavBarSize, height: iconNavBarSize}}
    />
  ),
  home_fill: (
    <Image
      source={iconSources.HomeFill}
      style={{width: iconNavBarSize, height: iconNavBarSize}}
    />
  ),
  search_outline: (
    <Image
      source={iconSources.SearchOutline}
      style={{width: iconNavBarSize, height: iconNavBarSize}}
    />
  ),
  search_fill: (
    <Image
      source={iconSources.SearchFill}
      style={{width: iconNavBarSize, height: iconNavBarSize}}
    />
  ),

  // ======= Small =======
  arrow_left: (
    <Image
      source={iconSources.ArrowLeft}
      style={{width: iconSmallSize, height: iconSmallSize}}
    />
  ),
};
