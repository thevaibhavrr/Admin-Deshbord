import React from "react";
const Catogry = () => {
  return (
    <div
      class="col-md-3 col-lg-2 sidebar-offcanvas pl-0 bg-dark"
      id="sidebar"
      role="navigation"
      style={{
        // backgroundColor: "#e9ecef",
        marginTop: -500,
        marginLeft: 1420,
        textAlign: "center",
        height: 500,
      }}
    >
      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown link
        </a>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="/">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catogry;
