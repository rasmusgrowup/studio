import styles from '../styles/layout.module.scss'
import Link from "next/link"
import Header from './Header'
import { motion } from 'framer-motion';

export default function Layout({ children }) {

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <motion.footer
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={styles.footer}>
        <div className={styles.contact}>
          <Link href='mailto:hejsa@growup.studio'>
            <a>hej@growup.studio</a>
          </Link>
        </div>
        ©2022 Growup Aps
      </motion.footer>
    </>
  )
}
