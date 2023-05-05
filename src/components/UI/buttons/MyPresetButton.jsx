import PropTypes from 'prop-types'
import styles from './MyPresetButton.module.scss'

const MyPresetButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  )
}

MyPresetButton.propTypes = {
  children: PropTypes.string.isRequired,
}

export default MyPresetButton
