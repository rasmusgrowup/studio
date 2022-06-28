import Link from "next/link"
import Image from "next/image"

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/tinekhome_hero.jpg'
import Webshot from '../public/tinekhome/tinekhome_webshot_2.jpg'
import Webshot2 from '../public/tinekhome/tinekhome_checkout.jpg'
import Webshot3 from '../public/tinekhome/tinekhome_checkout_2.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'I',
  '2019',
  'hjalp',
  'vi',
  'tine k home',
  'med',
  'at',
  'give',
  'deres',
  'webshop',
  'en',
  'visuel',
  'og',
  'funktionel',
  'make-over'
];

const howFirst = [
  'Vores ',
  'målsætning ',
  'var ',
  'at ',
  'forbedre ',
  'brugerens ',
  'købsoplevelse, ',
  'samt ',
  'at ',
  'give ',
  'det ',
  'visuelle ',
  'univers ',
  'et ',
  'ansigtsløft.'
];

const howSecond = [
  'Vores ',
  'redesign ',
  'har ',
  'været ',
  'med ',
  'til ',
  'at ',
  'forbedre ',
  'kundernes ',
  'generelle ',
  'tilfredshed ',
  'på ',
  'tinekhome.com ',
  '— ',
  'og ',
  'dermed ',
  'også ',
  'at ',
  'øge ',
  'omsætningen.'
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
        viewport={how}
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
          Målsætning
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
          <div
            className={styles.wordContainer}>
            { howSecond.map((word, i) => (
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
      <section className={styles.waterFall}>
        <div className={styles.inner}>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '640px'}}>
            <Image src={Webshot} />
            <p>
              Vi har siden 2019 stået for at opdatere forsiden på tinekhome.com, for at supportere deres udsalg eller lancering af nye kollektioner
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '440px'}}>
            <Image src={Webshot2} />
            <p>
              Kunderne blev tabt ved checkout, der var besværlig at komme igennem, forvirrende at bruge og manglede responsivt design
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '600px'}}>
            <Image src={Webshot3} />
            <p>
              Efter at vi har redesignet checkout-flowet, er Tinekhomes omsætning steget markant
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '340px'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/tinekhome/Plaid.mp4'} type='video/mp4' />
            </video>
            <p>
              Foruden webudvikling, har vi hjulpet Tinekhome med at finde frem til en videostil, til deres produktvideoer
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '720px'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/tinekhome/Sofa.mp4'} type='video/mp4' />
            </video>
            <p>
              Vi har både eksperimenteret med abstrakte videoer, som videoen med plaidet ovenfor, og stylede stuemiljøer, som her
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '300px'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/tinekhome/Kugler.mp4'} type='video/mp4' />
            </video>
            <p>
              Og så kunne vi ikke stå for at få søde Bella med i en video
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
