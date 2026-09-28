import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Hotels from "../pages/Hotels";
import HotelDetails from "../pages/HotelDetails";
import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route path="/hotels" element={<Hotels />} />
    <Route path="/hotels/:id" element={<HotelDetails />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
