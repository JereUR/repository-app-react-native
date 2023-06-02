import { ScrollView } from 'react-native'

import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'

const RepositoryList = () => {
  const { repositories } = useRepositories()

  return (
    <ScrollView style={{ flex: 1 }}>
      {repositories.map((repo) => (
        <RepositoryItem {...repo} key={repo.id} />
      ))}
    </ScrollView>
  )
}

export default RepositoryList
