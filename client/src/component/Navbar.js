import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const native = useNavigate()
  const [keyword, setKeyword] = useState("");

  const searchSubmit = (e)=>{
    e.preventDefault()
    if(keyword){
      native(`/table`)
      console.log(keyword)
    }else{
      native(`/api/v1/data`);
    }
  }
 
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: 80 }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
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
            <form className="d-flex ms-auto" role="search"  onSubmit={searchSubmit}>
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                style={{ height: 45 }}
                // value="search"
                onChange={(e)=>setKeyword(e.target.value)}
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
                <i class="bi bi-search"></i>
              </button>
            </form>

            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider"></li> */}
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Sidebar />
    </>
  );
}

export default Navbar;
