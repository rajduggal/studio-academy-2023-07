import React, { useState, useEffect, createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { navItems, useData, listOfCourses } from "./constants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LeftNavigation from "./components/LeftNavigation";
import DetailsComponent from "./components/Details";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NoPage from "./pages/NoPage";

const ContextData = createContext();

function App() {
  const [activeSection, setActiveSection] = useState(navItems[0]["title"]);
  const [tempData, setTempData] = useState("Hi i am temp data");

  const navigateToSection = (value) => {
    setActiveSection(value.title);
    setTempData(value.title);
  };

  return (
    // <ContextData.Provider value={tempData}>
    //   <div className="App">
    //     <Header />
    //     <div className="main-container">
    //       <LeftNavigation
    //         navItems={navItems}
    //         navigateToSection={navigateToSection}
    //       />
    //       <DetailsComponent
    //         listOfCourses={listOfCourses}
    //         activeSection={activeSection}
    //       />
    //     </div>
    //   </div>
    // </ContextData.Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { ContextData };

export default App;
