import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact/trainer1">Trainer 1</Link>
          </li>
          <li>
            <Link to="/contact/trainer2">Trainer 2</Link>
          </li>
          <li>
            <Link to="/session">All Session</Link>
          </li>
          <li>
            <Link to="/session/react">React</Link>
          </li>
          <li>
            <Link to="/session/angular">Angular</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
