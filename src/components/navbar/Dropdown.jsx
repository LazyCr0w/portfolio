import React from "react";

const Dropdown = ({ links }) => {
  return (
    <div className="dropdown">
      {/* Iterate over links and render dropdown items */}
      {links.map((link) => (
        <a href={link.href} key={link.title} className="dropdown-item">
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Dropdown;
