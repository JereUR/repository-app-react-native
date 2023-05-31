import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

import StyledText from './StyledText'
import { theme } from '../theme'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  active: {
    color: theme.appBar.textPrimary
  },
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  }
})

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const TextStyles = [styles.text, active && styles.active]
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={TextStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
