import { Routes, Route } from "react-router-dom";
import Home from '@/pages/home/home'
import Admin from "@/pages/admin";
import InfoProduct from "@/pages/informationProduct";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/infoProduct/:id" element={<InfoProduct />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
