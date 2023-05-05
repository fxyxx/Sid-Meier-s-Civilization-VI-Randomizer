import PropTypes from 'prop-types'
import styles from './MySelect.module.scss'

const MySelect = ({ options, defaultValue, value, onChange, disabled }) => {
  return (
    <select
      className={styles.mySelect}
      disabled={disabled}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

MySelect.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default MySelect
