import React, { useState, useEffect, createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { navItems, useData, listOfCourses } from "./constants";

import Header from "./components/Header";
import LeftNavigation from "./components/LeftNavigation";
import DetailsComponent from "./components/Details";

// List of navigation flows
// List of courses/plans for training sessions
// User details -> Header

const ContextData = createContext();

function App() {
  const [activeSection, setActiveSection] = useState(navItems[0]["title"]);
  const [tempData, setTempData] = useState("Hi i am temp data");

  const navigateToSection = (value) => {
    setActiveSection(value.title);
    setTempData(value.title);
  };

  // TO BE REMOVED
  useEffect(() => {
    console.log("hello i am useEffect 1");
  });

  // TO BE REMOVED
  useEffect(() => {
    console.log("hello i am useEffect 2");
  }, []);

  // TO BE REMOVED
  useEffect(() => {
    console.log("hello i am useEffect 3");
  }, [activeSection]);

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
    </ContextData.Provider>
  );
}

export { ContextData };

export default App;
