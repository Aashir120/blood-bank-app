import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'

import CustomButton from '../../components/CustomButton'

export default class onBoard extends Component {
  static propTypes = {
    onCreateAccountPress: PropTypes.func.isRequired,
    onSignInPress: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.container}>
        <View animation={'zoomIn'} delay={600} duration={400}>
          <CustomButton
            text={'Create Account'}
            onPress={this.props.onCreateAccountPress}
            buttonStyle={styles.createAccountButton}
            textStyle={styles.createAccountButtonText}
          />
        </View>
        <View style={styles.separatorContainer} animation={'zoomIn'} delay={700} duration={400}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorOr}>{'Or'}</Text>
          <View style={styles.separatorLine} />
        </View>
        <View animation={'zoomIn'} delay={800} duration={400}>
          <CustomButton
            text={'Sign In'}
            onPress={this.props.onSignInPress}
            buttonStyle={styles.signInButton}
            textStyle={styles.signInButtonText}
          />
        </View>
        <View style={{flex: 1,width:360,marginLeft:-36}}>
<View style={styles.footer}><Text style={styles.footerText}>copyright ℗ Syed Aashir Majeed</Text></View>
</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: metrics.DEVICE_WIDTH * 0.1,
    justifyContent: 'center'
  },
  createAccountButton: {
    backgroundColor: '#9B9FA4'
  },
  createAccountButtonText: {
    color: 'white'
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20
  },
  separatorLine: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: '#9B9FA4'
  },
  separatorOr: {
    color: '#9B9FA4',
    marginHorizontal: 8
  },
  signInButton: {
    backgroundColor: '#C80000'
  },
  signInButtonText: {
    color: 'white'
  },
  footer:{
    position: 'absolute',
    left: 0,
    right: 0,
    color:'#fff',
    bottom: 0,
    backgroundColor:'#C80000'
  },
  footerText:{
    color:'#fff',
    textAlign:'center',
    fontFamily:'sans-serif',
    fontWeight:'bold',
    justifyContent:'center'
  },
})
