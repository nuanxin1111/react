'use strict'

import React,{
  View,
  Image,
  Text,
  Component,
  StyleSheet,
} from 'react-native';

class DoctorLogIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image src={require('image!person')}/>
      </View>
    )
  }
}

export default DoctorLogIn;
