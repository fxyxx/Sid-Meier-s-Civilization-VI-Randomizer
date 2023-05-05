import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar_content}>
        Sid Meier&apos;s Civilization <span>VI</span> randomizer
      </h1>
    </div>
  )
}

export default Navbar
