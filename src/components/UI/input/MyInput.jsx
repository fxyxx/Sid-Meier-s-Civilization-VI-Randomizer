import styles from './MyInput.module.scss'

const MyInput = (props) => {
  return <input {...props} className={styles.myInput}></input>
}

export default MyInput
