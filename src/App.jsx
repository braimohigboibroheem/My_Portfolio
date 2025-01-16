import React from "react";
import Navbar from "./Components/Static/Navbar";
import Hero from "./Components/Pages/hero/Hero";
import Aboutme from "./Components/Pages/about/Aboutme";
import Services from "./Components/services/Services";
import MyWork from "./Components/myWork/MyWork";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return(
    <div>
<Navbar/>
<Hero/>
<Aboutme/>
<Services/>
<MyWork/>
<Contact/>
<Footer/>

    </div>
  )
}

export default App