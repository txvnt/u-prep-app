import React, { ReactNode } from 'react'
import { Text, View, Image } from 'react-native'

//styles
import { header as styles } from '../styles/Layout'

const MainHeader = () => {

  const renderXpBar = () => {
    return(
      <View style={[styles.xpbarFill, { width: '65%' }]} />
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://miro.medium.com/fit/c/160/160/2*PnCuWAraXuBvUIeduUtO6A.jpeg'}} style={styles.picture} />
      <View style={styles.headerInfo}>
        <Text style={styles.name}>Tomas Velez</Text>
        <Text style={styles.level}>Level 4</Text>
        <View style={styles.xpbar}>
          {renderXpBar()}
        </View>
      </View>
    </View>
  )
}

export default MainHeader;
