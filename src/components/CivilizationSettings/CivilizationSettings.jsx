import MyActionButton from '../UI/buttons/MyActionButton'
import styles from './CivilizationSettings.module.scss'
import CivilizationsList from './CivilizationsList'
import PropTypes from 'prop-types'

const CivilizationSettings = ({
  players,
  leaders,
  civilizationsDATA,
  setIsBannedCount,
  generateGame,
  generateBtnStatus,
  leadersLeft,
  isBannedCount,
}) => {
  return (
    <div className={styles.civilizationSettings}>
      <CivilizationsList
        leadersLeft={leadersLeft}
        civilizationsDATA={civilizationsDATA}
        setIsBannedCount={setIsBannedCount}
        isBannedCount={isBannedCount}
      />
      <MyActionButton
        disabled={!players || !leaders ? true : leadersLeft < 0 ? true : false}
        onClick={generateGame}
      >
        {generateBtnStatus}
      </MyActionButton>
    </div>
  )
}

CivilizationSettings.propTypes = {
  players: PropTypes.string.isRequired,
  leaders: PropTypes.string.isRequired,
  leadersLeft: PropTypes.number.isRequired,
  civilizationsDATA: PropTypes.array.isRequired,
  setIsBannedCount: PropTypes.func.isRequired,
  generateGame: PropTypes.func.isRequired,
  generateBtnStatus: PropTypes.string.isRequired,
}

export default CivilizationSettings
