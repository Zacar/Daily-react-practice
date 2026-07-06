import { Link } from "react-router";
import { useTheme } from "../theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="mode-switch">
          <label>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
