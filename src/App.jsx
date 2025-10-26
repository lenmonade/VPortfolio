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
      <main className="flex flex-col items-center w-full">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="flex justify-center items-center min-h-screen w-full">
          <Hero />
        </section>

        {/* Profile Section */}
        <section className="flex justify-center items-center w-full py-16">
          <Profile />
        </section>

        {/* Experience Section */}
        <section className="flex justify-center items-center w-full py-16">
          <Experience />
        </section>

        {/* Skills Section */}
        <section className="flex justify-center items-center w-full py-16">
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="flex justify-center items-center w-full py-16">
          <Projects />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}

export default App
