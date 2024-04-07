import { Home } from "./Components/Home Pages/Home";
import { BrowserRouter as Router, Rout, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
import { Navbar } from "./Components/Home Pages/Navbar";
import { About } from "./Components/About Pages/About";
import { Features } from "./Components/Features/Features";
import { Team } from "./Components/Team Pages/Team";
import { Reviews } from "./Components/Reviews Pages/Reviews";
import { FreeTrail } from "./Components/Free Trail Pages/FreeTrail";
import { Footer } from "./Components/Footer Pages/Footer";
import { createContext, useState } from "react";


export const appContext = createContext()

function App() {


  const scrollToSection = (link) => {
    const section = document.getElementById(link)
    section.scrollIntoView({ behavior: "smooth" });
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
    <div className=" w-full">

      <appContext.Provider value={{scrollToSection,setIsOpen,isOpen}}>

        <div id="Home" className=" w-full bgGredient ">
          <Home />
        </div>

        <div id="About" className=" w-full bg-darkGray" style={{filter:isOpen ? 'blur(5px)' : 'blur(0px)'}} >
          <About />
        </div>

        <div id="Featurs" className=" w-full bg-purpel1" style={{filter:isOpen ? 'blur(5px)' : 'blur(0px)'}}>
          <Features />
        </div>

        <div id="Team" className=" w-full bg-darkGray " style={{filter:isOpen ? 'blur(5px)' : 'blur(0px)'}}>
          <Team />
        </div>

        <div id="Reviwes" className=" w-full bg-purpel1  " style={{filter:isOpen ? 'blur(5px)' : 'blur(0px)'}}>
          <Reviews />
        </div>


        <div id="Free Trailer" className=" w-full bg-purpel1  " style={{filter:isOpen ? 'blur(5px)' : 'blur(0px)'}}>
          <FreeTrail />
        </div>

        <div id="Contacts" className=" w-full bg-darkGray " style={{filter:isOpen ? 'blur(5px)' : 'blur(0px)'}}>
          <Footer />
        </div>

      </appContext.Provider>

    </div>
    </Router>
  );
}

export default App;
