
import Accueil from "./pages/Accueil/Accueil";
import Profile from "./pages/Profile/Profile";
import Reglage from "./pages/Reglage/Reglage";
import Communite from "./pages/Communaute/Communite";
import Notfound from "./pages/NotFound/Notfound";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import "./App.css"
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#C4C4C4" highlightColor="#C1C4C4" >

      <BrowserRouter>
        <Routes>

          <Route path="/Accueil/:id" element={<Accueil />} />
          <Route index element={<Accueil />} />
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Reglage" element={<Reglage />} />
          <Route path="/Communite" element={<Communite />} />
          <Route path="/Accueil/*" element={<Notfound />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </SkeletonTheme>


  );


}
export default App;
