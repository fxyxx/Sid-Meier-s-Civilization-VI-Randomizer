import styles from './DraftedGameList.module.scss'
import DraftedGameCivilization from './DraftedGameCivilization'
import PropTypes from 'prop-types'
import DraftedGamePlayer from './DraftedGamePlayer'

const DraftedGameList = ({
  leaders,
  layoutArray,
}) => {
  const mountLayoutArray = []
  let counter = 1

  if (!layoutArray.includes(undefined)) {
    for (let i = 0; i < layoutArray.length; i++) {
      mountLayoutArray.push(
        <DraftedGameCivilization
          key={layoutArray[i].leaderName}
          civilizationName={layoutArray[i].civilizationName}
          leaderName={layoutArray[i].leaderName}
          civilizationImg={layoutArray[i].civilizationImg}
          leaderImg={layoutArray[i].leaderImg}
          civilizationWiki={layoutArray[i].civilizationWiki}
        />
      )

      if ((i + 1) % +leaders === 0) {
        mountLayoutArray.push(
          <DraftedGamePlayer key={`new-${i}`} counter={counter} />
        )
        counter++
      }
    }
  }

  return <div className={styles.draftedGameList}>{mountLayoutArray}</div>
}

DraftedGameList.propTypes = {
  leaders: PropTypes.string.isRequired,
  layoutArray: PropTypes.array.isRequired,
}

export default DraftedGameList
