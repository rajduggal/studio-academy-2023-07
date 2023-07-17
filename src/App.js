import React, { useState, useEffect, createContext, useContext } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { navItems, useData, listOfCourses } from "./constants";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import CoursesList from "./pages/CoursesList";
import TrainersList from "./pages/TrainersList";
import NoPage from "./pages/NoPage";

const ContextData = createContext();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<CoursesList />} />
          <Route path="trainers" element={<TrainersList />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { ContextData };

export default App;
