import Image from "next/image"
import Link from "next/link"
import styles from '../styles/cases.module.scss'
import { useState } from 'react'
import cases from '../utils/cases.js'
import { motion } from 'framer-motion'

export default function Cases() {

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.inner}>
          { cases.map(({
            image,
            title,
            assignments,
            status,
            url}, i) => (
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: (2.65 + (i / 10)), ease: "easeOut" }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.case}
            key={i}>
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
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
