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

  const springConfig = { damping: 20, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const variants = {
    default: {
      background: 'var(--accent)',
      border: '1px solid var(--accent)',
      height: 26,
      width: 26,
      borderRadius: '13px',
      mixBlendMode: 'multiply',
      zIndex: '9',
    },
    expand: {
      background: 'var(--accent)',
      height: 200,
      width: 200,
      borderRadius: '100px',
      mixBlendMode: 'multiply',
      zIndex: '9',
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

  const setExpandVariant = () => {
    setCursorVariant('expand')
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
