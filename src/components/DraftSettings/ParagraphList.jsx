import PropTypes from 'prop-types'
import Paragraph from './Paragraph'
import styles from './ParagraphList.module.scss'

const ParagraphList = ({ leadersLeft, civilizationsDATA, isBannedCount }) => {
  return (
    <div className={styles.paragraphList}>
      <Paragraph value={leadersLeft}>Leaders Left</Paragraph>
      <Paragraph value={isBannedCount}>Banned leaders</Paragraph>
      <Paragraph value={civilizationsDATA.length}>Total leaders</Paragraph>
    </div>
  )
}

ParagraphList.propTypes = {
  leadersLeft: PropTypes.number.isRequired,
  civilizationsDATA: PropTypes.array.isRequired,
  isBannedCount: PropTypes.number.isRequired,
}

export default ParagraphList
