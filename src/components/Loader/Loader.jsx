import styles from './Loader.module.scss'
import { PropagateLoader } from 'react-spinners'
import PropTypes from 'prop-types'

const Loader = ({ isLoadingStyles }) => {
  return (
    <div className={`${styles.loader} ${isLoadingStyles ? styles.show : ''}`}>
      <PropagateLoader color="var(--color-light-beige)" />
    </div>
  )
}

Loader.propTypes = {
  isLoadingStyles: PropTypes.bool.isRequired,
}

export default Loader
