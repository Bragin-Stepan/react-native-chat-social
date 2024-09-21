import {Image} from 'react-native';
import iconSources from './icon-sources';

const iconLargeSize = 46;
const iconSmallSize = 14;

export default {
  // ======= NavBar =======
  chat_outline: (
    <Image
      source={iconSources.ChatOutline}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),
  chat_fill: (
    <Image
      source={iconSources.ChatFill}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),
  profile_outline: (
    <Image
      source={iconSources.ProfileOutline}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),
  profile_fill: (
    <Image
      source={iconSources.ProfileFill}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),
  home_outline: (
    <Image
      source={iconSources.HomeOutline}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),
  home_fill: (
    <Image
      source={iconSources.HomeFill}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),
  search_outline: (
    <Image
      source={iconSources.SearchOutline}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),
  search_fill: (
    <Image
      source={iconSources.SearchFill}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),

  // ======= Large =======
  settings: (
    <Image
      source={iconSources.Settings}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),
  dots: (
    <Image
      source={iconSources.Dots}
      style={{width: iconLargeSize, height: iconLargeSize}}
    />
  ),

  // ======= Small =======
  arrow_left: (
    <Image
      source={iconSources.ArrowLeft}
      style={{width: iconSmallSize, height: iconSmallSize}}
    />
  ),
  search: (
    <Image
      source={iconSources.Search}
      style={{width: iconSmallSize, height: iconSmallSize}}
    />
  ),
};
