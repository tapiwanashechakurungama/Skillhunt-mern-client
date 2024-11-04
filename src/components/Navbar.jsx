import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./../../public/logo.png"
import { Link } from "react-router-dom";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span className="icon">
              <img src={logo} alt="" />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/category"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </Link>
            </li>
            <li className="nav-items">
              <Link
                exact
                activeClassName="active"
                className="nav-links post-job"
                to="postjob"
              >
                Post job
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <AiOutlineClose />
              </span>
            ) : (
              <span className="icon">
                <GiHamburgerMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
