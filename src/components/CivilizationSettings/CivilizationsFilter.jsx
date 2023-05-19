import PropTypes from 'prop-types'
import MyInput from '../UI/input/MyInput'
import MySelect from '../UI/select/MySelect'
import styles from './CivilizationsFilter.module.scss'

const CivilizationsFilter = ({ filter, setFilter }) => {
  return (
    <div className={styles.civilizationFilter}>
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="SORT BY"
        options={[
          { value: 'civilizationName', name: 'Civilization' },
          { value: 'leaderName', name: 'Leader' },
        ]}
      />
      <MyInput
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
        placeholder="Search"
      />
    </div>
  )
}

CivilizationsFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
}

export default CivilizationsFilter
