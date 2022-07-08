import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import Layout from "../components/Layout";
import RenderCharacters from "../components/RenderCharacters";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route
            path="/character"
            element={
              <Layout>
                <RenderCharacters />
              </Layout>
            }
          />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Routing;
