import React from "react";
import HeaderSlogan from "./component/HeaderSlogan";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import FindDoctor from "./component/FindDoctor";
import Hospital from "./component/Hospital";
import Medicines from "./component/Medicines";
import Surgeries from "./component/Surgeries";
import Softwareforproviders from "./component/Softwareforproviders";
import Facilities from "./component/Facilities";
import HeroSection from "./component/HeroSection";
import ImageSwiper from "./component/ImageSwiper";
import SearchComponent from "./component/SearchComponent";
import Specialisation from "./component/Specialisation";

function App() {
  return (
    <Router>
      <HeaderSlogan />
      <NavBar />
      <Routes>
        <Route path="/finddoctor" element={<FindDoctor/>}/>
        <Route path="/hospitals" element={<Hospital/>}/>
        <Route path="/medicines" element={<Medicines/>}/>
        <Route path="/surgeries" element={<Surgeries/>}/> 
        <Route path="/softwareforproviders" element={<Softwareforproviders/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
      </Routes>
      <HeroSection/>
      <SearchComponent/>
      <ImageSwiper />
      <Specialisation/>
    </Router>
  );
}

export default App;
