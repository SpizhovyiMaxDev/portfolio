import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Main from "./sections/Main/Main";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contacts from "./sections/Contacts/Contacts";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <About />
        <Projects />
        <Contacts />
      </Main>
      <Footer />
    </>
  );
}

export default App;
