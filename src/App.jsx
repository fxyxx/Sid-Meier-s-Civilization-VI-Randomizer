import './styles/styles.scss'
import Navbar from './components/Navbar/Navbar'
import DraftSettings from './components/DraftSettings/DraftSettings'
import CivilizationSettings from './components/CivilizationSettings/CivilizationSettings'
import { civilizationsDATA } from './data/data'
import { useEffect, useState } from 'react'
import { bannedCounter, generateRandomIndexArray } from './utils/calculations'
import DraftedGame from './components/DraftedGame/DraftedGame'
import MyToUpButton from './components/UI/buttons/MyScrollToTopButton'
import Loader from './components/Loader/Loader'

function App() {
  const [players, setPlayers] = useState('')
  const [leaders, setLeaders] = useState('')
  const [leadersLeft, setLeadersLeft] = useState(civilizationsDATA.length)
  const [isBannedCount, setIsBannedCount] = useState(0)
  const [allowedToDraftDATA, setAllowedToDraftDATA] = useState([])
  const [generateBtnStatus, setGenerateBtnStatus] = useState('Draft your game')
  const [randomIndexes, setRandomIndexes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingStyles, setIsLoadingStyles] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setIsLoadingStyles(false)

      setTimeout(() => {
        setIsLoading(false)
        document.body.style.overflow = 'auto'
      }, 1000)
    }
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    }

    window.addEventListener('load', handleLoad)

    return () => {
      window.removeEventListener('load', handleLoad)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setAllowedToDraftDATA([])
    setGenerateBtnStatus('Draft your game')
  }, [players, leaders, isBannedCount])

  useEffect(() => {
    const range = allowedToDraftDATA.length - 1
    const amount = +leaders * +players
    if (range > 0) {
      setRandomIndexes(generateRandomIndexArray(range, amount))
    }
  }, [allowedToDraftDATA, leaders, players])

  const changeIsBanned = (e) => {
    const bannedLeader = e.target.closest(`[data-isbanned]`)
    const index = civilizationsDATA.findIndex(
      (item) => item.leaderName === bannedLeader.dataset.name
    )
    if (bannedLeader.dataset.isbanned === 'false') {
      bannedLeader.dataset.isbanned = true
      if (index !== -1) {
        civilizationsDATA[index].isBanned = true
      }
    } else {
      bannedLeader.dataset.isbanned = false
      if (index !== -1) {
        civilizationsDATA[index].isBanned = false
      }
    }
    setIsBannedCount(bannedCounter(civilizationsDATA))
  }

  const generateGame = () => {
    if (!allowedToDraftDATA.length) {
      for (const item of civilizationsDATA) {
        if (item.isBanned === false) {
          setAllowedToDraftDATA((allowedToDraftDATA) => [
            ...allowedToDraftDATA,
            item,
          ])
        }
      }

      setGenerateBtnStatus('regenerate')
    } else {
      setAllowedToDraftDATA([])

      for (const item of civilizationsDATA) {
        if (item.isBanned === false) {
          setAllowedToDraftDATA((allowedToDraftDATA) => [
            ...allowedToDraftDATA,
            item,
          ])
        }
      }

      setGenerateBtnStatus('regenerate')
    }
  }

  return (
    <div>
      {isLoading ? <Loader isLoadingStyles={isLoadingStyles} /> : <></>}
      <>
        <Navbar />
        <DraftSettings
          players={players}
          setPlayers={setPlayers}
          leaders={leaders}
          setLeaders={setLeaders}
          leadersLeft={leadersLeft}
          setLeadersLeft={setLeadersLeft}
          civilizationsDATA={civilizationsDATA}
          isBannedCount={isBannedCount}
        />
        <CivilizationSettings
          players={players}
          leaders={leaders}
          leadersLeft={leadersLeft}
          civilizationsDATA={civilizationsDATA}
          setIsBannedCount={changeIsBanned}
          generateGame={generateGame}
          generateBtnStatus={generateBtnStatus}
        />
        {!!allowedToDraftDATA.length && (
          <DraftedGame
            leaders={leaders}
            allowedToDraftDATA={allowedToDraftDATA}
            randomIndexes={randomIndexes}
          />
        )}
        <MyToUpButton />
      </>
    </div>
  )
}

export default App
