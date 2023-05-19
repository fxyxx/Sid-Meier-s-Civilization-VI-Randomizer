import { useMemo, useState } from 'react'
import MyActionButton from '../UI/buttons/MyActionButton'
import styles from './CivilizationSettings.module.scss'
import CivilizationsList from './CivilizationsList'
import PropTypes from 'prop-types'
import CivilizationsFilter from './CivilizationsFilter'

const CivilizationSettings = ({
  players,
  leaders,
  civilizationsDATA,
  setIsBannedCount,
  generateGame,
  generateBtnStatus,
  leadersLeft,
}) => {
  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedCivilizations = useMemo(() => {
    if (filter.sort) {
      return [...civilizationsDATA].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return civilizationsDATA
  }, [filter.sort, civilizationsDATA])

  const sortedAndFoundCivilizations = useMemo(() => {
    return sortedCivilizations.filter(
      (civilization) =>
        civilization.leaderName
          .toLowerCase()
          .includes(filter.query.toLowerCase()) ||
        civilization.civilizationName
          .toLowerCase()
          .includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedCivilizations])

  return (
    <div className={styles.civilizationSettings}>
      <CivilizationsFilter filter={filter} setFilter={setFilter} />
      {sortedAndFoundCivilizations.length ? (
        <CivilizationsList
          leadersLeft={leadersLeft}
          civilizationsDATA={sortedAndFoundCivilizations}
          setIsBannedCount={setIsBannedCount}
        />
      ) : (
        <h1>Not found</h1>
      )}
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
