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
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: (3 + (i / 10)), ease: "easeOut" }}
            animate={{ opacity: 1, x: 0 }}
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
