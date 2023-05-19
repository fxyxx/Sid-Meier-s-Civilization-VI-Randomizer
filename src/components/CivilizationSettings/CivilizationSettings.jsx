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
        <h2
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: 26,
            fontWeight: 700,
            marginRight: 10,
            backgroundColor: 'var(--color-dark-blue)',
            padding: 15,
            margin: 20,
            borderRadius: 20,
            color: 'var(--color-white)',
          }}
        >
          Not found
        </h2>
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
