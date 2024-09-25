import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WText} from '../../../shared/themed';
import {borderRadius, spacing} from '../../../shared/sizes';
import {formaHoursMinutesTime} from '../../../utils/time-format';
import useAppColor from '../../../shared/colors/use-color';
import {MY_ID} from '../../../shared/constants';

interface MessageItemProps {
  message: any;
}

const MessageItem: React.FC<MessageItemProps> = ({message}) => {
  const appColor = useAppColor();
  const myMessage = message.senderId === MY_ID;
  const words = message.content.split(' ');

  const timeSent = formaHoursMinutesTime(message.timestamp);

  return (
    <View
      style={[
        styles.messageContainer,
        myMessage
          ? {backgroundColor: '#ebeaff', alignSelf: 'flex-end'}
          : {
              backgroundColor: appColor.base_secondary_light,
              alignSelf: 'flex-start',
            },
      ]}>
      <View
        style={
          myMessage
            ? [styles.myTab, {backgroundColor: '#ebeaff'}]
            : [
                styles.theirTab,
                {backgroundColor: appColor.base_secondary_light},
              ]
        }
      />

      <View>
        <WText variant="P1" style={styles.messageText}>
          {`${words.join(
            ' ',
            //Да, это такой отступ
          )}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`}
        </WText>
        <WText variant="C1" style={styles.timeText}>
          {` ${timeSent}`}
        </WText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    shadowOffset: {width: 4, height: 4},
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    maxWidth: '90%',
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
  timeText: {
    position: 'absolute',
    right: 2,
    bottom: 1,
  },
  messageText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default MessageItem;
