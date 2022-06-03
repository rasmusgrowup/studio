import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/styles.module.scss'

import Cases from '../components/Cases'
import data from '../utils/references.js'
import services from '../utils/services.js'

export default function Home() {
  return (
    <>
      <section className={styles.header}>
        <h1 className={styles.h1}>
          Digitalt design Studie fra Odense. Vi tilbyder react & shopify-løsninger.
        </h1>
        <p className={styles.tagline}>
          Visuelt design m. kommunikation & <br/>brugeren i centrum
        </p>
        <Link href='mailto:hello@growupstudio.dk'>
          <a className={styles.mail}>
            hejsa@growup.studio
          </a>
        </Link>
      </section>
      <Cases />
      <section className={styles.about}>
        <h2 className={styles.h2}>
          Om os
        </h2>
        <p className={styles.p}>
          Vi er et <b>nærværende</b> design team fra Odense C. Vi har <b>4 års</b> erfaring i at levere smukke hjemmesider og visuelt design, <b>skræddersyet</b> til kunden.
        </p>
        <p className={styles.p}>
          Vi hjælper jer fra idé til færdigt <b>produkt.</b>
        </p>
        <Link href='/'>
          <a className={styles.link}>
            Mere om os
          </a>
        </Link>
      </section>
      <section className={styles.services}>
        <h2 className={styles.h2}>
          Services
        </h2>
        <ul className={styles.ul}>
          { services.map(( { service, url }, i) => (
            <li className={styles.li} key={i}>
              <Link href={url}>
                <a>
                  {service}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.clients}>
        <h2 className={styles.h2}>
          Kunder
        </h2>
        <ul className={styles.references}>
          { data.map(({ title, year}) => (
            <li className={styles.reference} key={title}>{title}<span className={styles.year}>{year}</span></li>
          ))}
        </ul>
      </section>
      <section className={styles.about}>
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
      </section>
    </>
  )
}
