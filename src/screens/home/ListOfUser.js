import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../utils/colors';

export class ListOfUser extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nameText}>
          {this.props.data.firstname + ' ' + this.props.data.lastname}
        </Text>
        <Text style={styles.headline}>{this.props.data.headline}</Text>
        <Text style={styles.location}>
          Location - {this.props.data.location}
        </Text>
        <Text style={styles.specialty}>
          Specialty - {this.props.data.specialty}
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorWhite,
    padding: 20,
    marginBottom: 5,
  },
  nameText: {color: colors.colorBlack, fontSize: 14, fontWeight: 'bold'},
  headline: {
    color: colors.colorGray,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  location: {
    color: colors.colorBlack,
    fontSize: 12,
    color: colors.colorLightGray,
    marginTop: 10,
  },
  specialty: {
    color: colors.colorBlack,
    fontSize: 12,
    color: colors.colorLightGray,
    marginTop: 10,
  },
});

export default ListOfUser;
