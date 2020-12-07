// Global Styles
import GlobalStyle from './components/GlobalStyle'
// IMPORT PAGES
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import Nav from './components/Nav'
import MovieDetail from './pages/MovieDetail'
// Router
import { Switch, Route, useLocation } from 'react-router-dom'

// Animation
import { AnimatePresence } from 'framer-motion'
import ScrollTop from './components/ScrollTop'

function App () {
  // NEED KEY FROM A PAGE WE ON
  // CAN GET IT ON USELOCATION()
  // SPECIFIC WITH FRAMER MOTION
  const location = useLocation()

  return (
    <div className='App'>
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/work' exact>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
