import React, { useState, useEffect, createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { navItems, useData, listOfCourses } from "./constants";

import Header from "./components/Header";
import LeftNavigation from "./components/LeftNavigation";
import DetailsComponent from "./components/Details";
import ToDos from "./components/ToDos";

const ContextData = createContext();

function App() {
  const [activeSection, setActiveSection] = useState(navItems[0]["title"]);
  const [tempData, setTempData] = useState("Hi i am temp data");

  const navigateToSection = (value) => {
    setActiveSection(value.title);
    setTempData(value.title);
  };

  return (
    <ContextData.Provider value={tempData}>
      <div className="App">
        <Header />
        <div className="main-container">
          <LeftNavigation
            navItems={navItems}
            navigateToSection={navigateToSection}
          />
          <DetailsComponent
            listOfCourses={listOfCourses}
            activeSection={activeSection}
          />
        </div>
      </div>
      <ToDos />
    </ContextData.Provider>
  );
}

export { ContextData };

export default App;
