import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="http://localhost:3000/" className="navbar-brand">
            <img
              className="mx-auto"
              src="https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/db4de/eth-home-icon.webp"
              alt="ethereum"></img>
          </a>
          <p></p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nContent"
            aria-controls="nContent"
            aria-expanded="false"
            aria-label="menüyü açıp/kapatma butonu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nContent">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item"></li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-3"
                type="form-control"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                type="search"
                placeholder="search"
                aria-labelledby="search box"
              />
              <button className="btn btn-outline-light">submit</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
