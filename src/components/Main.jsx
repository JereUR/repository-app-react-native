import { View, StyleSheet } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'
import Login from '../pages/Login'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<RepositoryList />} />
        <Route exact path="/signin" element={<Login />} />
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
})

export default Main
