import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/karensbord/hero.jpg'
import Webshot from '../public/karensbord/karensbord_webshot.jpg'
import Webshot2 from '../public/karensbord/karensbord_webshot_2.jpg'
import Webshot3 from '../public/karensbord/karensbord_webshot_3.jpg'
import Webshot4 from '../public/karensbord/karensbord_webshot_4.jpg'
import Mobileshot from '../public/karensbord/karensbord_mobileshot.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'Vi ',
  'hjalp ',
  'Karens ',
  'Bord ',
  'med ',
  'at ',
  'imigrere ',
  'fra ',
  'Squarespace ',
  'til ',
  'Shopify ',
  'på ',
  'få ',
  'uger '
];

const howFirst = [
  'Vi ',
  'leverede ',
  'en ',
  'komplet ',
  'Shopify-',
  'løsning ',
  'til ',
  'Karens ',
  'Bord, ',
  'der ',
  'opfyldte ',
  'deres ',
  'behov ',
  'for ',
  'designfrihed ',
  'og ',
  'MobilePay ',
  'som ',
  'betalingsmulighed, ',
  'på ',
  'få ',
  'uger.'
];

const howSecond = [
  'Vores ',
  'Shopify-',
  'løsning ',
  'gør ',
  'at ',
  'Karens ',
  'Bord ',
  'er ',
  'agile, ',
  'og ',
  'hurtigt ',
  'kan ',
  'omstille ',
  'sig ',
  'når ',
  'behovet ',
  'opstår.'
];

function Karensbord({ title, description }) {
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
              Karens Bord var træt af deres Squarespace-løsning, og gik til os for hjælp til en bedre løsning. Vi hjalp dem over på Shopify, hvilket de flere gange selv har sagt, har været den bedste beslutning længe.
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
            <Link href='https://karensbord.dk'>
              <a target='_blank'>Besøg siden</a>
            </Link>
          </li>
          <li className={styles.kunde}>
            Kunde: {cases[1].title}
          </li>
          <li className={styles.periode}>
            Periode: {cases[1].periode}
          </li>
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={how}
        className={styles.resume}>
        <p>
        Karens Bord ønskede en hjemmeside hvor de selv, med stor frihed, kunne ombygge og redigere i sidens udtryk. Det var desuden ønskeligt, at kunderne kunne betale med MobilePay. Begge behov kunne løses med en Shopify-løsning.<br /><br />
        I corona-nedlukningen, hvor netop arrangementer blev udsat eller aflyst, kunne Karens Bord nemt og hurtigt omskifte hjemmesidens primære formål, som var service-udlejning, til i stedet at sælge produkterne fra deres udlejningssortiment via webshoppen.<br /><br />
        Da Danmark igen åbnede op, blev hjemmesiden hurtigt gendannet til sit oprindelige formål; at præsentere hvordan Karens Bord arbejder kreativt og anderledes med borddækninger og pynt, og hvor kunderne nemt kan tage kontakt og booke deres service.
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
            data='left' style={{ maxWidth: '44vw'}}>
            <Image src={Webshot} layout='responsive' quality='100'/>
            <p>
              Foruden at levere Shopify-skabelonen, har vi hjulpet Karens Bord med at opbygge deres sider, tilføje produkter og tilføje 3. parts integrationer til butikken.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '28vw'}}>
            <Image src={Webshot2} layout='responsive' quality='100'/>
            <p>
              Selvom vi ikke har lavet en decideret visuel identitet til Karens Bord  — endnu — har vi sørget for, at hele hjemmesiden har et ensartet udtryk.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '40vw'}}>
            <Image src={Webshot3} layout='responsive' quality='100'/>
            <p>
              Karens Bord kan supplere deres udlejning af service med salg fra deres webshop.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '20vw'}}>
            <Image src={Mobileshot} layout='responsive' quality='100'/>
            <p>
              Responsivt design er super vigtigt i dag, da op mod 80% af al trafik på en webshop, kan komme fra en smartphone. Vi optimerer til alle skærmstørrelser og moderne browsere.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '50vw'}}>
            <Image src={Webshot4} layout='responsive' quality='100'/>
            <p>
              Vi er super vilde med Karens Bords billedstil. Her kan man virkelig se, hvor vigtigt det er, at få produceret flotte billeder til hjemmesiden.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

Karensbord.defaultProps = {
  title: 'Growup Studio | Casehistorie | Karensbord',
  description: 'Karens Bord var træt af deres Squarespace-løsning, og gik til os for hjælp til en bedre løsning. Vi hjalp dem over på Shopify, hvilket de flere gange selv har sagt, har været den bedste beslutning længe.'
}

export default Karensbord
