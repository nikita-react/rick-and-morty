import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import Container from "../components/Container";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Routing;
