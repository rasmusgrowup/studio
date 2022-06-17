import Link from "next/link"

import styles from '../styles/styles.module.scss'
import Title from '../components/Title'
import cases from '../utils/cases.js'

const titelWords = [
  'I',
  '2019',
  'redesignede',
  'vi',
  'Tinekhome.com',
  'med',
  'øget',
  'konvertering',
  'som',
  'målsætning.'
];

export default function Tinekhome() {
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
      <section>
        <h1 className={styles.h1}>
          <Title arr={titelWords} />
        </h1>
      </section>
      <section className={styles.intro}>
        <div className={styles.description}>
          <ul className={styles.list}>
            <li>{cases[0].title}</li>
            <li>{cases[0].assignments}</li>
            <li>{cases[0].status}</li>
            <li className={styles.link}><Link href='https://tinekhome.com'><a>https://tinekhome.com</a></Link></li>
          </ul>
        </div>
      </section>
      <div className={styles.resume}>
        <p>Siden 2019 har Growup løbende supporteret designvirksomheden Tine K Home med visuelle og funktionelle forbedringer på deres webshop. Fra vedligehold af forsiden ved lancering af nye kollektioner, til en fuld omskiftning af checkout-systemet med fokus på brugervenlighed og skærmstørrelser.<br /><br />
          Yderligere har Growup i fællesskab med et fotostudie tilrettelagt og udarbejdet videomateriale af populære produktserier for at understøtte oplevelsen af Tine K Home’s designunivers. Det har ført til vækst for online salget.<br /><br />
          I 2022 droppede Tine K Home videresalg via andre interiørwebshops, og det kræver netop en solid og stærk webshop, at kunne varetage den samlede online trafik.
        </p>
      </div>
    </>
  )
}
