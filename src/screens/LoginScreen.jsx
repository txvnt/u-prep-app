import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

// Components
import Input from '../components/Input'
import Button from '../components/Button'

// Styles
import { containers, margin } from '../styles/Layout'
import typography from '../styles/Typography'

//Redux
import { connect } from 'react-redux'
import { loginUser } from '../actions/auth'

const mapStateToProps = state => {
  return { 
    isAuthenticated: state.auth.isAuthenticated
  };
};

const LoginScreen = props => {

  function onPressLogin() {
    const { dispatch } = props;
    dispatch(loginUser());
  }

  return (
    <View style={[containers.container, containers.centeredContent, { paddingHorizontal: 20}]}>
      <Text style={typography.h1}>Login to U Prep</Text>
      <View style={margin.three} />
      <Input
        label='Username'
        placeholder='tomasvzn'
      />
      <View style={margin.one} />
      <Input
        label='Password'
        placeholder='••••••••'
      />
      <View style={margin.two} />
      <Button onPress={onPressLogin}/>
    </View>
  )
}

export default connect(mapStateToProps)(LoginScreen);
