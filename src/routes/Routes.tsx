import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import IndexComponent from "../components/IndexComponent";
import Layout from "../components/Layout";
import RenderCharacters from "../components/RenderCharacters";
import RenderLocations from "../components/RenderLocations";
import RenderOneCharacter from "../components/RenderOneCharacter";
import NotFound from "../components/NotFound";

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexComponent />} />

            <Route path="character" element={<RenderCharacters />} />
            <Route
              path="character/:characterId"
              element={<RenderOneCharacter />}
            />
            <Route path="location" element={<RenderLocations />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Routing;
