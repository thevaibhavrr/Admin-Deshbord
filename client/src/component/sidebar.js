import React from "react";
import PieChart from "./piechart";
const Sidebar = () => {
  return (
    <div
      class="col-md-3 col-lg-2 sidebar-offcanvas pl-0 bg-dark"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef",marginTop:1 , marginLeft:1, textAlign:"center" , display:"flex" ,height:500 }}
    >
      <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li class="nav-item mb-2 mt-3">
          <a class="nav-link text-secondary" href="/">
            <h5>Deshbord</h5>
          </a>
        </li>
        <li class="nav-item mb-2 ">
          <a class="nav-link text-secondary" href="/">
            <i class="fas fa-user font-weight-bold"></i>{" "}
            <span className="ml-3">Overview</span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a
            class="nav-link text-secondary"
            href="#submenu1"
            data-toggle="collapse"
            data-target="#submenu1"
          >
            <i class="far fa-file-word font-weight-bold"></i>{" "}
            <span className="ml-3"> Reports▾</span>
          </a>
          
        </li>
        
        
       
        
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="/">
            <i class="far fa-folder font-weight-bold"></i>{" "}
            <span className="ml-3">Layouts</span>
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="/">
            Templates
          </a>
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary" href="/">
            Themes
          </a>
        </li>
      </ul>

      {/* <PieChart/> */}
<div style={{paddingLeft:500 , paddingTop:50}}>
    <PieChart/>
</div>
    </div>
  );
};

export default Sidebar;
