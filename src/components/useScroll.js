import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScroll = () => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 0.4 })
  // GIVE US TO SCROLL TO ELEMENT AND RETURN TRUE
  if (view) {
    controls.start('show')
  } else {
    controls.start('hidden')
  }
  // console.log('view', view)
  return [element, controls]
}
