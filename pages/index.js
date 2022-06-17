import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/styles.module.scss'

import Title from '../components/Title'

import Cases from '../components/Cases'
import data from '../utils/references.js'
import services from '../utils/services.js'

import { motion } from 'framer-motion'

const titelWords = [
  'Odenseansk',
  'designstudie.',
  'Vi',
  'tilbyder',
  'React,',
  'Next.js',
  '&',
  'Shopify',
  'løsninger'
];

const howFirst = [
  'Jeres',
  'billeder,',
  'videoer,',
  'budskaber',
  'og',
  'visuelle',
  'identitet',
  'leveres',
  'af',
  'det',
  'samme',
  'team,',
  'der',
  'leverer',
  'den',
  'tekniske',
  'løsning'
];

const howSecond = [
  'I',
  'får',
  'altså',
  'et',
  'værktøj,',
  'der',
  'understøtter',
  'jeres',
  'forretning,',
  'på',
  'bedste',
  'vis'
];

const howThird = [
  'Og',
  'da',
  'vi',
  'er',
  'et',
  'lille',
  'team,',
  'bliver',
  'der',
  'plads',
  'til',
  'fordybelse,',
  'personlig',
  'betjening',
  'og',
  'kreativitet,',
  'i',
  'hvert',
  'eneste',
  'projekt'
];


export default function Home() {
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
      <section
      className={styles.header}>
        <h1 className={styles.h1}>
          <Title arr={titelWords} />
        </h1>
        <motion.p
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1.2, delay: 2.5, ease: "easeOut" }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.tagline}>
          Vi leverer SEO-optimerede hjemmesider og netbutikker
          — respektfuldt pakket ind i jeres visuelle identitet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1.2, delay: 2.6, ease: "easeOut" }}
          animate={{ opacity: 1, y: 0 }}>
          <Link href='mailto:hello@growupstudio.dk'>
            <a className={styles.mail}>
              hejsa@growup.studio
            </a>
          </Link>
        </motion.div>
      </section>
      <Cases />
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={how}
        variants={variants}
      className={styles.about}>
        <h2 className={styles.h2}>
          Om os
        </h2>
        <p className={styles.p}>
          Vi er et lille, <b>nærværende</b> designteam fra Odense C. Vi har <b>4 års</b> erfaring i at levere smukke hjemmesider og visuelt design, <b>skræddersyet</b> til kunden.
        </p>
        <p className={styles.p}>
          Vi hjælper jer fra idé til færdigt <b>produkt.</b>
        </p>
        <Link href='/'>
          <a className={styles.link}>
            Mere om os
          </a>
        </Link>
      </motion.section>
      <section className={styles.services}>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={how}
          variants={variants}
        className={styles.h2}>
          Services
        </motion.h2>
        <ul className={styles.ul}>
          { services.map(( { service, url }, i) => (
            <motion.li
              initial='hidden'
              whileInView='visible'
              viewport={how}
              variants={variants}
            className={styles.li}
            key={i}>
              <Link href={url}>
                <a>
                  {service}
                </a>
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
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
          <div
            className={styles.wordContainer}>
            { howThird.map((word, i) => (
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
      <section className={styles.clients}>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={how}
          variants={variants}
        className={styles.h2}>
          Kunder
        </motion.h2>
        <ul className={styles.references}>
          { data.map(({ title, year}) => (
            <motion.li
              initial='hidden'
              whileInView='visible'
              viewport={how}
              variants={variants}
              className={styles.reference}
              key={title}>
                {title}
              <span className={styles.year}>
                {year}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>
      <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={how}
      variants={variants}
      className={styles.about}>
        <h2 className={styles.h2}>
          Mantra
        </h2>
        <p className={styles.p}>
          Hver organisation er <b>forskellig</b>, så det bør den tekniske løsning også være. vi tilbyder Skabelon-løsninger med <b>faste priser</b>, eller <b>skræddersyede</b> løsninger
        </p>
        <p className={styles.p}>
          Vi <b>optimerer</b> til alle skærme & moderne browsere
        </p>
        <Link href='/'>
          <a className={styles.link}>
            interesseret i at få et uforpligtende bud på jeres egen løsning?
          </a>
        </Link>
      </motion.section>
    </>
  )
}
