import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import typography from '../styles/Typography'

const Input = ({ placeholder, label }) => {

  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={typography.label}>{label}</Text>
      <TextInput 
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#95A8BC'
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    padding: 16,
    borderWidth: 2,
    borderColor: '#E8F1FA',
    borderRadius: 8,
    marginTop: 8
  }
})
