import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/twelveinch/hero6.jpg'
import Webshot from '../public/twelveinch/twelveinch_webshot.jpg'
import Webshot2 from '../public/twelveinch/twelveinch_webshot_2.jpg'
import Mobileshot from '../public/twelveinch/twelveinch_mobileshot.jpg'
import Stoj from '../public/twelveinch/hero5.jpg'
import Gallery from '../public/twelveinch/twelveinch_gallery.jpg'
import Stue from '../public/twelveinch/twelveinch_stue.jpg'
import Insta from '../public/twelveinch/twelveinch_instashot.jpg'
import How from '../public/twelveinch/twelveinch_how.jpg'
import Pinterest from '../public/twelveinch/twelveinch_popular_pinterest.jpg'
import Packaging from '../public/twelveinch/twelveinch_packaging.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'En ',
  'komplet ',
  'løsning ',
  'til ',
  'Twelve ',
  'Inch ',
  '— ',
  'Shopify, ',
  'Art ',
  'Direction ',
  'og ',
  'online ',
  'markedsføring.'
];

const howFirst = [
  'Vi ',
  'sørger ',
  'for ',
  'at ',
  'der ',
  'opstår ',
  'et ',
  'sammenhængende ',
  'visuelt ',
  'udtryk, ',
  'på ',
  'tværs ',
  'af ',
  'Twelve ',
  'Inchs ',
  'mange ',
  'salgskanaler.'
];

const howSecond = [
  'Fornyligt ',
  'har ',
  'vi ',
  'leveret ',
  'en ',
  'ny, ',
  'komplet ',
  'skræddersyet ',
  'Shopify-',
  'løsning, ',
  'med ',
  'billeder, ',
  'videoer, ',
  'tekster ',
  'og ',
  'webudvikling ',
  'inkluderet.'
];

function Twelveinch({ title, description }) {
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
              Vi hjælper Twelve Inch med at holde et ensartet visuelt udtryk på deres Shopify netbutik, SoMe-kanaler, Amazon markedspladser og trykte sager. Vi leverer art direction, grafisk design, webudvikling og sparring i online markedsføring.
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
            <Link href='https://twelve-inch.com'>
              <a target='_blank'>Besøg siden</a>
            </Link>
          </li>
          <li className={styles.kunde}>
            Kunde: {cases[2].title}
          </li>
          <li className={styles.periode}>
            Periode: {cases[2].periode}
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
        Growup har samarbejdet med Twelve Inch siden virksomhedens begyndelse — fra ideén om et ophæng til fremvisning af vinylplader, og til nu, hvor virksomheden sælger deres produkter i det meste af verden.<br /><br />
        Growup sparrer med Twelve Inch om deres online markedsføring på tværs af kanaler. Vi har udformet det visuelle udtryk i billeder, tryksager og på virksomhedens Shopify webshop.<br /><br />
        Da Twelve Inch’ primære salg er via webshoppen har det været afgørende at opbygge en solid og lynhurtig side som fungerer godt for både nye, såvel som tilbagevendende kunder.
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
            data='left' style={{ maxWidth: '46vw'}}>
            <Image src={Webshot} layout='responsive' quality='100'/>
            <p>
              Sådan så twelve-inch.com ud, efter at vi i foråret 2022 leverede en ny komplet Shopify-løsning.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '27vw'}}>
            <Image src={Webshot2} layout='responsive' quality='100'/>
            <p>
              Webshoppen er integreret med Amazon, således at produkterne kan sælges direkte fra Amazons lagre rundt om i verden. Det betyder at Twelve Inch kan sælge direkte til kunder i USA, EU, England, Japan, Australien mm. uden selv at have et lager, og med mindre end 2 dages levering.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '22vw'}}>
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
            data='right' style={{ maxWidth: '44vw'}}>
            <Image src={Stoj} layout='responsive' quality='100'/>
            <p>
              Vi har udviklet en billedstil til Twelve Inch, der bruges på tværs af deres mange salgskanaler.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '22vw'}}>
            <Image src={How} layout='responsive' quality='100'/>
            <p>
              Vi har også udviklet en billedserie, der bruges på tryksager, hos forhandlere og på webshoppen, som viser hvordan produktet monteres og bruges.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '40vw'}}>
            <Image src={Gallery} layout='responsive' quality='100'/>
            <p>
              Vi hjælper Twelve Inch med deres billedunivers, ved bl.a. at finde interiør og regi til photoshoots. Vi arbejder efter en drejebog, så vi sikrer, at i som kunde, får alle de billeder i har brug for.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '20vw'}}>
            <Image src={Insta} layout='responsive' quality='100'/>
            <p>
              Vi sørger for at billederne passer til flere forskellige medier, herunder Instagram, Pinterest, Amazon osv.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '42vw'}}>
            <Image src={Stue} layout='responsive' quality='100'/>
            <p>
              Vi sørger for at billederne passer til flere forskellige medier, herunder Instagram, Pinterest, Amazon osv.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '28vw'}}>
            <Image src={Pinterest} layout='responsive' quality='100'/>
            <p>
              Denne billedserie vi har skabt til Twelve Inch, har samlet over 200.000 unikke visninger på Pinterest.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '30vw'}}>
            <Image src={Packaging} layout='responsive' quality='100'/>
            <p>
              Og slutteligt har vi hjulpet Twelve Inch med fotografering af deres emballage, med henblik på brug på webshoppen og de andre salgskanaler.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

Twelveinch.defaultProps = {
  title: 'Growup Studio | Casehistorie | Twelveinch',
  description: 'Vi hjælper Twelve Inch med at holde et ensartet visuelt udtryk på deres Shopify netbutik, SoMe-kanaler, Amazon markedspladser og trykte sager. Vi leverer art direction, grafisk design, webudvikling og sparring i online markedsføring.'
}

export default Twelveinch
