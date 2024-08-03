import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AddFutniture from "./components/add-furniture/AddFurniture";
import Catalog from "./components/catalog/Catalog";
import DetailsFurniture from "./components/catalog/details-furniture/DetailsFurniture";
import ErrorPage from "./components/error/Error";
import { AuthenticationContext } from "./contexts/AuthContext";
import { useState } from "react";

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };

  return (
    <AuthenticationContext.Provider value={contextData}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-furniture" element={<AddFutniture />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:furnitureId" element={<DetailsFurniture />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </AuthenticationContext.Provider>
  );
}

export default App;
