import styles from './DraftedGame.module.scss'
import PropTypes from 'prop-types'
import MyActionButton from '../UI/buttons/MyActionButton'
import DraftedGameList from './DraftedGameList'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useState } from 'react'
import MyModal from '../UI/modal/MyModal'
import { clipboardTemplate } from '../../utils/clipboardTemplate'

const DraftedGame = ({ leaders, filteredDATA, randomIndexes }) => {
  const [copied, setCopied] = useState(false)
  const layoutArray = randomIndexes.map((index) => filteredDATA[index])
  const template = clipboardTemplate(layoutArray, leaders)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className={styles.draftedGame}>
      <CopyToClipboard text={template} onCopy={handleCopy}>
        <MyActionButton>copy to clipboard</MyActionButton>
      </CopyToClipboard>
      {copied && <MyModal>civilizations have been copied</MyModal>}

      <DraftedGameList leaders={leaders} layoutArray={layoutArray} />
    </div>
  )
}

DraftedGame.propTypes = {
  leaders: PropTypes.string.isRequired,
  filteredDATA: PropTypes.array.isRequired,
  randomIndexes: PropTypes.array.isRequired,
}

export default DraftedGame
