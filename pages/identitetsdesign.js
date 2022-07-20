import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/identitetsdesign/DigitalDogme_logo.jpg'
import DigitalDogme from '../public/identitetsdesign/DigitalDogme_web.jpg'
import Poster from '../public/identitetsdesign/DigitalDogme_poster.jpg'
import Dabea from '../public/identitetsdesign/Dabea_folder.jpg'
import Visitkort from '../public/identitetsdesign/Dabea_visitkort.jpg'
import DabeaWeb from '../public/identitetsdesign/Dabea_web.jpg'
import Mobile from '../public/identitetsdesign/Dabea_mobile.jpg'
import FlexiFloors from '../public/identitetsdesign/FlexiFloors.jpg'
import Tinekhome from '../public/tinekhome/tinekhome_webshot_2.jpg'
import Twelveinch from '../public/twelveinch/twelveinch_webshot.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'Vi ',
  'skaber ',
  'visuelle ',
  'identiteter ',
  'til ',
  'start-ups ',
  'og ',
  'etablerede ',
  'brands.'
];

function Identitetsdesign({ title, description }) {
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
      <Head>
        <meta name="description" content={description} key='description'/>
        <meta name="og:title" content={title} key='title'/>
        <title>{title}</title>
      </Head>
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
              Jeres visuelle identitet danner basis for al jeres visuelle kommunikation, såsom tryksager og online markedsføring, emballage, hjemmesider, apps m.m.
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
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={how}
        className={`${styles.resume} ${styles.isAService}`}>
        <p>
        Identitetsdesign handler om at binde et tydeligt og genkendeligt bånd af værdier omkring alle aspekter af virksomhedens aktiviteter.<br/><br/>
        Identitetsdesign kan beskrives som en paraply der dækker bredt, over den visuelle identitet og de kommunikative valg, over grundlaget for produktionen og valget af materialer som produkterne er skabt af osv.<br/><br/>
        Vi hjælper virksomheder med at finde frem til den stærke identitet som skal binde virksomheden sammen med kunderne. Virksomhedens indentitet defineres gennem deres kunder og kundernes forståelse af virksomheden.
        </p>
      </motion.div>
      <section className={styles.waterFall}>
        <div className={styles.inner}>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '40vw'}}>
            <Image src={DigitalDogme} layout='responsive' quality='100'/>
            <p>
              Digital Dogme er vores nyeste projekt indenfor identitetsdesign. Vi fik til opgave at lave en visuel identitet, som skulle passe til en corporate og professionel branche.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '27vw'}}>
            <Image src={Poster} layout='responsive' quality='100'/>
            <p>
              I logoet markerer vi <i>IT</i> med en farve, fordi Digital Dogme handler om digital opkvalificering af den danske arbejdsstyrke. Fonttypen er desuden neutral, og farvepaletten er ikke alt for udfordrende.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '24vw'}}>
            <Image src={Visitkort} layout='responsive' quality='100'/>
            <p>
              Vi fik til opgave at give DABEA en ny visuel identitet i efteråret 2021.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '30vw'}}>
            <Image src={Dabea} layout='responsive' quality='100'/>
            <p>
              DABEAs nye primærfarve er mørkeblå, og fonttypen er Lato. To ret sikre valg, der ikke udfordrer for meget, men netop passer til ejendomsbranchen.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '40vw'}}>
            <Image src={DabeaWeb} layout='responsive' quality='100'/>
            <p>
              Vi overførte den nye visuelle identitet til DABEAs hjemmeside.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '22vw'}}>
            <Image src={FlexiFloors} layout='responsive' quality='100'/>
            <p>
              Vi prøver altid at gøre logoet så simpelt, som muligt — jo mere simpelt logoet er, jo nemmere er det at huske.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '42vw'}}>
            <Image src={Tinekhome} layout='responsive' quality='100'/>
            <p>
              Tinekhomes nye udtryk på hjemmesiden, er et resultat af en opdateret visuel identitet.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '66vw'}}>
            <Image src={Twelveinch} layout='responsive' quality='100'/>
            <p>
              Vi har løbende optimeret på og raffineret Twelve Inchs visuelle identitet. Det kan ses på hjemmesiden, der fornyligt fik et ansigtsløft.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

Identitetsdesign.defaultProps = {
  title: 'Growup Studio | Service | Identitetsdesign',
  description: 'Vi skaber visuelle identiteter til start-ups og etablerede brands. Jeres visuelle identitet danner basis for al jeres visuelle kommunikation, såsom tryksager og online markedsføring, emballage, hjemmesider, apps m.m.'
}

export default Identitetsdesign
