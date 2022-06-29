import Link from 'next/link'
import styles from '../styles/header.module.scss'
import Nav from './Nav'
import  { useContext } from 'react'
import { MenuContext } from "../lib/menuContext";
import { motion } from 'framer-motion';

export default function Header() {
  const { toggle, toggleFunction } = useContext(MenuContext);

  return (
    <>
      <motion.header
      initial={{ opacity: 0, y: -30 }}
      transition={{ duration: 1, delay: 2.25, ease: "easeOut" }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        ${styles.main}
        ${ toggle ? `${styles.drawerOpen}` : '' }
        `}>
        <div className={styles.inner}>
          <Link href='/'>
            <a className={styles.logo}>Growup Studio</a>
          </Link>
          <Nav />
        </div>
      </motion.header>
    </>
  )
}
