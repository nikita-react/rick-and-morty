import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../components/App";
import IndexComponent from "../components/IndexComponent";
import Layout from "../components/Layout";
import RenderCharacters from "../components/RenderCharacters";
import RenderLocations from "../components/RenderLocations";
import RenderOneCharacter from "../components/RenderOneCharacter";
import NotFound from "../components/NotFound";
import { AnimatePresence } from "framer-motion";

const Routing: React.FC = () => {
  const location = useLocation();
  return (
    <App>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexComponent />} />

            <Route path="character" element={<RenderCharacters />} />
            <Route path="character/page=:id" element={<RenderCharacters />} />
            <Route path="character/:id" element={<RenderOneCharacter />} />
            <Route path="location" element={<RenderLocations />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </App>
  );
};

export default Routing;
