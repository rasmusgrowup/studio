import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/grafisk-design/Sales_brochure.jpg'
import Buffetskilte from '../public/grafisk-design/Buffetskilte.jpg'
import Logo from '../public/grafisk-design/Chefjen_logo.jpg'
import Whisky from '../public/grafisk-design/Whisky_black.jpg'
import Dabea from '../public/grafisk-design/Dabea_folder.jpg'
import DabeaFoldetUd from '../public/grafisk-design/Dabea_foldet_ud.jpg'
import DabeaRollup from '../public/grafisk-design/Dabea_rollup.jpg'
import Postcard from '../public/grafisk-design/Twelveinch_postcard.jpg'
import Visitkort from '../public/grafisk-design/CorpusCareClinic_visitkort.jpg'
import Folie from '../public/grafisk-design/CorpusCareClinic_folie.jpg'
import Facade from '../public/grafisk-design/CorpusCareClinic_facade.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'Vi ',
  'laver ',
  'grafisk ',
  'design, ',
  'der ',
  'understøtter ',
  'jeres ',
  'hjemmeside ',
  'og ',
  'visuelle ',
  'identitet'
];

function GrafiskDesign({ title, description }) {
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
    margin: '0px 0px -120px 0px',
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
              Vi laver logoer, kataloger, indsalgsbrochurer, POS-materialer, emballage, postkort, certifikater, visitkort, m.m.. Og vi matcher jeres visuelle identitet og design på hjemmesiden, så man kan se, at i har et ensartet udtryk på tværs af jeres brugerflader.
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
        Vi har erfaring med at lave tryksager til alle tænkelige situationer. Vi arbejder grundigt med det grafiske udtryk, så det matcher jeres visuelle identitet.<br /><br/>
        Vi har lavet kataloger, indsalgsbrochurer, POS-materialer, emballage, postkort, certifikater, visitkort, klistermærker m.m. Vi kan desuden oversætte jeres tryksager til flere forskellige sprog, og har forbindelse til professionelle tekstforfattere.<br/><br/>
        Får i lavet en visuel identitet hos os, sørger vi for at den er let at omsætte til grafiske elementer — hvis ikke, gør vi vores bedste for at trække jeres visuelle identitet ind i jeres nye tryksager. Vi har desuden et samarbejde med et trykkeri, således at vi kan lave prøvetryk af jeres tryksager, inden filerne sendes videre til jer. Alternativt, kan trykkeriet selvfølgelig levere jeres tryksager.
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
            data='left' style={{ maxWidth: '30vw'}}>
            <Image src={Buffetskilte} layout='responsive' quality='100'/>
            <p>
              Her ses et bud på en folder, vi har lavet til catering-virksomheden Chef Jen. Vores forslag er, at folderen kan stilles på bordet ved retterne, for at forklare gæsterne, hvad de spiser.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '36vw'}}>
            <Image src={Logo} layout='responsive' quality='100'/>
            <p>
              Logoet til Chef Jen er lavet således, at navnet <i>Jen</i> står tydeligt frem. Det er gjort i et forsøg på, at kommunikere ud, at Jen leverer en <i>personlig</i> og <i>professionel</i> service. Det er desuden super genkendeligt.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '25vw'}}>
            <Image src={Whisky} layout='responsive' quality='100'/>
            <p>
              Eksempelvis lægger man mærke til, at ordet <i>Jen</i> står tydeligt frem, i denne mockup.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '28vw'}}>
            <Image src={Dabea} layout='responsive' quality='100'/>
            <p>
              Vi designer foldere, kataloger og andre tryksager. Vi afleverer en trykklar fil, så i selv kan finde en leverandør, eller vi leverer den færdige folder, fra det trykkeri vi samarbejder med.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '34vw'}}>
            <Image src={DabeaFoldetUd} layout='responsive' quality='100'/>
            <p>
              Folder-design for Dabea.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '20vw'}}>
            <Image src={DabeaRollup} layout='responsive' quality='100'/>
            <p>
              Roll-up til DABEA, til brug på en konference.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '42vw'}}>
            <Image src={Postcard} layout='responsive' quality='100'/>
            <p>
              Her ses en bunke postkort, som vi har lavet til Twelve Inch. Det er et postkort, der sendes med ved alle nye ordre, og er en metode til at score lidt ekstra point hos kunderne.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '28vw'}}>
            <Image src={Visitkort} layout='responsive' quality='100'/>
            <p>
              Visitkort for Corpus Care Clinic, med nye farver og fonttype.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '28vw'}}>
            <Image src={Folie} layout='responsive' quality='100'/>
            <p>
              Fornyelse af logo til Corpus Care Clinic. Essensen af det forrige logo er bevaret, så kunderne stadig kan genkende logoet — men er blevet strammet op og forenklet.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '32vw'}}>
            <Image src={Facade} layout='responsive' quality='100'/>
            <p>
              Det nye logo, med farve fra den nye farpalette og den nye fonttype på facaden til klinikken.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

GrafiskDesign.defaultProps = {
  title: 'Growup Studio | Service | Grafisk Design',
  description: 'Vi laver logoer, kataloger, indsalgsbrochurer, POS-materialer, emballage, postkort, certifikater, visitkort, m.m.. Og vi matcher jeres visuelle identitet og design på hjemmesiden, så man kan se, at i har et ensartet udtryk på tværs af jeres brugerflader.'
}

export default GrafiskDesign
