import Navbar from '../../components/Navbar/Navbar'
import Collections from '../../views/Collections/Collections'
import Projects from '../../views/Projects/Projects'
import HeroSection from '../../views/HeroSection/HeroSection'
import News from '../../views/News/News'

import './Home.scss'
import Stories from '../../views/Stories/Stories'
import Newsletter from '../../views/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <News />
      <Collections />
      <Projects />
      <Stories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home