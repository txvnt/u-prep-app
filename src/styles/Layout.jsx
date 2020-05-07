import { StyleSheet, Platform } from 'react-native'

export const containers = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const header = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 2,
    borderBottomColor: '#E8F1FA',
    paddingHorizontal: 20,
    height: Platform.OS === 'ios' ? 124 : 80,
    paddingTop: Platform.OS === 'ios' ? 44 : 0,
    paddingBottom: 16,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  picture: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  headerInfo: {
    flex: 1,
    height: 48,
    justifyContent: 'space-evenly',
    marginLeft: 8
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#384E6C'
  },
  level: {
    color: '#A3B6CF'
  },
  xpbar: {
    height: 6,
    backgroundColor: '#E0E8F3',
    marginTop: 8,
    borderRadius: 8
  },
  xpbarFill: {
    height: 6,
    backgroundColor: '#6AC000',
    borderRadius: 8
  }
})

export const margin = StyleSheet.create({
  one: {
    height: 16
  },
  two: {
    height: 24
  },
  three: {
    height: 32
  }
})