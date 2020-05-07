import React from 'react'
import { View } from 'react-native'
import MainHeader from '../components/MainHeader'

//Styles
import { containers as styles } from '../styles/Layout'

const LearnCenterScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
    </View>
  )
}

export default LearnCenterScreen;
