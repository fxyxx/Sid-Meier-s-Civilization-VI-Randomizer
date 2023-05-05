import styles from './MyModal.module.scss'
import PropTypes from 'prop-types'

const MyModal = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.myModal}>
      {children}
    </div>
  )
}

MyModal.propTypes = {
  children: PropTypes.string.isRequired,
}

export default MyModal
