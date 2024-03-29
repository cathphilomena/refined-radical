import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Gallery from './sections/gallery/Gallery';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import Portfolio from './sections/portfolio/Portfolio';
// import {useRef, useState, useEffect} from 'react'

const App = () => {
  const {themeState} = useThemeContext();

  // const mainRef = useRef();
  // const [showFloatingNav, setShowFloatingNav] = useState(true);
  // const [siteYPosition, setSiteYPosition] = useState(0)

  // const showFloatingNavHandler = () => {
  //   setShowFloatingNav(true);
  // }

  // const hideFloatingNavHandler = () => {
  //   setShowFloatingNav(false);
  // }

  // const floatingNavToggleHandler = () => {
  //   if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y - 20) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y + 20)) {
  //     showFloatingNavHandler();
  //   } else {
  //     hideFloatingNavHandler();
  //   }

  //   setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  // }

  // useEffect(() => {
  //   const checkYPosition = setInterval(floatingNavToggleHandler, 3000);
  //   return () => clearInterval(checkYPosition);
  // }, [siteYPosition])


  return (
    <main  className={`${themeState.primary} ${themeState.background}`}>
      <Navbar/>
      <Header/>
      <About/>
      <Gallery/>
      <FAQs/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Theme/>
      <FloatingNav/>
    </main>
  )
}

export default App