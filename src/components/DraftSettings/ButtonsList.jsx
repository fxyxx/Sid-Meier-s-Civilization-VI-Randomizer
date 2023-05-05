import PropTypes from 'prop-types'
import { presetButtonsDATA } from '../../data/data'
import MyPresetButton from '../UI/buttons/MyPresetButton'
import styles from './ButtonsList.module.scss'

const ButtonsList = ({ setPresets }) => {
  return (
    <div className={styles.buttonsList}>
      {presetButtonsDATA.map((button) => (
        <MyPresetButton
          key={button.name}
          data-players={button.players}
          data-leaders={button.leaders}
          onClick={setPresets}
        >
          {button.name}
        </MyPresetButton>
      ))}
    </div>
  )
}

ButtonsList.propTypes = {
  setPresets: PropTypes.func.isRequired,
}

export default ButtonsList
