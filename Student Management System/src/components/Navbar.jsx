import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container navbar-inner">
        <div>
          <h1>Student Management System</h1>
        </div>
        <div className="nav-links">
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/students">
            Students
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to="/reports">
            Reports
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
