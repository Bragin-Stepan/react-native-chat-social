import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {WText} from '../../shared/fonts';
import {spacing} from '../../shared/sizes';
import useAppColor from '../../shared/colors/use-color';
import {IProfileItemProps} from '../../shared/types';

export const ProfileItem = React.memo((props: IProfileItemProps) => {
  const appColor = useAppColor();
  const [isOnline, setIsOnline] = React.useState(props.isOnline);

  const formatCountMessage = (count: number) => {
    if (count > 99) {
      return '99+';
    } else if (count === 0) {
      return '0';
    } else {
      return count.toString();
    }
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={[
              styles.avatar,
              {
                borderColor: isOnline
                  ? appColor.system_success_normal
                  : appColor.base_secondary_dark,
              },
            ]}
            source={{uri: props.avatar}}
          />
        </View>
        <View style={styles.textContainer}>
          <WText
            variant="T3"
            customColor="base_primary_dark"
            numberOfLines={1}
            ellipsizeMode="tail">
            {props.nickname}
          </WText>
          <WText
            style={props.customSubTitle}
            variant="P1"
            customColor="base_primary_light"
            numberOfLines={1}
            ellipsizeMode="tail">
            {String(props.subTitle)}
          </WText>
        </View>
      </View>
      <View style={styles.countContainer}>
        {props.titleRight && (
          <WText
            variant="P1"
            customColor="base_primary_light"
            style={styles.titleRightText}>
            {props.titleRight}
          </WText>
        )}
        {props.countMessage && props.countMessage >= 0 ? (
          <View
            style={[
              styles.countBubble,
              {backgroundColor: appColor.brand_primary_normal},
            ]}>
            <WText
              variant="B2"
              customColor="base_secondary_light"
              style={styles.countText}>
              {formatCountMessage(props.countMessage)}
            </WText>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flex: 7,
    flexDirection: 'row',
  },
  imageContainer: {
    justifyContent: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderWidth: 3,
  },
  textContainer: {
    marginLeft: spacing.md,
    maxWidth: '80%',
    height: 40,
    justifyContent: 'space-between',
  },
  countContainer: {
    height: 50,
    marginTop: -spacing.md,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleRightText: {
    flex: 1,
    textAlign: 'right',
    minWidth: 80,
  },
  countBubble: {
    borderRadius: 30,
    paddingHorizontal: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    margin: 1,
  },
});

export default ProfileItem;
