import React from "react";
import logo from "../smkn1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container me-auto">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Berita
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-success login font fw-bold rounded-5">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
