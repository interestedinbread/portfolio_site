import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { ProjectList } from "./components/ProjectList"
import { Skills } from "./components/Skills"
import { ButtonBar } from "./components/ButtonBar"
import { Testimonials } from "./components/Testimonials"
import { ContactInfo } from "./components/ContactInfo"
import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"

function App() {
  
  return (
    <>
      <Nav/>
      <div className="mt-38">
        <Header />
        <ButtonBar />
        <div id="projects">
          <ProjectList />
        </div>
        <Testimonials />
        <div id="skills">
          <Skills />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="contact">
          <ContactInfo />
        </div>
        <Footer />
      </div>
      
    </>
  )
}

export default App
