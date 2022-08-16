import scss from '../styles/about.module.scss'
import styles from '../styles/styles.module.scss'
import Image from "next/image"
import Link from "next/link"
import Title from '../components/Title'
import Head from 'next/head'

// images
import Rasmus from '../public/rasmus.jpg'
import Rie from '../public/rie.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'Et',
  'lille',
  'nærværende',
  'designteam',
  'fra ',
  'Odense.',
  'Vi ',
  'tilbyder',
  'React,',
  'Next.js',
  '&',
  'Shopify',
  'løsninger'
];

function About({ title, description }) {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 50
    },
  }

  const otherVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 2,
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2,
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
      opacity: 0,
      y: '1.5em'
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
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
      <section
      className={styles.header}>
        <h1 className={styles.h1}>
          <Title arr={titelWords} />
        </h1>
      </section>
      <section className={scss.mantras}>
        <motion.ul
          initial='hidden'
          whileInView='visible'
          viewport={how}
          variants={otherVariants}
          className={scss.mantraList}>
          <motion.li variants={items} className={scss.mantra}>
            <h2>Nærværende team</h2>
            <p className={scss.p}>Vi er et lille, nærværende designteam fra Odense C. Vi har 4 års erfaring i at levere smukke hjemmesider og visuelt design, skræddersyet til kunden.<br /><br />
            Da vi er et lille team, bliver der plads til fordybelse, personlig betjening og kreativitet i hvert eneste projekt.<br /><br />
            Og så kan vi tilbyde <b>fleksibilitet</b> i vores løsninger, således at i får den optimale løsning til jeres organisation.
            </p>
          </motion.li>
          <motion.li variants={items} className={scss.mantra}>
            <h2>Gode, faste priser</h2>
            <p className={scss.p}>Vi tilbyder faste priser på vores løsninger, således at alle kunder får den samme, gode pris.<br /><br />
            Vores hjemmesideløsninger starter i <b>15.000,- kr.</b> for vores mest simple løsninger — og slutproduktet kan leveres i løbet af få uger.<br /><br />
            Vores faste lave timepris på <b>650,- kr. pr/time</b> gør at i nemt kan få råd til daglige/ugentlige ændringer på jeres hjemmeside.
            </p>
          </motion.li>
          <motion.li variants={items} className={scss.mantra}>
            <h2>Skræddersyede løsninger</h2>
            <p className={scss.p}>Skulle jeres behov ligge udenfor vores standardløsninger, tilbyder vi skræddersyede løsninger i både React og Shopify — således at i kan få en helt <b>unik hjemmeside.</b><br /><br />
            Vi kan integrere jeres hjemmeside med alverdens API&apos;er, bookingsystemer, tredjeparts-software og meget mere.
            </p>
          </motion.li>
        </motion.ul>
      </section>
      <section className={scss.section}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={how}
          variants={variants}
          className={scss.rasmus}>
          <div className={scss.imageWrapper}>
            <Image src={Rasmus} layout='responsive' className={scss.img}/>
          </div>
          <div className={scss.contentWrapper}>
            <h2>Rasmus Andersen</h2>
            <h3>Forretningsudvikling</h3>
            <p className={scss.p}>Er ansvarlig for forretningsudvikling og udvikling af de løsninger, Growup tilbyder.</p>
            <Link href="mailto:rasmus@growupstudio.dk">
              <a className={scss.mail}>rasmus@growupstudio.dk</a>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={how}
          variants={variants}
          className={scss.rie}>
          <div className={scss.imageWrapper}>
            <Image src={Rie} layout='responsive' className={scss.img}/>
          </div>
          <div className={scss.contentWrapper}>
            <h2>Rie Eckon Holst</h2>
            <h3>Kundepleje</h3>
            <p className={scss.p}>Ansvarlig for kunderrelationer, support, SoMe-løsninger og grafisk design.</p>
            <Link href="mailto:rie@growupstudio.dk">
              <a className={scss.mail}>rie@growupstudio.dk</a>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}

About.defaultProps = {
  title: 'Growup Studio | Om Growup Studio | Odenseansk designstudie',
  description: 'Karens Bord var træt af deres Squarespace-løsning, og gik til os for hjælp til en bedre løsning. Vi hjalp dem over på Shopify, hvilket de flere gange selv har sagt, har været den bedste beslutning længe.'
}

export default About
