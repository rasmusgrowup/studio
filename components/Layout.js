import styles from '../styles/layout.module.scss';
import Link from "next/link";
import Header from './Header';
import Meta from './Meta';
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  )
}
