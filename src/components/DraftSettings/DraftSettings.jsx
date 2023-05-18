import styles from './DraftSettings.module.scss'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import MySelect from '../UI/select/MySelect'
import { getOptionQuantity } from '../../utils/select'
import ParagraphList from './ParagraphList'
import ButtonsList from './ButtonsList'

const DraftSettings = ({
  civilizationsDATA,
  isBannedCount,
  players,
  setPlayers,
  leaders,
  setLeaders,
  leadersLeft,
  setLeadersLeft,
}) => {
  const [isSecondSelectEnabled, setIsSecondSelectEnabled] = useState(false)
  const playersOptions = civilizationsDATA.length - isBannedCount
  const leadersOptions = (civilizationsDATA.length - isBannedCount) / +players

  const handleFirstSelectChange = (value) => {
    setPlayers(value)
    setIsSecondSelectEnabled(true)
  }

  const handleSecondSelectChange = (value) => {
    setLeaders(value)
  }

  const setPresets = (e) => {
    setPlayers(e.target.dataset.players)
    setLeaders(e.target.dataset.leaders)
    setIsSecondSelectEnabled(true)
  }

  useEffect(() => {
    if (leadersLeft >= 0) {
      setLeadersLeft(
        leadersLeft >= 0
          ? civilizationsDATA.length - +players * +leaders - isBannedCount
          : civilizationsDATA.length - +players * 1 - isBannedCount
      )
    }

    if (civilizationsDATA.length - (+players * +leaders - isBannedCount) < 0) {
      setLeaders('1')
      setLeadersLeft(civilizationsDATA.length - +players * 1 - isBannedCount)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [players, leaders, isBannedCount])

  return (
    <div className={styles.draftSettings}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 25,
          margin: 25,
        }}
      >
        <MySelect
          value={players}
          onChange={(value) => handleFirstSelectChange(value)}
          defaultValue="NUMBER OF PLAYERS"
          options={getOptionQuantity(playersOptions > 12 ? 12 : playersOptions)}
        />
        <MySelect
          value={leaders}
          onChange={(value) => handleSecondSelectChange(value)}
          defaultValue="NUMBER OF LEADERS"
          options={getOptionQuantity(
            isFinite(leadersOptions) ? Math.floor(leadersOptions) : 1
          )}
          disabled={!isSecondSelectEnabled}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: 20 }}>
        <ParagraphList
          civilizationsDATA={civilizationsDATA}
          leadersLeft={leadersLeft}
          isBannedCount={isBannedCount}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexBasis: '35%',
          }}
        >
          <h2
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'upright',
              fontFamily: 'var(--font-family)',
              fontSize: 26,
              fontWeight: 700,
              marginRight: 10,
            }}
          >
            Presets
          </h2>
          <ButtonsList leadersLeft={leadersLeft} setPresets={setPresets} />
        </div>
      </div>
    </div>
  )
}

DraftSettings.propTypes = {
  players: PropTypes.string.isRequired,
  setPlayers: PropTypes.func.isRequired,
  leaders: PropTypes.string.isRequired,
  setLeaders: PropTypes.func.isRequired,
  leadersLeft: PropTypes.number.isRequired,
  setLeadersLeft: PropTypes.func.isRequired,
  civilizationsDATA: PropTypes.array.isRequired,
  isBannedCount: PropTypes.number.isRequired,
}

export default DraftSettings
