import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MouseContext } from '../lib/MouseContext.js'

export default function Cursor() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const variants = {
    default: {
      backgroundColor: 'blue',
      height: 150,
      width: 150,
      borderRadius: '75px',
      mixBlendMode: 'lighten',
    }
  };

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const setDefaultVariant = () => {
    setCursorVariant('default')
    setCursorText('')
  }

  useEffect(() => (
    cursorChangeHandler()
  ), [])

  return (
    <motion.div
      variants={variants}
      className='cursor'
      animate={cursorVariant}
      transition={springConfig}
      style={{
        top: cursorYSpring,
        left: cursorXSpring,
      }}
    >
    <span className='cursorText'>{cursorText}</span>
    </motion.div>
  );
}
