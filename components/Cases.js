import Image from "next/image"
import Link from "next/link"
import styles from '../styles/cases.module.scss'
import { useState } from 'react'
import cases from '../utils/cases.js'

export default function Cases() {

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.inner}>
          { cases.map(({ image, title, assignments, status, url}, i) => (
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
