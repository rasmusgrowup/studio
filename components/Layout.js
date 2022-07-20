import styles from '../styles/layout.module.scss';
import Link from "next/link";
import Header from './Header';
import Meta from './Meta';
import Footer from '../components/Footer'
import { motion } from 'framer-motion';
import SmoothScroll from "../lib/SmoothScroll.component"

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <SmoothScroll>
        <main className={styles.main}>
          {children}
          <Footer />
        </main>
      </SmoothScroll>
    </>
  )
}
