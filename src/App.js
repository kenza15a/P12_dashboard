
import Accueil from "./pages/Accueil/Accueil";
import Profile from "./pages/Profile/Profile";
import Reglage from "./pages/Reglage/Reglage";
import Communite from "./pages/Communaute/Communite";
import Notfound from "./pages/NotFound/Notfound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accueil/:id" element={<Accueil />} />
        <Route index element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Reglage" element={<Reglage />} />
        <Route path="/Communite" element={<Communite />} />
        <Route path="/*" element={<Notfound />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );


}
export default App;
