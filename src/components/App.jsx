import React, { useState } from "react";
import Header from "./Header";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import Error from "./Error";
import Home from "./Home";
import Search from "./Search";
import FormOneData from "./FormOneData";
import FormTwoData from "./FormTwoData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Search/>} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/form-one/:id" element={<FormOne />} />
          <Route path="/form-two/:id" element={<FormTwo />} />
          <Route path="/form-one-data/:id" element={<FormOneData />} />
          <Route path="/form-two-data/:id" element={<FormTwoData />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
