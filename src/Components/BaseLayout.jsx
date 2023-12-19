import { Outlet, NavLink } from "react-router-dom";
import './BaseLayout.scss';


export default function BaseLayout() {
  return (
    <div>
      <header>
        <nav>
          {/* <img src={logo} alt="Logo" className="logo" /> */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="countries">Countries</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
