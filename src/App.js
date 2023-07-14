import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Session from "./pages/Session";
import NoPage from "./pages/NoPage";
import Topic from "./pages/Topic";
import Trainer1 from "./pages/Trainer1";
import Trainer2 from "./pages/Trainer2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="session" element={<Session />} />
          <Route path="session/:detailId" element={<Topic />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/trainer1" element={<Trainer1 />} />
          <Route path="contact/trainer2" element={<Trainer2 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
