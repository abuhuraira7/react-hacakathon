import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Pages
import Home from "./Home";
import CreateEvents from "./CreateEvents";
import ReadEvents from "./ReadEvents";

export default function index() {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="event" element={<CreateEvents />} />
          <Route path="readEvent" element={<ReadEvents />} />
        </Route>
      </Routes>
    </main>
    <Footer />
  </>
    
  );
}
