import React from 'react';
import {LoadBlock, WText, WView} from '../../shared/themed';
import {HeaderComponent} from '../header';
import useAppColor from '../../shared/colors/use-color';
import {arrowLeftIcon} from '../button';
import {spacing} from '../../shared/sizes';
import icons from '../../shared/icons';
import {TBaseIcon} from '../../shared/types';
import {ProfileItem} from '../shared/profile-item';
import {getUsersInformation} from '../../shared/api';
import {useAppDispatch, useAppSelector} from '../../shared/redux/hooks';
import {fetchUserMessages} from '../../shared/redux/actions/user-messages';
import {fetchUsers} from '../../shared/redux/actions/users';
import {formatLastOnlineTime} from '../../utils/online-format';

const appColor = useAppColor();

const dotsIcon: TBaseIcon = {
  icon: icons.dots,
  onPress: () => {
    null;
  },
};

const ChatRoute = React.memo((props: any) => {
  const {userId} = props.route.params;

  const {users, usersLoading} = useAppSelector(state => state.users);
  const {userMessages, messagesLoading} = useAppSelector(
    state => state.userMessages,
  );

  const user = users.find(user => user.id === userId);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserMessages());
  }, [dispatch]);

  if (usersLoading || messagesLoading) {
    return <LoadBlock />;
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
              customSubTitle={{
                color: user.isOnline
                  ? appColor.system_verified_normal
                  : undefined,
              }}
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

export {ChatRoute};

// const ChatRoute = React.memo((props: any) => {
//   const appColor = useAppColor();

//   const [users, setUsers] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const fetchUsers = async () => {
//       const userData = await getUsersInformation();
//       setUsers(userData);
//       setLoading(false);
//     };

//     fetchUsers();
//   }, []);

//   if (loading) {
//     return <LoadBlock />;
//   }

//   const onProfilePress = () => {
//     props.navigation.navigate('profilePage');
//   };

//   return (
//     <WView isParent>
//       <HeaderComponent
//         {...{
//           iconsLeft: [arrowLeftIcon],
//           iconsRight: [dotsIcon],
//         }}
//         item={
//           <ProfileItem
//             id={1}
//             onPress={onProfilePress}
//             nickname={String(users[0].nickname)}
//             avatar={String(users[0].avatar)}
//             isOnline={users[0].isOnline}
//             subTitle="Онлайн"
//           />
//         }
//       />
//       <WView
//         style={{
//           height: '100%',
//           backgroundColor: appColor.base_secondary_normal,
//         }}>
//         <WText variant="T2" style={{paddingHorizontal: spacing.lg}}>
//           {String(users[0].lastMessage)}
//         </WText>
//       </WView>
//     </WView>
//   );
// });

// export {ChatRoute};
