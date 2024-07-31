import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AddFutniture from "./components/add-furniture/AddFurniture";
import Catalog from "./components/catalog/Catalog";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-furniture" element={<AddFutniture />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
