import styles from '../styles/layout.module.scss'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        ©2022 Growup Aps
      </footer>
    </>
  )
}
