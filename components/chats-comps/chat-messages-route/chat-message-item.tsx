import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WText} from '../../../shared/themed';
import {borderRadius, spacing} from '../../../shared/sizes';
import {formaHoursMinutesTime} from '../../../utils/time-format';
import useAppColor from '../../../shared/colors/use-color';
import {MY_ID} from '../../../shared/constants';
import icons from '../../../shared/icons';

interface MessageItemProps {
  message: any;
  isFirstInGroup: boolean;
  isLastInGroup: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({
  message,
  isFirstInGroup,
  isLastInGroup,
}) => {
  const appColor = useAppColor();
  const myMessage = message.senderId === MY_ID;
  const words = message.content.split(' ');
  const timeSent = formaHoursMinutesTime(message.timestamp);

  // Да, так надо
  const messageTimeTextSpacing = myMessage
    ? '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'
    : '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';

  const messageCheckIcon = myMessage
    ? message.isRead
      ? icons.chat_check_read
      : icons.chat_check_delivered
    : null;

  const borderRadiusStyle = myMessage
    ? {
        borderTopLeftRadius: borderRadius.lg,
        borderTopRightRadius: isFirstInGroup
          ? borderRadius.lg
          : borderRadius.md,
        borderBottomLeftRadius: borderRadius.lg,
        borderBottomRightRadius: isLastInGroup ? 4 : borderRadius.md,
      }
    : {
        borderTopLeftRadius: isFirstInGroup ? borderRadius.lg : borderRadius.md,
        borderTopRightRadius: borderRadius.lg,
        borderBottomLeftRadius: isLastInGroup ? 4 : borderRadius.md,
        borderBottomRightRadius: borderRadius.lg,
      };

  return (
    <View
      style={[
        styles.messageContainer,
        borderRadiusStyle,
        myMessage
          ? {
              backgroundColor: appColor.brand_primary_normal,
              alignSelf: 'flex-end',
            }
          : {
              backgroundColor: appColor.base_secondary_light,
              alignSelf: 'flex-start',
            },
      ]}>
      <View
        style={[
          myMessage
            ? [
                isLastInGroup && styles.myTab,
                {backgroundColor: appColor.brand_primary_normal},
              ]
            : [
                isLastInGroup && styles.theirTab,
                {backgroundColor: appColor.base_secondary_light},
              ],
        ]}
      />

      <View>
        <WText
          variant="P1"
          style={styles.messageText}
          customColor={myMessage ? 'base_secondary_light' : null}>
          {`${words.join(' ')}${messageTimeTextSpacing}`}
        </WText>

        <View style={styles.timeWrapper}>
          <WText
            variant="P2"
            style={
              myMessage
                ? {color: appColor.base_secondary_dark, marginRight: spacing.xs}
                : {color: appColor.base_primary_light}
            }>
            {` ${timeSent}`}
          </WText>
          <View style={!message.isRead && {opacity: 0.4}}>
            {messageCheckIcon}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    shadowOffset: {width: 4, height: 4},
    marginBottom: spacing.xxs,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    maxWidth: '88%',
    position: 'relative',
  },
  theirTab: {
    position: 'absolute',
    bottom: 0,
    left: -7,
    width: 20,
    height: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 6,
  },
  myTab: {
    position: 'absolute',
    bottom: 0,
    right: -7,
    width: 20,
    height: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 6,
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 1,
    bottom: 1,
  },
  // timeText: {
  //   marginLeft: 2,
  // },
  messageText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default MessageItem;
