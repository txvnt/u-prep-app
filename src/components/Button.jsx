import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// Styles
import button from '../styles/Button'
import typography from '../styles/Typography'

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={button.primary}>
      <Text style={typography.primaryButton}>Ingresar</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})
