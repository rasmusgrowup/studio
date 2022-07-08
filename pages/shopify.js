import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/shopify/hero.jpg'
import StojMobile from '../public/webudvikling/Stoj_mobile_2.jpg'
import HejLiv from '../public/webudvikling/hejliv_forside.jpg'
import Pral from '../public/shopify/Pral_forside.jpg'
import PralProduktside from '../public/shopify/Pral_produktside.jpg'
import GraphCMS from '../public/webudvikling/graphcms.jpg'
import Login from '../public/webudvikling/Login.jpg'
import Daniel from '../public/webudvikling/DanielWagner_mobile.jpg'
import MariasRum from '../public/webudvikling/MariasRum_maria.jpg'
import OrganicMobile from '../public/organic/organic_mobileshot.jpg'
import Organic from '../public/organic/organic_webshot.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'Vi ',
  'udvikler ',
  'skræddersyde ',
  'Shopify',
  'løsninger ',
  '— ',
  'til ',
  'start-ups ',
  'og ',
  'etablerede ',
  'brands.'
];

function Shopify({ title, description }) {
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
              Med Shopify som base, kan vi hurtigt og effektivt levere moderne webshops med høj ydeevne. Vi tilbyder skræddersyede Shopify-webshops, så i som virksomhed nemt kan administrere butikken, og hvor alt front-end er specialbygget efter jeres specifikke ønsker.
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
        Shopify er en alt-i-en webshop-løsning, som tusinder af virksomheder benytter til dagligt. Foruden deres backend-system, tilbyder de et økosystem af apps og integrationer, som kan bruges til at drive en netbutik — og de har heldigvis fokuseret på, at gøre driften af butikken så simpel som mulig. Med Shopify kan i selv oprette og ændre i jeres produkter, oprette udsalg og kollektioner, skrive blog-indlæg, oprette nye sider, oprette email-flows og alt andet købmandshjertet måtte begære.<br/><br/>
        Problemet med Shopify kan dog være, at man bliver nødt til at lave sin webshop efter den samme skabelon, som tusindvis af andre virksomheder. Det betyder at i mister muligheden for at overbevise jeres brugere om, at i er et unikt og seriøst brand. Det problem løser vi — vi udvikler jeres helt eget, unikke Shopify-tema.<br/><br/>
        Vi er certificerede Shopify partnere. Det betyder at i får ekstra god support til Shopify hos os, og at vi kan videreudvikle på jeres webshop. Det betyder også, at vi kan skræddersy en Shopify-løsning, til jeres unikke behov.
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
            data='left' style={{ maxWidth: '38vw'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/shopify/twelveinch_backend.mp4'} type='video/mp4' />
            </video>
            <p>
              Med Shopify har i mulighed for selv at rykke rundt på og oprette nye sektioner til alle hjemmesidens sider — men kun hvis jeres tema understøtter Shopify 2.0, og det gør vores temaer naturligvis.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '28vw'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/shopify/twelveinch_forside.mp4'} type='video/mp4' />
            </video>
            <p>
              Vi udvikler skræddersyede Shopify-løsninger, som her til Twelve Inch. Deres Shopify tema er udviklet af os direkte efter deres behov. Det betyder at de får en unik og enestående webshop.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '20vw'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/shopify/TwelveInch_mobile.mp4'} type='video/mp4' />
            </video>
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
            data='right' style={{ maxWidth: '45vw'}}>
            <Image src={Pral} layout='responsive'  />
            <p>
              En anden service vi tilbyder er tilpasning af udseende og funktionaliteter i eksisterende temaer. www.pral.dk er et eksempel på dette, hvor vi både tilføjede nye funktioner, og tilpassede temaets udseende.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '44vw'}}>
            <Image src={PralProduktside} layout='responsive' />
            <p>
              En af de funktionaliteter vi udbyggede var produktvælgeren.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '20vw'}}>
            <Image src={OrganicMobile} layout='responsive' />
            <p>
              Sådan så theorganiccrave.com ud på lanceringsdagen. Vi har udviklet en skræddersyet Shopify-løsning til The Organic Crave Company — inklusive billeder, videoer og butikkens udseende.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '43vw'}}>
            <Image src={Organic} layout='responsive' />
            <p>
              Den skræddersyede løsning til The Organic Crave Company blev leveret på godt og vel 4 måneder.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

Shopify.defaultProps = {
  title: 'Growup Studio | Service | Shopify-løsninger',
  description: 'Vi er certificerede Shopify partnere. Det betyder at i får ekstra god support til Shopify hos os, og at vi kan videredvikle på jeres webshop. Det betyder også, at vi kan skræddersy en Shopify-løsning, til jeres unikke behov.'
}

export default Shopify
