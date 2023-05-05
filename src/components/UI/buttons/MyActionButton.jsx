import PropTypes from 'prop-types'
import styles from './MyActionButton.module.scss'

const MyActionButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  )
}

MyActionButton.propTypes = {
  children: PropTypes.string.isRequired,
}

export default MyActionButton
