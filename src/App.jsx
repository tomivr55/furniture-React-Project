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
import Profile from "./components/profile/Profile";
import { AuthenticationContextProvider } from "./contexts/AuthContext";
import Logout from "./components/logout/Logout";
import EditFurniture from "./components/edit-furniture/EditFurniture";
import RouteGuard from "./route-guards/RouteGuards";
import Search from "./components/search/Search";

function App() {
  return (
    <AuthenticationContextProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:furnitureId" element={<DetailsFurniture />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/search" element={<Search />} />

        <Route element={<RouteGuard />}>
          <Route path="/add-furniture" element={<AddFutniture />} />
          <Route path="/edit/:furnitureId" element={<EditFurniture />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </AuthenticationContextProvider>
  );
}

export default App;
