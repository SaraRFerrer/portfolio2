import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/resume">View My Resume</Link>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
