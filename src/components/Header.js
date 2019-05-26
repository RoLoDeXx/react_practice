import React from "react";
import PropTypes from "prop-types";
import "./styles/Header.css";

const Header = props => {
  const { branding } = props;
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <h1>☰</h1>
          </li>
          <li>
            <h1>{branding}</h1>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
