import styles from './DraftedGamePlayer.module.scss'
import PropTypes from 'prop-types'

const DraftedGamePlayer = ({ counter }) => {
  return (
    <h2 className={styles.draftedGamePlayer}>
      Player <span>{counter}</span>
    </h2>
  )
}

DraftedGamePlayer.propTypes = {
  counter: PropTypes.number.isRequired,
}

export default DraftedGamePlayer
