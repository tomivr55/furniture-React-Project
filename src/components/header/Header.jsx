import style from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/catalog">Catalog</a>
          </li>
          <li>
            <a href="/add-furniture">Add furniture</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Regisrer</a>
          </li>
          <li>
            <a href="#0">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
