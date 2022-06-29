import styles from '../styles/layout.module.scss';
import Link from "next/link";
import Header from './Header';
import Footer from '../components/Footer'
import { motion } from 'framer-motion';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
