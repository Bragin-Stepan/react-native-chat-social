import {StyleSheet} from 'react-native';
import {borderRadius, spacing} from '../../../../shared/sizes';

export const styles = StyleSheet.create({
  messageContainer: {
    shadowOffset: {width: 4, height: 4},
    marginBottom: spacing.xxs,
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
  messageText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
