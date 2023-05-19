import styles from './MyModal.module.scss'
import PropTypes from 'prop-types'

const MyModal = ({ children, copied }) => {
  return (
    <div className={`${styles.myModal} ${copied ? styles.show : ''}`}>
      {children}
    </div>
  )
}

MyModal.propTypes = {
  children: PropTypes.string.isRequired,
  copied: PropTypes.bool.isRequired,
}

export default MyModal
