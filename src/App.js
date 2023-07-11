import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import LeftNavigation from "./components/LeftNavigation";
import DetailsComponent from "./components/Details";

// List of navigation flows
// List of courses/plans for training sessions
// User details -> Header

const useData = {
  firstName: "FName",
  lastName: "LName",
};

const navItems = [
  {
    id: 8749234,
    title: "Courses List",
    active: true,
  },
  {
    title: "Trainers",
    active: true,
  },
  {
    title: "Search",
    active: false,
  },
];

const listOfCourses = [
  {
    title: "ReactJS foundations",
    duration: "3 Weeks",
    trainers: ["Rajan", "Deba", "Sandeep"],
    reviews: ["Review 1", "details of course review", "abc"],
    techStack: ["HTML", "CSS", "Javascript", "Components", "Hooks"],
    description: "This course covers front end foundations for ReactJS",
    rating: 12358,
  },
];

function App() {
  const [activeSection, setActiveSection] = useState(navItems[0]["title"]);

  const navigateToSection = (value) => {
    setActiveSection(value);
  };

  return (
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
  );
}

export default App;
