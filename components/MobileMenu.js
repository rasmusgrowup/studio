import Link from "next/link"
import styles from '../styles/mobilemenu.module.scss'
import React, { useState, useContext } from 'react'
import { MenuContext } from "../lib/menuContext";
import cases from '../utils/cases.js'
import services from '../utils/services.js'

export default function Nav() {
  const [ menu, setMenu ] = useState(true);
  const { toggle, toggleFunction } = useContext(MenuContext);

  return (
    <>
      <div className={styles.button} onClick={toggleFunction}>
        { !toggle ? 'Menu +' : 'luk +' }
      </div>
      <div className={`${styles.drawer} ${ toggle ? `${styles.open}` : '' }`}>
        <div className={styles.inner}>
          <ul className={styles.cases}>
            <li className={styles.overskrift}>Case-historier</li>
            { cases.map(( { title, url }, i ) => (
              <li className={styles.li} key={i} onClick={toggleFunction}>
                <Link href={url}>
                  <a>
                    {title}
                    <span className={styles.number}>0{i + 1}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.services}>
            <li className={styles.overskrift}>services</li>
            { services.map(( { service, url }, i ) => (
              <li className={styles.li} key={i} onClick={toggleFunction}>
                <Link href={url}>
                  <a>
                    {service}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.contact}>
            <Link href='mailto:hejsa@growup.studio'>
              <a className={styles.mail}>
                hejsa@growup.studio
              </a>
            </Link>
            <Link href='tel:+4531623733'>
              <a className={styles.tel}>
                +45 31 62 37 33
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
