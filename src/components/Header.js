import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Surface, Title} from 'react-native-paper';
import Icons, {iconList} from './Icons';
import colors from '../utils/colors';
const Header = ({
  menu,
  back,
  leftComponent,
  title,
  right,
  rightFunction,
  rightComponent,
  navigation,
  iconColor,
  titleAlight,
  headerBg,
}) => {
  return (
    <Surface style={[styles.header]}>
      <View style={styles.view}>
        {leftComponent ? (
          leftComponent
        ) : menu ? (
          <TouchableOpacity
            style={styles.mainBtn}
            onPress={() => navigation.openDrawer()}>
            <Icons
              icon={iconList.Feather}
              name="menu"
              size={30}
              color={iconColor}
            />
            {/* <Image source={menuIcon} style={{tintColor: Colors.white}} /> */}
          </TouchableOpacity>
        ) : back ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons
              icon={iconList.Feather}
              name="arrow-left"
              size={30}
              color={iconColor}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text
        style={[
          styles.title,
          {
            color: iconColor,
            marginTop: -39,
            width: 200,
            marginStart: 70,
          },
        ]}>
        {title}
      </Text>
      <View style={[styles.view, styles.rightView]}>
        {rightComponent
          ? rightComponent
          : rightFunction && (
              <TouchableOpacity onPress={rightFunction}>
                <Icons
                  icon={iconList.FontAwesome}
                  name={right}
                  size={25}
                  color={iconColor}
                />
              </TouchableOpacity>
            )}
      </View>
    </Surface>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    elevation: 4,
    backgroundColor: colors.colorBlue,
    // backgroundColor: '#ccc',
  },
  view: {
    margin: 10,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'yellow',
  },
  rightView: {
    justifyContent: 'flex-end',
    marginTop:-25
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
  },
});
