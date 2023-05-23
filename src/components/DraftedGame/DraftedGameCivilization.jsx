import styles from './DraftedGameCivilization.module.scss'
import PropTypes from 'prop-types'

const DraftedGamePlayer = ({
  civilizationName,
  leaderName,
  civilizationImg,
  leaderImg,
  civilizationWiki,
}) => {
  return (
    <div className={styles.draftedGamePlayer}>
      <div className={styles.civilizationStyles}>
        <img
          src={`./images/civ_icons/image_part_${civilizationImg}.png`}
          alt={civilizationName + ' Image'}
        />
        <p className={styles.text}>{civilizationName}</p>
      </div>
      <a
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        href={`https://civilization.fandom.com/wiki/${civilizationWiki}`}
      >
        More information
      </a>
      <div className={styles.leaderStyles}>
        <img
          src={`./images/leaders_icons/${leaderImg}.webp`}
          alt={leaderName + ' Image'}
        />
        <p>{leaderName}</p>
      </div>
    </div>
  )
}

DraftedGamePlayer.propTypes = {
  civilizationName: PropTypes.string.isRequired,
  leaderName: PropTypes.string.isRequired,
  civilizationImg: PropTypes.string.isRequired,
  leaderImg: PropTypes.string.isRequired,
  civilizationWiki: PropTypes.string.isRequired,
}

export default DraftedGamePlayer
