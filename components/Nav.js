import Link from "next/link"
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import styles from '../styles/menu.module.scss'

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <MobileMenu />
        <Menu />
      </nav>
    </>
  )
}
