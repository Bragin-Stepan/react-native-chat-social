import React, {useRef, useEffect} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {WView, WText} from '../../../shared/themed';
import {HeaderComponent} from '../../header';
import useAppColor from '../../../shared/colors/use-color';
import {arrowLeftIcon} from '../../button';
import icons from '../../../shared/icons';
import {TBaseIcon} from '../../../shared/types';
import {ProfileItem} from '../../shared/profile-item';
import {useAppDispatch, useAppSelector} from '../../../shared/redux/hooks';
import {fetchUserMessages} from '../../../shared/redux/actions/user-messages';
import {fetchUsers} from '../../../shared/redux/actions/users';
import {formatLastOnlineTime} from '../../../utils/online-format';
import MessageItem from './chat-message-item';
import {formatLastMessagesGroupTime} from '../../../utils/time-format';
import {spacing} from '../../../shared/sizes';

const dotsIcon: TBaseIcon = {
  icon: icons.dots,
  onPress: () => null,
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
  const chatMessages = userMessages.find(chat => chat.senderId === userId);

  const scrollViewRef = useRef<ScrollView>(null);

  const DateSeparator = ({date}: {date: string}) => (
    <View style={styles.dateSeparator}>
      <WText variant="C1">{date}</WText>
    </View>
  );

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserMessages());
  }, [dispatch]);

  useEffect(() => {
    if (chatMessages && scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  }, [chatMessages]);

  if (usersLoading || messagesLoading) {
    return (
      <View
        style={[
          styles.loadingContainer,
          {backgroundColor: appColor.base_secondary_normal},
        ]}>
        <View
          style={[
            styles.headerPlaceholder,
            {backgroundColor: appColor.base_secondary_light},
          ]}
        />
      </View>
    );
  }

  const addedDates = new Set();

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
              customSubTitle={
                user.isOnline && {color: appColor.system_success_normal}
              }
            />
          }
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{paddingBottom: spacing.xl}}
        style={[
          styles.scrollContent,
          {backgroundColor: appColor.base_secondary_normal},
          // {backgroundColor: '#27154c'},
        ]}>
        {chatMessages?.messages.map((message, index) => {
          const previousMessage = chatMessages.messages[index - 1];
          const nextMessage = chatMessages.messages[index + 1];

          const isSameSenderPrevious =
            previousMessage && previousMessage.senderId === message.senderId;
          const isSameDayPrevious =
            previousMessage &&
            formatLastMessagesGroupTime(previousMessage.timestamp) ===
              formatLastMessagesGroupTime(message.timestamp);

          const isSameSenderNext =
            nextMessage && nextMessage.senderId === message.senderId;
          const isSameDayNext =
            nextMessage &&
            formatLastMessagesGroupTime(nextMessage.timestamp) ===
              formatLastMessagesGroupTime(message.timestamp);

          const isFirstInGroup = !(isSameSenderPrevious && isSameDayPrevious);
          const isLastInGroup = !(isSameSenderNext && isSameDayNext);

          const messageDate = formatLastMessagesGroupTime(message.timestamp);
          const showDateSeparator =
            isFirstInGroup && !addedDates.has(messageDate);

          if (showDateSeparator) {
            addedDates.add(messageDate);
          }

          const isDifferentSender =
            previousMessage && previousMessage.senderId !== message.senderId;
          const marginTop = isDifferentSender ? spacing.md : 0;

          return (
            <React.Fragment key={index}>
              {showDateSeparator && (
                <DateSeparator
                  date={formatLastMessagesGroupTime(message.timestamp)}
                />
              )}
              <View style={{marginTop}}>
                <MessageItem
                  message={message}
                  isFirstInGroup={isFirstInGroup}
                  isLastInGroup={isLastInGroup}
                />
              </View>
            </React.Fragment>
          );
        })}
      </ScrollView>
    </WView>
  );
});

const styles = StyleSheet.create({
  loadingContainer: {
    height: '100%',
  },
  headerPlaceholder: {
    height: '8%',
  },
  scrollContent: {
    padding: spacing.lg,
  },
  dateSeparator: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    alignSelf: 'center',
    borderRadius: 55,
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
});

export {ChatMessagesRoute};
