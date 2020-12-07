import { useState } from 'react'
import { motion } from 'framer-motion'
const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <motion.div
      layout
      className='question'
      onClick={() => {
        setToggle(!toggle)
      }}
    >
      {/* ADD LAYOUT TO SOLVE THE STRECH TEXT  */}
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </motion.div>
  )
}

export default Toggle
