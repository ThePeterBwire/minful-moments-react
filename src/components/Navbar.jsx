import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link to="/" className="navbar-brand">
        Mindful Moments
      </Link>
      <div className="navbar-nav">
        <Link to="/journal" className="nav-link">
          Journal
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;