import Link from "next/link"
import Image from "next/image"

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/tinekhome_hero.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'I',
  '2019',
  'redesignede',
  'vi',
  'Tinekhome.com',
  'med',
  'øget',
  'konvertering',
  'som',
  'målsætning.'
];

const howFirst = [
  'Vores',
  'redesign',
  'har',
  'været',
  'med',
  'til',
  'at',
  'forbedre',
  'kundernes',
  'tilfredshed',
  'og',
  'øge',
  'omsætningen',
  'på',
  'tinekhome.com'
];

export default function Tinekhome() {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
      },
    },
    hidden: {
      opacity: 0,
      y: 50
    },
  }

  const how = {
    margin: '0 0 -120px 0',
    once: true,
  }

  const items = {
    hidden: {
      y: '1.5em'
    },
    visible: {
      y: 0,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <>
      <section>
        <h1 className={styles.h1}>
          <Title arr={titelWords} />
        </h1>
      </section>
      <section className={styles.intro}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1.2, delay: 2.5, ease: "easeOut" }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.description}>
          <ul className={styles.list}>
            <li className={styles.assignments}>
              Tine K Home er et eksklusivt univers, kendt for naturlige og håndlavede produkter
            </li>
          </ul>
        </motion.div>
      </section>
      <div className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1.2, delay: 2.5, ease: "easeOut" }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroImage}>
          <Image src={Hero} layout='responsive' quality='100'/>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={how}
          className={styles.heroList}>
          <li className={styles.link}>
            <Link href='https://tinekhome.com'>
              <a>Besøg siden</a>
            </Link>
          </li>
          <li className={styles.kunde}>
            Kunde: {cases[0].title}
          </li>
          <li className={styles.periode}>
            Periode: {cases[0].periode}
          </li>
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        className={styles.resume}>
        <p>Siden 2019 har Growup løbende supporteret designvirksomheden Tine K Home med visuelle og funktionelle forbedringer på deres webshop. Fra vedligehold af forsiden ved lancering af nye kollektioner, til et fuldt redesign af checkout og produktside med fokus på brugervenlighed og responsivt design.<br /><br />
          Yderligere har Growup i fællesskab med et fotostudie tilrettelagt og udarbejdet videomateriale af populære produktserier for at understøtte oplevelsen af Tine K Home’s designunivers. Det har ført til vækst for online salget.
        </p>
      </motion.div>
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={how}
        variants={variants}
        className={styles.how}>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={how}
          variants={variants}
        className={styles.h2}>
          Vælg et lille team
        </motion.h2>
          <div>
            { howFirst.map((word, i) => (
              <motion.h2
                key={i}
                className={styles.wordWrapper}>
                <motion.span
                  variants={items}
                  className={styles.wordSpan}>
                  {word}
                </motion.span>
              </motion.h2>
            )) }
          </div>
      </motion.section>
    </>
  )
}
