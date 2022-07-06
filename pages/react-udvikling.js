import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/webudvikling/DanielWagner_hero.jpg'
import StojMobile from '../public/webudvikling/Stoj_mobile_2.jpg'
import HejLiv from '../public/webudvikling/hejliv_forside.jpg'
import ChefJen from '../public/webudvikling/ChefJen_forside.jpg'
import GraphCMS from '../public/webudvikling/graphcms.jpg'
import Login from '../public/webudvikling/Login.jpg'
import Daniel from '../public/webudvikling/DanielWagner_mobile.jpg'
import MariasRum from '../public/webudvikling/MariasRum_maria.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'Vi ',
  'tilbyder ',
  'skræddersyde ',
  'React ',
  'hjemmesider ',
  'til ',
  'start-ups ',
  'og ',
  'etablerede ',
  'brands.'
];

function ReactUdvikling({ title, description }) {
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
              React-hjemmesider med et NEXT.JS lag ovenpå er ensbetydende med perfekt SEO-score, lynhurtige hjemmesider, mulighed for at oversætte hjemmesiden til en App, og for os, total designfrihed.
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
        React er et javascript framework udviklet af Facebook, der gør det muligt at udvikle avancerede og interaktive hjemmesider hurtigt og effektivt. Det er efter vores mening den bedste teknologi, der findes på markedet, fordi den løser en del af de problemer, der ofte opstår i webudvikling.<br/><br/>
        React gør det nemlig muligt at opdele en hjemmeside i komponenter, som kan genbruges om og om igen. Faktisk bliver webudviklingen lidt som at bygge med legoklodser — vi udvikler stille og roligt en større og større samling af forskellige klodser, som vi kan bruge i vores projekter.<br/><br/>
        Vi kan dermed skræddersy en hjemmeside-løsning til jer, der tager højde for jeres mindste behov, og tilmed levere på relativ kort tid. Findes løsningen til jeres behov ikke i vores samling af komponenter, udvikler vi dem til jer fra bunden.<br/><br/>
        Foruden React supporterer vi NEXT.JS, og har erfaring med at integrere API-baserede CMS-systemer til vores hjemmesider.
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
            data='left' style={{ maxWidth: '640px'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/webudvikling/Stoj_3.mp4'} type='video/mp4' />
            </video>
            <p>
              React betyder at vi har den største grad af designfrihed, og kan derfor tilbyde særligt kreative layouts og animationer til jeres hjemmeside.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '360px'}}>
            <Image src={StojMobile} />
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
            data='left' style={{ maxWidth: '520px'}}>
            <Image src={HejLiv} />
            <p>
              Her ses forsiden til hejliv.dk — et microsite, der viser Liv Cramer Holmes arbejde. Microsites er utroligt hurtige at udvikle i React — det kan tage helt ned til en uge at udvikle og publisere.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '440px'}}>
            <Image src={ChefJen} />
            <p>
              Til digitaldogme.dk har vi desuden integreret et fremragende cms-system, kaldet GraphCMS. Digital Dogme kan dermed selv vedligeholde hjemmesiden, ved at opdatere siderne med nye tekster og sektioner.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '520px'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/webudvikling/DigitalDogme_forside.mp4'} type='video/mp4' />
            </video>
            <p>
              Her er forsiden til det nye digitaldogme.dk, som vi har udviklet. Hjemmesiden er udviklet i React med et NEXT.JS lag oven på.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '600px'}}>
            <Image src={GraphCMS} />
            <p>
              Til digitaldogme.dk har vi desuden integreret et fremragende cms-system, kaldet GraphCMS. Digital Dogme kan dermed selv vedligeholde hjemmesiden, ved at opdatere siderne med nye tekster og sektioner.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '300px'}}>
            <Image src={Daniel} />
            <p>
              Vi drømmer om at skabe unikke og mindeværdige hjemmesider, der bliver kendt for deres simple og professionelle udtryk — vigtigst er det dog, at i som kunde får et værktøj, der understøtter jeres forretning.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '700px'}}>
            <Image src={MariasRum} />
            <p>
              Marias Rum er udviklet i React, med NEXT.JS som lag oven på, og et CMS-system tilkoblet, så hun selv kan redigere i hjemmesidens indhold, og skrive nye indlæg til bloggen.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

ReactUdvikling.defaultProps = {
  title: 'Growup Studio | Service | React og NEXT.JS udvikling',
  description: 'Vi udvikler i React og NEXT.JS. React-hjemmesider med et NEXT.JS lag ovenpå er ensbetydende med perfekt SEO-score, lynhurtige hjemmesider, mulighed for at oversætte hjemmesiden til en App, og for os, total designfrihed.'
}

export default ReactUdvikling
