import { View, Text, ScrollView } from 'react-native'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {repositories.map((repo) => (
        <RepositoryItem {...repo} key={repo.id} />
      ))}
    </ScrollView>
  )
}

export default RepositoryList
