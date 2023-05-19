import styles from './CivilizationsList.module.scss'
import Civilization from './Civilization'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const CivilizationsList = ({
  leadersLeft,
  civilizationsDATA,
  setIsBannedCount,
}) => {
  return (
    <div>
      <TransitionGroup className={styles.civilizationsList}>
        {civilizationsDATA.map((civilization) => (
          <CSSTransition
            key={civilization.leaderName}
            timeout={100}
            classNames={{
              enter: styles.civilizationEnter,
              enterActive: styles.civilizationEnterActive,
              exit: styles.civilizationExit,
              exitActive: styles.civilizationExitActive,
            }}
          >
            <Civilization
              leadersLeft={leadersLeft}
              setIsBannedCount={setIsBannedCount}
              isBanned={civilization.isBanned}
              civilizationName={civilization.civilizationName}
              leaderName={civilization.leaderName}
              civilizationImg={civilization.civilizationImg}
              leaderImg={civilization.leaderImg}
              civilizationWiki={civilization.civilizationWiki}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

CivilizationsList.propTypes = {
  leadersLeft: PropTypes.number.isRequired,
  civilizationsDATA: PropTypes.array.isRequired,
  setIsBannedCount: PropTypes.func.isRequired,
}

export default CivilizationsList
