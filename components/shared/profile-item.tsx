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
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          // backgroundColor: 'red',
          // justifyContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Image
            style={{
              height: 50,
              width: 50,
              borderRadius: 30,
              borderWidth: 3,
              borderColor: isOnline
                ? appColor.system_success_normal
                : appColor.base_secondary_dark,
            }}
            source={{uri: props.avatar}}
          />
        </View>
        <View
          style={{
            marginLeft: spacing.md,
            maxWidth: '80%',
            height: 40,
            justifyContent: 'space-between',
          }}>
          <WText
            variant="C1"
            customColor="base_primary_dark"
            numberOfLines={1}
            ellipsizeMode="tail"
            // style={{marginBottom: spacing.xxs}}
          >
            {props.nickname}
          </WText>
          <WText
            variant="P2"
            customColor="base_primary_light"
            numberOfLines={1}
            ellipsizeMode="tail">
            {String(props.subTitle)}
          </WText>
        </View>
      </View>
      <View
        style={{
          height: 40,
          flex: 1,
          // backgroundColor: 'red',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        {props.titleRight && (
          <WText
            variant="P2"
            customColor="base_primary_light"
            style={{
              flex: 1,
              textAlign: 'right',
              // backgroundColor: 'red',
              minWidth: 60,
            }}
            // style={{marginBottom: spacing.xxs}}
          >
            {props.titleRight}
          </WText>
        )}
        <View
          style={{
            borderRadius: 30,
            paddingHorizontal: spacing.xs,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: appColor.brand_primary_normal,
          }}>
          {props.countMessage && props.countMessage >= 0 ? (
            <WText
              variant="C2"
              customColor="base_secondary_light"
              style={{margin: 1}}>
              {formatCountMessage(props.countMessage)}
            </WText>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingVertical: spacing.md,
    flexDirection: 'row',
    // backgroundColor: '#b3d0f1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
