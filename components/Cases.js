import Image from "next/image"
import Link from "next/link"
import styles from '../styles/cases.module.scss'
import { useState } from 'react'

import Gambo from '../public/gambo.png'
import KarensBord from '../public/karensbord.png'
import TwelveInch from '../public/twelveinch.png'
import DigitalDogme from '../public/digitaldogme.png'

const objects = [
  {
    image: '/gambo.png',
    title: 'Gambo Moments',
    assignments: 'Art Direction & Shopify-løsning',
    status: 'Løbende samarbejde',
    url: '/'
  },
  {
    image: '/karensbord.png',
    title: 'Karens Bord',
    assignments: 'Skabelon Shopify-løsning',
    status: 'Løbende samarbejde',
    url: '/'
  },
  {
    image: '/twelveinch.png',
    title: 'Twelve Inch',
    assignments: 'Art Direction & Shopify-løsning',
    status: 'Løbende samarbejde',
    url: '/'
  },
  {
    image: '/digitaldogme.png',
    title: 'Digital Dogme',
    assignments: 'Identitetsdesign & Shopify-løsning',
    status: 'Løbende samarbejde',
    url: '/'
  }
];

export default function Cases() {

  console.log(objects)

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.inner}>
          { objects.map(({ image, title, assignments, status, url}, i) => (
            <div className={styles.case} key={i}>
              <Image
                src={image}
                layout='responsive'
                objectFit='cover'
                height='400'
                width='300'
                quality='100'
                priority='true'
                alt={title}
              />
              <div className={styles.info}>
                <p>{title}</p>
                <p>{assignments}</p>
                <p>{status}</p>
                <Link href={url}>
                  <a
                    className={styles.url}
                    target='_blank'>
                    <p>www</p>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
