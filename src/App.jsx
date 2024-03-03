import Navigation from "./sections/Navigation"
import Main from "./sections/Main"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <>
      <Navigation />
       <Main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Main>
      <Footer /> 
    </>
  )
}

export default App
