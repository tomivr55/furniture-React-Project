import style from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
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

          <li>
            <Link to="/add-furniture">Add furniture</Link>
          </li>

          <li>
            <Link to="/logout">Logout</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
