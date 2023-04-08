import { Categories } from '../../components/landing-page/sections/Featured-categories'
import Footer from '../../components/landing-page/sections/Footer'
import Hero from '../../components/landing-page/sections/Hero'
import MobileMenu from '../../components/Navbar/mobile/Mobile-menu'

export default function LandingPage() {
  return (
    <div className="bg-white">

      <MobileMenu />

      <header className="relative overflow-hidden">
        {/* Hero section */}
        <Hero />
        {/* <Slider /> */}
      </header>

      <main>
        {/* Category section */}
        <Categories />
        {/* Featured section */}
        {/* <Featured /> */}
        {/* Favorites section */}
        {/* <Favourites /> */}
      </main>
      <Footer />
    </div>
  )
}
