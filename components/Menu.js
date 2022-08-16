import Link from "next/link"
import { useRouter } from 'next/router'
import styles from '../styles/menu.module.scss'
import { useState } from 'react'
import cases from '../utils/cases.js'
import services from '../utils/services.js'

export default function Menu() {
  const router = useRouter()
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

  var navigateToAbout = () => {
    router.push('/om-os')
  }

  var setAll = () => {
    setShowCases(false)
    setShowContact(false)
    setShowServices(false)
  }

  return (
    <>
      <div className={`${styles.list} ${ showCases || showContact || showServices ? `${styles.hide}` : `${styles.show}` } `}>
        <div className={styles.li} onClick={toggleCases}>
          Case-historier
        </div>
        <div className={styles.li} onClick={toggleServices}>
            Services
        </div>
        <div className={styles.li} onClick={navigateToAbout}>
            Om os
        </div>
      </div>
      <ul className={`${styles.cases} ${ showCases ? `${styles.show}` : `${styles.hide}` } `}>
        { cases.map(({ title, url }, i) => (
          <li className={styles.case} key={i} onClick={setAll}>
            <Link href={url}>
              <a className={`${styles.a} ${router.asPath === url ? `${styles.active}` : ''}`}>
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
              <a className={`${styles.a} ${router.asPath === url ? `${styles.active}` : ''}`}>
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
          <Link href='mailto:hello@growupstudio.dk'>
            <a>
              hello@growupstudio.dk
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
