import React from "react";
import Header from "./Components/Static/Header";
import Hero from "./Components/Pages/hero/Hero";
import Aboutme from "./Components/Pages/about/Aboutme";
import Services from "./Components/services/Services";
import MyWork from "./Components/myWork/MyWork";


const App = () => {
  return(
    <div>
<Header/>
<Hero/>
<Aboutme/>
<Services/>
<MyWork/>
    </div>
  )
}

export default App