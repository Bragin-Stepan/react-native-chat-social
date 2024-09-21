import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {WText} from '../../shared/fonts';
import {spacing} from '../../shared/sizes';
import useAppColor from '../../shared/colors/use-color';

interface IProfileItemProps {
  nickname: string;
  subTitle: string;
  avatar: string;
  titleRight?: string;
  countMessage?: number;
  onPress?: () => void;
}

export const ProfileItem = React.memo((props: IProfileItemProps) => {
  const appColor = useAppColor();

  const formatCountMessage =
    props.countMessage && props.countMessage > 99
      ? '99+'
      : String(props.countMessage);

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 50, width: 50, borderRadius: 30}}
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
            {props.subTitle}
          </WText>
        </View>
      </View>
      <View
        style={{
          height: 40,
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        {props.titleRight && (
          <WText
            variant="P2"
            customColor="base_primary_light"
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
          {props.countMessage && (
            <WText
              variant="C2"
              customColor="base_secondary_light"
              style={{margin: 1}}>
              {formatCountMessage}
            </WText>
          )}
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
