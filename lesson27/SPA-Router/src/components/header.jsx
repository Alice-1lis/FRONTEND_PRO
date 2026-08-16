import { NavLink } from "react-router-dom";
import ThemeToggle from "./theme-toggle.jsx";

function Header() {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Головна
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Контакти
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Про нас
        </NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}

export default Header;