import { useState, useEffect } from 'react'
import styles from './MyScrollToTopButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

const MyToUpButton = () => {
  const [showButton, setShowButton] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <button
      className={`${styles.myScrollToTopButton} ${
        showButton ? styles.show : ''
      }`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon
        icon={faCircleChevronUp}
        size="3x"
        style={{ color: '#681a17' }}
      />
    </button>
  )
}

export default MyToUpButton
