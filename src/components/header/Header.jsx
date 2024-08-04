import { useContext } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/AuthContext";

export default function Header() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/catalog">Catalog</Link>
          </li>

          {isAuthenticated && (
            <li>
              <Link to="/add-furniture">Add furniture</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          )}

          {!isAuthenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <Link to="/register">Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
