import { useState } from 'react'
import styles from './Civilization.module.scss'
import PropTypes from 'prop-types'

const Civilization = ({
  leadersLeft,
  civilizationName,
  leaderName,
  civilizationImg,
  leaderImg,
  civilizationWiki,
  setIsBannedCount,
  isBanned,
  isBannedCount,
}) => {
  const [banStatus, setBanStatus] = useState('ban')

  const setIsBannedStatus = (e) => {
    const bannedLeader = e.target.closest(`[data-isbanned]`)
    if (bannedLeader.dataset.isbanned === 'false') {
      setBanStatus('ban')
    } else {
      setBanStatus('unban')
    }
  }

  return (
    <div
      className={banStatus === 'ban' ? styles.civilization : styles.banned}
      data-isbanned={isBanned}
      data-name={leaderName}
    >
      <div className={styles.banArea}>
        <button
          disabled={!leadersLeft || isBannedCount > 47}
          className={styles.banBtn}
          onClick={(e) => {
            setIsBannedCount(e), setIsBannedStatus(e)
          }}
        >
          {banStatus}
        </button>
        <div className={styles.civilizationStyles}>
          <img
            src={`./images/civ_icons/image_part_${civilizationImg}.png`}
            alt={civilizationName + ' Image'}
          />
          <p>{civilizationName}</p>
        </div>
        <div className={styles.leaderStyles}>
          <img
            src={`./images/leaders_icons/${leaderImg}.webp`}
            alt={leaderName + ' Image'}
          />
          <p>{leaderName}</p>
        </div>
      </div>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://civilization.fandom.com/wiki/${civilizationWiki}(Civ6)`}
      >
        More information
      </a>
    </div>
  )
}

Civilization.propTypes = {
  leadersLeft: PropTypes.number.isRequired,
  civilizationName: PropTypes.string.isRequired,
  leaderName: PropTypes.string.isRequired,
  civilizationImg: PropTypes.string.isRequired,
  leaderImg: PropTypes.string.isRequired,
  civilizationWiki: PropTypes.string.isRequired,
  isBanned: PropTypes.bool.isRequired,
  setIsBannedCount: PropTypes.func.isRequired,
  isBannedCount: PropTypes.number.isRequired,
}

export default Civilization
