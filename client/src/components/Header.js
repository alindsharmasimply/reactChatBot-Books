import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={"/"} className="brand-logo" style={{ paddingLeft: 10 }}>
          <h4>Suggestify</h4>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to={"/suggestion"}>Suggestions</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
