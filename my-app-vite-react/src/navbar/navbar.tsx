import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Rochedemy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Courses
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/newcourse">
                New Course
              </Link>
            </li>
          <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/formjsonform">
              FormJsonform
              </Link>
            </li>
            
            
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/tableaggrid">
              TableAgGrid
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/getpostbyid">
                Get Post By Id
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contextapi">
                Context API
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/translation">
                Translation
              </Link>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
