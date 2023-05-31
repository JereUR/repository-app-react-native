import StyledText from './StyledText'
import { View, StyleSheet } from 'react-native'

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

const RepositoryStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage
}) => {
  return (
    <View style={styles.stats}>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(stargazersCount)}
        </StyledText>
        <StyledText align="center">Stars</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(forksCount)}
        </StyledText>
        <StyledText align="center">Forks</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {parseThousands(reviewCount)}
        </StyledText>
        <StyledText align="center">Reviews</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          {ratingAverage}
        </StyledText>
        <StyledText align="center">Rating</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

export default RepositoryStats
