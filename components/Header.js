import Link from 'next/link'
import styles from '../styles/header.module.scss'
import Nav from './Nav'
import  { useContext } from 'react'
import { MenuContext } from "../lib/menuContext";

export default function Header() {
  const { toggle, toggleFunction } = useContext(MenuContext);

  return (
    <>
      <header className={`${styles.main} ${ toggle ? `${styles.drawerOpen}` : '' }`}>
        <div className={styles.inner}>
          <Link href='/'>
            <a className={styles.logo}>Growup.studio</a>
          </Link>
          <Nav />
        </div>
      </header>
    </>
  )
}
