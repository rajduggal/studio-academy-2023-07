import React, { createContext, lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

const Home = lazy(() => import("./pages/Home"));
const FAQ = lazy(() => import("./pages/FAQ"));
const CoursesList = lazy(() => import("./pages/CoursesList"));
const TrainersList = lazy(() => import("./pages/TrainersList"));

const ContextData = createContext();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<CoursesList />} />
            <Route path="trainers" element={<TrainersList />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export { ContextData };

export default App;
