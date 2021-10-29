import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

export class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandHeight: new Animated.Value(50),
      genderText: this.props.genderToShow === '' ? '' : this.props.genderToShow,
      rotateView: new Animated.Value(0),
      isEditable: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      genderText: nextProps.genderToShow,
      isEditable: nextProps.isEditable,
    }; // <- this is setState equivalent
  }

  selectedGender(genderType) {
    this.props.selectedGender(genderType);
    this.setState({genderText: genderType});
    Animated.parallel([
      Animated.timing(this.state.expandHeight, {
        toValue: 50,
        duration: 700,
        easing: Easing.bezier(0.22, 0.61, 0.35, 1),
      }),
      Animated.timing(this.state.rotateView, {
        toValue: 0,
        duration: 700,
        easing: Easing.bezier(0.22, 0.61, 0.35, 1),
      }),
    ]).start();
  }

  animation() {
    this.setState({genderText: this.props.placeholder});
    Animated.parallel([
      Animated.timing(this.state.expandHeight, {
        toValue: this.props.containerHeight,
        duration: 700,
        easing: Easing.bezier(0.22, 0.61, 0.35, 1),
      }),
      Animated.timing(this.state.rotateView, {
        toValue: 1,
        duration: 700,
        easing: Easing.bezier(0.22, 0.61, 0.35, 1),
      }),
    ]).start();
  }

  render() {
    const {expandHeight, genderText} = this.state;

    const rotateImage = this.state.rotateView.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-180deg'],
    });
    return (
      <Animated.View style={[styles.container]}>
        <Animated.View
          style={[
            styles.dropdownContainer,
            {
              height: expandHeight,
              borderRadius:
                this.props.borderRadius !== undefined
                  ? this.props.borderRadius
                  : 16,
            },
            this.props.containerStyle ? this.props.containerStyle : null,
          ]}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              if (this.state.isEditable) {
                this.setState({genderText: ''});
                this.animation();
              }
            }}>
            <View
              style={[
                styles.textContainer,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              ]}>
              <Text
                allowFontScaling={false}
                style={[
                  styles.typeText,
                  {
                    fontSize:
                      this.props.fontSize !== undefined
                        ? this.props.fontSize
                        : 20,
                    color:
                      this.props.color !== undefined
                        ? this.props.color
                        : '#808A9B',
                  },
                  this.props.textStyle ? this.props.textStyle : null,
                ]}>
                {genderText === '' ? this.props.placeholder : genderText}
              </Text>
              <Animated.Image
                source={require('../assets/dropDown.png')}
                style={[styles.downArrow, {transform: [{rotate: rotateImage}]}]}
              />
            </View>
          </TouchableOpacity>
          {this.props.values.map((val, index) => (
            <TouchableOpacity
              style={{overflow: 'hidden'}}
              onPress={() => {
                if (this.state.isEditable) {
                  this.selectedGender(val);
                }
              }}>
              <View style={styles.textContainer}>
                <Text
                  allowFontScaling={false}
                  style={[
                    styles.typeText,
                    {
                      fontSize:
                        this.props.fontSize !== undefined
                          ? this.props.fontSize
                          : 20,
                    },
                    this.props.textStyle ? this.props.textStyle : null,
                  ]}>
                  {val}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.View>
      </Animated.View>
    );
  }
}

export default Selection;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#444',
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  textContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  typeText: {
    color: '#808A9B',
  },
  downArrow: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
});
