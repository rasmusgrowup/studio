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
            video,
            title,
            assignments,
            status,
            url}, i) => (
            <Link href={url} passHref key={i}><a>
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: (2.8 + (i / 10)), ease: "easeOut" }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.case}
              >
                { image
                ? <div className={styles.imageWrapper}>
                    <Image
                      src={image}
                      layout='responsive'
                      objectFit='cover'
                      height='360'
                      width='300'
                      quality='100'
                      priority='true'
                      alt={title}
                    />
                  </div>
                : <div className={styles.videoWrapper}>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      height='100%'
                      width='100%'
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      >
                      <source src={video} type='video/mp4' />
                    </video>
                  </div>
                }
                <div className={styles.info}>
                  <p style={{
                    color: 'var(--accent)',
                    marginBottom: '0.5em',
                    fontSize: '1.1em'
                  }}>{title}</p>
                  <p>{assignments}</p>
                  <p>{status}</p>
                </div>
              </motion.div>
            </a></Link>
          ))}
        </div>
      </section>
    </>
  )
}
