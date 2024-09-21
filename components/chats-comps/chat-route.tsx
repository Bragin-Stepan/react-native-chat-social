import React from 'react';
import {WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import useAppColor from '../../shared/colors/use-color';
import {arrowLeftIcon} from '../button';
import {spacing} from '../../shared/sizes';
import icons from '../../shared/icons';
import {TBaseIcon} from '../../shared/types';
import {ProfileItem} from '../shared/profile-item';

const dotsIcon: TBaseIcon = {
  icon: icons.dots,
  onPress: () => {
    null;
  },
};

const ChatRoute = React.memo((props: any) => {
  const onProfilePress = () => {
    props.navigation.navigate('profilePage');
  };

  return (
    <WView isParent>
      <HeaderComponent
        {...{
          iconsLeft: [arrowLeftIcon],
          iconsRight: [dotsIcon],
        }}
        item={
          <ProfileItem
            id={1}
            onPress={onProfilePress}
            nickname="Nickname"
            avatar="https://i.pravatar.cc/296"
            subTitle="Был(а) в сети вчера"
          />
        }
      />
      <WText variant="T2" style={{paddingHorizontal: spacing.lg}}>
        Экран чата с пользователем
      </WText>
    </WView>
  );
});

export {ChatRoute};
