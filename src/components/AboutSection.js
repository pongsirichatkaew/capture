import home1 from '../img/home1.png'

// Stlyed
// import styled from "styled-components";
import { About, Description, Image, Hide } from '../styles'

// Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../Animation'

import Wave from './Wave'
const AboutSection = () => {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 1 } }
  // }

  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       duration: 1,
  //       ease: 'easeOut',
  //       staggerChildren: 1
  //       // when: 'afterChildren'
  //     }
  //   }
  // }

  return (
    <About>
      <Description>
        <motion.div
        // variants={container}
        // initial='hidden'
        // animate='show'
        // className='title'
        >
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have a professional with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          // DONT WAIT FOR STACKING
          initial='hidden'
          animate='show'
          //
          src={home1}
          alt='guys with something'
        />
      </Image>
      <Wave />
    </About>
  )
}

export default AboutSection
