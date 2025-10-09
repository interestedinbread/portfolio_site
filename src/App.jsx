import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { ProjectList } from "./components/ProjectList"
import { Skills } from "./components/Skills"
import { ButtonBar } from "./components/ButtonBar"

function App() {
  

  return (
    <>
      <Nav/>
      <Header/>
      <ButtonBar />
      <Skills />
      <ProjectList/>
      {/* about me component */}
      {/* contact links etc. */}
    </>
  )
}

export default App
