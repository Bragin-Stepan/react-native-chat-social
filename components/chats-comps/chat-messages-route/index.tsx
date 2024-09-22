import React from 'react';
import {LoadHeader, WText, WView} from '../../../shared/themed';
import {HeaderComponent} from '../../header';
import useAppColor from '../../../shared/colors/use-color';
import {arrowLeftIcon} from '../../button';
import {spacing} from '../../../shared/sizes';
import icons from '../../../shared/icons';
import {TBaseIcon} from '../../../shared/types';
import {ProfileItem} from '../../shared/profile-item';
import {getUsersInformation} from '../../../shared/api';
import {useAppDispatch, useAppSelector} from '../../../shared/redux/hooks';
import {fetchUserMessages} from '../../../shared/redux/actions/user-messages';
import {fetchUsers} from '../../../shared/redux/actions/users';
import {formatLastOnlineTime} from '../../../utils/online-format';
import {View} from 'react-native';

const dotsIcon: TBaseIcon = {
  icon: icons.dots,
  onPress: () => {
    null;
  },
};

const ChatMessagesRoute = React.memo((props: any) => {
  const appColor = useAppColor();
  const dispatch = useAppDispatch();
  const {userId} = props.route.params;

  const {users, usersLoading} = useAppSelector(state => state.users);
  const {userMessages, messagesLoading} = useAppSelector(
    state => state.userMessages,
  );

  const user = users.find(user => user.id === userId);

  // Вызов данных
  React.useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserMessages());
  }, [dispatch]);

  // Загрузка
  if (usersLoading || messagesLoading) {
    return (
      <View
        style={{
          backgroundColor: appColor.base_secondary_normal,
          height: '100%',
        }}>
        <View
          style={{
            backgroundColor: appColor.base_secondary_light,
            height: '8%',
          }}></View>
      </View>
    );
  }

  return (
    <WView isParent>
      {user && (
        <HeaderComponent
          {...{
            iconsLeft: [arrowLeftIcon],
            iconsRight: [dotsIcon],
          }}
          item={
            <ProfileItem
              id={user.id}
              nickname={user.nickname}
              avatar={String(user.avatar)}
              isOnline={user.isOnline}
              subTitle={formatLastOnlineTime(
                String(user.whenWasOnline),
                user.isOnline,
              )}
              // customSubTitle = {user.isOnline &&appColor.system_verified_normal}}

              customSubTitle={
                user.isOnline
                  ? {color: appColor.system_success_normal}
                  : undefined
              }
            />
          }
        />
      )}
      <WView
        style={{
          height: '100%',
          backgroundColor: appColor.base_secondary_normal,
        }}>
        <WText variant="T2" style={{paddingHorizontal: spacing.lg}}>
          {/* {String(user?.lastMessage)} */}
          {`ID:${String(userId)}`}
        </WText>
      </WView>
    </WView>
  );
});

export {ChatMessagesRoute};
