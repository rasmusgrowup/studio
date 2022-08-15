import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'

import Hero from '../public/karensbord/hero.jpg'
import Webshot from '../public/organic/organic_webshot.jpg'
import Studie from '../public/organic/organic_studie_2.jpg'
import Bagom from '../public/organic/organic_bagom.jpg'
import Mobileshot from '../public/organic/organic_mobileshot.jpg'
import Insta from '../public/organic/organic_instashot_2.jpg'
import Havnen from '../public/organic/organic_havnen.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'Vi ',
  'leverede ',
  'en ',
  'skræddersyet ',
  'Shopify ',
  'løsning ',
  'til ',
  'den ',
  'fynske ',
  'start-up ',
  'the ',
  'Organic ',
  'Crave ',
  'Company'
];

const howFirst = [
  'Vi ',
  'definerede ',
  'hele ',
  'the ',
  'Organic ',
  'Craves ',
  'online ',
  'univers ',
  '— ',
  'og ',
  'producerede ',
  'billeder, ',
  'video ',
  'og ',
  'tekster ',
  'hertil.'
];

const howSecond = [
  'Vi ',
  'supporterede ',
  'desuden ',
  'lanceringen ',
  'af ',
  'produkterne ',
  'med ',
  'stories, ',
  'reels ',
  'og ',
  'opslag ',
  'på ',
  'deres ',
  'Instagram ',
  'og ',
  'TikTok.'
];

function Organic({ title, description }) {
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
              The Organic Crave kom til os for at få hjælp til at vælge den rigtige ecommerce-platform. Den skulle være skalerbar, nem at vedligeholde og have gode integrationsmuligheder. Shopify var den naturlige løsning.
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
          <video
            autoPlay
            muted
            loop
            playsInline
            width='100%'
            style={{ objectFit: 'cover' }}
            >
            <source src={'/organic/Hero2.mp4'} type='video/mp4' />
          </video>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={how}
          className={styles.heroList}>
          <li className={styles.link}>
            <Link href='https://theorganiccrave.com'>
              <a target='_blank'>Besøg siden</a>
            </Link>
          </li>
          <li className={styles.kunde}>
            Kunde: {cases[3].title}
          </li>
          <li className={styles.periode}>
            Periode: {cases[3].periode}
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
        Som ny spiller på et trængt markede, lancerede The Organic Crave Company deres serie af sunde snacks i foråret 2020. Hertil leverede vi en skræddersyet Shopify-webshop som både havde til rolle at være en salgskanal og et visitkort til alle interesserede. Webshoppen skulle fortælle om The Organic Crave’s stærke ambitioner om at revolutionere snack-industrien gennem miljø-rigtige ingredienser og produktion.<br /><br />
        I forbindelse med lanceringen af webshoppen producerede og tilrettelagde Growup en serie af billeder, som skulle give den rigtige stemning omkring de nye produkter. Det skulle være moderne, ungt og friskt, og passe til den visuelle identitet som The Organic Crave har.
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
            data='left' style={{ maxWidth: '42vw'}}>
            <Image src={Webshot} layout='responsive' quality='100'/>
            <p>
              Sådan så theorganiccrave.com ud på lanceringsdagen. De billeder, vi har hjulpet med at producere, danner hele online universet.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '27vw'}}>
            <Image src={Bagom} layout='responsive' quality='100'/>
            <p>
              Vi hjalp til på fotodagen, hvor vi arbejdede systematisk efter en drejebog. Vi fandt frem til en egnet håndmodel og sørgede for at style hende, med tøj i matchende farver til produkter.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '28vw'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/organic/organic_video.mp4'} type='video/mp4' />
            </video>
            <p>
              Vi hjalp også med at organisere et videoshoot på Odense havn. Vi stog igen for at hyre en dygtig model og instruere hende, så vi fik de rigtige videoer.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '32vw'}}>
            <Image src={Havnen} layout='responsive' quality='100'/>
            <p>
              Her ses vi instruere modellen. Vi kigger over skulderen på fotografen, for at sørge for, at video-klippene fra havnen, passer sammen med billederne fra studiet.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '34vw'}}>
            <Image src={Studie} layout='responsive' quality='100'/>
            <p>
              Her ses håndmodellen med matchene skjorte.
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
              Henover sommeren 2020 stod for at poste og promovere The Organic Craves produkter på Instagram og TikTok.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '46vw'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/organic/organic_video_2.mp4'} type='video/mp4' />
            </video>
            <p>
              Videoklippene kunne desuden bruges på sociale medier også.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

Organic.defaultProps = {
  title: 'Growup Studio | Casehistorie | The Organic Crave Company',
  description: 'The Organic Crave kom til os for at få hjælp til at vælge den rigtige ecommerce-platform. Den skulle være skalerbar, nem at vedligeholde og have gode integrationsmuligheder. Shopify var den naturlige løsning.'
}

export default Organic
