import styles from './CivilizationsList.module.scss'
import Civilization from './Civilization'
import PropTypes from 'prop-types'

const CivilizationsList = ({
  leadersLeft,
  civilizationsDATA,
  setIsBannedCount,
  isBannedCount,
}) => {
  return (
    <div className={styles.civilizationsList}>
      {civilizationsDATA.map((civilization) => (
        <Civilization
          key={civilization.leaderName}
          leadersLeft={leadersLeft}
          setIsBannedCount={setIsBannedCount}
          isBanned={civilization.isBanned}
          civilizationName={civilization.civilizationName}
          leaderName={civilization.leaderName}
          civilizationImg={civilization.civilizationImg}
          leaderImg={civilization.leaderImg}
          civilizationWiki={civilization.civilizationWiki}
          isBannedCount={isBannedCount}
        />
      ))}
    </div>
  )
}

CivilizationsList.propTypes = {
  leadersLeft: PropTypes.number.isRequired,
  civilizationsDATA: PropTypes.array.isRequired,
  setIsBannedCount: PropTypes.func.isRequired,
}

export default CivilizationsList
