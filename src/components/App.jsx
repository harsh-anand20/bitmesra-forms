import React, { useState } from "react";
import Header from "./Header";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import Error from "./Error";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="form-one" element={<FormOne />} />
          <Route path="form-two" element={<FormTwo />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
