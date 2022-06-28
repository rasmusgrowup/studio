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

  const springConfig = { damping: 75, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const variants = {
    default: {
      background: 'rgb(255, 201, 98)',
      background: 'radial-gradient(circle, rgba(255, 201, 98, 0.5) 0%, rgba(255, 201, 98, 0) 66%)',
      height: 1600,
      width: 1600,
      mixBlendMode: 'multiply',
      borderRadius: '800px',
      zIndex: '0',
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
