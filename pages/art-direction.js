import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'
import Hero from '../public/twelveinch/hero6.jpg'
import Havnen from '../public/artdirection/havnen_nick.jpg'
import Havnen2 from '../public/artdirection/havnen_bagom.jpg'
import Studiet from '../public/artdirection/studiet_model.jpg'
import Studiet2 from '../public/artdirection/studiet_bagom.jpg'
import Studiet3 from '../public/artdirection/studiet_skud.jpg'
import Studiet4 from '../public/artdirection/studiet_bagom_twelveinch.jpg'
import Studiet5 from '../public/artdirection/studiet_skud_twelveinch.jpg'
import Stue from '../public/twelveinch/twelveinch_stue.jpg'
import Mickleit from '../public/artdirection/ByMickleit_billede.jpg'

import { motion } from 'framer-motion'

const titelWords = [
  'Skræddersyede ',
  'billeder ',
  'og ',
  'videoer ',
  'til ',
  'jeres ',
  'hjemmeside, ',
  'tryksager ',
  'eller ',
  'sociale ',
  'medier.'
];

function ArtDirection({ title, description }) {
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
              Vi kigger bl.a. på hvilken stemning billederne skal prøve at indfange, farverummet og looket af billederne, og planlægger hele forløbet på fotodagen.
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
            <source src={'/organic/Hero.mp4'} type='video/mp4' />
          </video>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={how}
        className={`${styles.resume} ${styles.isAService}`}>
        <p>
        I samarbejde med professionelle fotostudier, udarbejder Growup en billedestil for jeres produkter til markedsføringsmaterialer og til brug på hjemmesider og webshops. Vi arrangerer et forløb hvor der tages både pack-shots og miljøbilleder.<br /><br/>
        Udover standard pack-shots kan miljøbilleder bidrage til at præsentere hvordan produkterne tager sig ud i virkelige omgivelser, således kunden danner sig et klart billede af hvad de køber. Vi arrangerer hele forløbet, inklusiv evt. regi, opstilling af miljø, booking af fotomodeller, forberedelse af mock-ups til inspiration m.m.<br/><br/>
        Vi laver ligeledes art direction for videooptagelser som kan benyttes i den online markedsføring.
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
            <Image src={Havnen} layout='responsive' />
            <p>
              Her ses et skud bagom videoen, som du ser herover. Vi samarbejder med dygtige fotografer om at skabe videoer og billeder, tiltænkt til brug på hjemmesider og sociale medier.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '30vw'}}>
            <Image src={Havnen2} layout='responsive' />
            <p>
              Vores filosofi er, at fotograferne skal have plads til at være kreative og få de rette skud. Vi tager derfor et skridt tilbage, og sørger for at bevare overblikket over, om produkterne er synlige, modellen er stylet rigtigt og om drejebogen overholdes.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '27vw'}}>
            <Image src={Studiet} layout='responsive' />
            <p>
              Vi sørger som sagt for at finde tøj til modellen, og instruer vedkommende i, hvordan de skal bevæge sig eller se ud på billedet.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '42vw'}}>
            <Image src={Studiet2} layout='responsive' />
            <p>
              Og så står vi i baggrunden, og sørger for at fotograferne har plads til at arbejde, og at i som kunde, får alle de billeder, i har brug for, samt kvalitetssikrer.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '22vw'}}>
            <Image src={Studiet3} layout='responsive'  />
            <p>
              Når billederne er taget, kommer de en tur igennem photoshop, enten hos os eller fotogaferne, og bliver afleveret i passende formater, så de er klar til brug.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '27vw'}}>
            <Image src={Studiet4} layout='responsive'  />
            <p>
              Her ses Rasmus, der er igang med at instruere modellen i, hvordan hun skal holde pladerne. En lille, men meget vigtig detalje, da Twelve Inchs kunder, er meget ømtålelige med deres plader. Det er sådanne detajler vi sikrer, bliver overholdt.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='left' style={{ maxWidth: '40vw'}}>
            <Image src={Studiet5} layout='responsive'  />
            <p>
              Her ses det endelige skud. Vi sørgede for at kontakte virksomheder, der ville udlåne møbler og regi, samt fandt en stylist, der kunne style miljøet. Produkterne står det rigtige sted i billedet, og modellen holder pladen helt korrekt.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '23vw'}}>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ objectFit: 'cover' }}
              >
              <source src={'/artdirection/InstaStory.mp4'} type='video/mp4' />
            </video>
            <p>
              Her er en lille bagom-story fra Instagram, hvor i kan se, at vi bygger stuemiljøet op. På de projekter, hvor vi har fået lov, deler vi oplevelsen med vores følgere på Instagram.
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
              <source src={'/artdirection/ByMickleit_video.mp4'} type='video/mp4' />
            </video>
            <p>
              Her ses Rie, der holder øje med og retter til, om modellens hår og tøj sidder korrekt.
            </p>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={how}
            variants={variants}
            className={styles.drop}
            data='right' style={{ maxWidth: '34vw'}}>
            <Image src={Mickleit} layout='responsive' />
            <p>
              Et simpelt skud som dette, er resultatet af et godt forarbejde. Der skal findes den rigtige model, tøjet skal passe til smykkerne — som er produktet der sælges her — en stol at sidde på, modellen skal instrueres, så smykkerne vises korrekt, fotograferne skal ligge det rette lys, så hudfarve og smykker ser korrekte ud, og meget mere.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

ArtDirection.defaultProps = {
  title: 'Growup Studio | Service | Art Direction',
  description: 'Skræddersyede billeder og videoer til jeres hjemmeside, tryksager eller sociale medier. Vi kigger bl.a. på hvilken stemning billederne skal prøve at indfange, farverummet og looket af billederne, og planlægger hele forløbet på fotodagen.'
}

export default ArtDirection
