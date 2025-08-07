import { Routes, Route } from "react-router-dom";
import Home from '@/pages/home/home'
import Admin from "@/pages/admin";
import InfoProduct from "@/pages/informationProduct";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import AllProduct from "@/pages/allProducts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/produto/:id" element={<InfoProduct />} />
      <Route path="/Login" element={<SignIn />} />
      <Route path="/Cadastrar" element={<SignUp />} />
      <Route path="/produtos" element={<AllProduct />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
