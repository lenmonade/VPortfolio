import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <Navbar />
      <section className="min-h-screen flex items-left left">
        <div className="flex items-start gap-8">
          <Hero />
        </div>
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Profile />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Experience />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Skills />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>
      <Footer />
    </main>
    </>
  )
}

export default App
