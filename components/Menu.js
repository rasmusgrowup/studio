import Link from "next/link"
import styles from '../styles/menu.module.scss'
import { useState } from 'react'
import cases from '../utils/cases.js'
import services from '../utils/services.js'

export default function Menu() {
  const [ showCases, setShowCases ] = useState(false);
  const [ showContact, setShowContact ] = useState(false);
  const [ showServices, setShowServices ] = useState(false);

  var toggleCases = () => {
    setShowCases(!showCases)
  }

  var toggleContact = () => {
    setShowContact(!showContact)
  }

  var toggleServices = () => {
    setShowServices(!showServices)
  }

  var setAll = () => {
    setShowCases(false)
    setShowContact(false)
    setShowServices(false)
  }

  console.log(showContact)

  return (
    <>
      <ul className={`${styles.list} ${ showCases || showContact || showServices ? `${styles.hide}` : `${styles.show}` } `}>
        <li className={styles.li} onClick={toggleCases}>
          Case-historier
        </li>
        <li className={styles.li} onClick={toggleServices}>
            Services
        </li>
        <li className={styles.li} onClick={toggleContact}>
            Om os
        </li>
      </ul>
      <ul className={`${styles.cases} ${ showCases ? `${styles.show}` : `${styles.hide}` } `}>
        { cases.map(({ title, url }, i) => (
          <li className={styles.case} key={i} onClick={setAll}>
            <Link href={url}>
              <a className={styles.a}>
                {title}
                <span className={styles.number}>0{i + 1}</span>
              </a>
            </Link>
          </li>
        ))}
        <li className={styles.case} id={styles.luk} onClick={toggleCases}>
            Luk
        </li>
      </ul>
      <ul className={`${styles.services} ${ showServices ? `${styles.show}` : `${styles.hide}` } `}>
        { services.map(({ service, url }, i) => (
          <li className={styles.service} key={i} onClick={setAll}>
            <Link href={url}>
              <a className={styles.a}>
                {service}
              </a>
            </Link>
          </li>
        ))}
        <li className={styles.case} id={styles.luk} onClick={toggleServices}>
            Luk
        </li>
      </ul>
      <ul className={`${styles.contact} ${ showContact ? `${styles.show}` : `${styles.hide}` } `}>
        <li className={styles.li} onClick={setAll}>
          <Link href='mailto:hejsa@growup.studio'>
            <a>
              hejsa@growup.studio
            </a>
          </Link>
        </li>
        <li className={styles.li} onClick={setAll}>
          <Link href='tel:+4531623733'>
            <a>
              +45 31 62 37 33
            </a>
          </Link>
        </li>
        <li className={styles.case} id={styles.luk} onClick={toggleContact}>
            Luk
        </li>
      </ul>
    </>
  )
}
