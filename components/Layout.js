import styles from '../styles/layout.module.scss'
import Link from "next/link"
import Header from './Header'

export default function Layout({ children }) {

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.contact}>
          <Link href='mailto:hejsa@growup.studio'>
            <a>hejsa@growup.studio</a>
          </Link>
          <Link href='tel:+4531623733'>
            <a>+45 31 62 37 33</a>
          </Link>
        </div>
        ©2022 Growup Aps
      </footer>
    </>
  )
}
