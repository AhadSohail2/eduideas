import About from './components/About/About'
import Background from './components/UX/Background'
import Cards from './components/Cards/Cards'
import Hero from './components/Hero/Hero'
import Slider from './components/Slider/Slider'
import WhiteBackground from './components/UX/WhiteBackground'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Footer from './components/UX/Footer/Footer'
import Nav from './components/UX/Nav/Nav'

export default function Home() {
  return (
    <div>
      <Background>
        <Nav />
        <Hero />
        <About />
        <Cards />
      </Background>
      <WhiteBackground>
        <Slider />
        <Blogs />
        <Contact />
        <Footer />
      </WhiteBackground>
    </div>
  )
}
