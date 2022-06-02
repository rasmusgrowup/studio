import Link from 'next/link'
import styles from '../styles/header.module.scss'

export default function Header() {
  return (
    <>
      <header className={styles.main}>
        <div className={styles.inner}>
          <Link href='/'>
            <a className={styles.logo}>Growup.studio</a>
          </Link>
          <div className={styles.button}>Menu +</div>
        </div>
      </header>
    </>
  )
}
