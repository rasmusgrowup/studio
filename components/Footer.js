import Link from "next/link";
import styles from '../styles/footer.module.scss';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      <motion.footer
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={styles.footer}>
        <h2>Vi vil <span style={{ fontWeight: 'bold' }}>elske</span> at høre fra jer. Vi inviterer gerne på en kop kaffe, og en uforpligtende snak om, hvad der kan lade sig gøre for jeres organisation.</h2>
        <div className={styles.contact}>
          <Link href='mailto:hello@growupstudio.dk'>
            <a>hello@growupstudio.dk</a>
          </Link>
        </div>
        ©2022 Growup Aps
      </motion.footer>
    </>
  )
}
