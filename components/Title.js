import styles from '../styles/styles.module.scss'
import { motion } from 'framer-motion'

export default function Title({ arr }) {
  return (
    <>
      { arr.map((word, i) => (
        <motion.div
          key={i}
          className={styles.wordWrapper}>
          <motion.span
            initial={{ y: '1em' }}
            animate={{ y: 0}}
            transition={{
              duration: 2,
              delay: 0.3 + (i / 10),
              ease: [0.22, 1, 0.36, 1]
            }}
            className={styles.wordSpan}>
            {word}
          </motion.span>
        </motion.div>
      ))}
    </>
  )
}
