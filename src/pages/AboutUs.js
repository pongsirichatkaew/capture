import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation } from '../Animation'
import ScrollTop from '../components/ScrollTop'
const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <ScrollTop />
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs
