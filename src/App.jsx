import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowitWorks from "./components/HowitWorks"
import Models from "./components/Models"
import Navbar from "./components/Navbar"
import * as Sentry from '@sentry/react'

const App = ()=> {
 
  

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero />
      <Highlights/>
      <Models />
      <Features />
      <HowitWorks />
      <Footer />

    </main>
        
  )
}

export default Sentry.withProfiler(App) 
