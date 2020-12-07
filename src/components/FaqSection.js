import { useState } from 'react'
import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
// DETECT LAYOUT CHANGED
import { AnimateSharedLayout } from 'framer-motion'
import { useScroll } from './useScroll'
import { scrollReveal } from '../Animation'
const FaqSection = () => {
  const [element, controls] = useScroll()
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      inintial={'hidden'}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={'How Do I Start?'}>
          <div className='answer'>
            <p>Nulla commodo amet mollit veniam in mollit mollit ut.</p>
            <p>
              Cillum anim sit amet aliqua dolore. Excepteur excepteur minim ea
              eu pariatur in sunt tempor adipisicing id officia sunt ullamco
              culpa.
            </p>
          </div>
        </Toggle>

        <Toggle title={'Daily Schedule'}>
          <div className='answer'>
            <p>Nulla commodo amet mollit veniam in mollit mollit ut.</p>
            <p>
              Cillum anim sit amet aliqua dolore. Excepteur excepteur minim ea
              eu pariatur in sunt tempor adipisicing id officia sunt ullamco
              culpa.
            </p>
          </div>
        </Toggle>

        <Toggle title={`Different Payment Method`}>
          <div className='answer'>
            <p>Nulla commodo amet mollit veniam in mollit mollit ut.</p>
            <p>
              Cillum anim sit amet aliqua dolore. Excepteur excepteur minim ea
              eu pariatur in sunt tempor adipisicing id officia sunt ullamco
              culpa.
            </p>
          </div>
        </Toggle>

        <Toggle title={`What Product do you offer`}>
          <div className='answer'>
            <p>Nulla commodo amet mollit veniam in mollit mollit ut.</p>
            <p>
              Cillum anim sit amet aliqua dolore. Excepteur excepteur minim ea
              eu pariatur in sunt tempor adipisicing id officia sunt ullamco
              culpa.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
}

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`

export default FaqSection
