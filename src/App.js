import { Navbar, About, Projects, Contact } from "./components";
import Scroll from "./components/Scroll";
import "@fontsource-variable/manrope";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Scroll />
    </div>
  );
}

export default App;
