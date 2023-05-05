import PropTypes from 'prop-types'
import styles from './Paragraph.module.scss'

const Paragraph = ({ children, value }) => {
  return (
    <p className={styles.paragraph}>
      {children}: <span>{value}</span>
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default Paragraph
