'use strict'

import React,{
  View,
  Image,
  Text,
  Component,
  StyleSheet,
} from 'react-native';

class DoctorMainScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image source={require('image!person')} />
        <Text>
        </Text>
      </View>
    )
  }
}

export default DoctorMainScreen;
