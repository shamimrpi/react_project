import '../assets/css/all.min.css';
import '../assets/css/sb-admin-2.min.css';

import '../assets/js/jquery.min.js'
import '../assets/js/bootstrap.bundle.min.js'
import '../assets/js/jquery.easing.min.js'
import '../assets/js/sb-admin-2.min.js'
import { Link } from 'react-router-dom';



function Sidebar() {
  return (
    <div className="Sidebar">
      
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

       
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

     
            <hr className="sidebar-divider my-0" />

        
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

        
            <hr className="sidebar-divider" />

        
            <div className="sidebar-heading">
                Interface
            </div>

      
            <li className="nav-item">
                <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Table</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <Link className="collapse-item" to="/table">Table</Link>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>

       
            <li className="nav-item">
                <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </Link>
             
            </li>

        

     
            <li className="nav-item">
                <Link className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </Link>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <Link className="collapse-item" href="login.html">Login</Link>
                        <Link className="collapse-item" href="register.html">Register</Link>
                        <Link className="collapse-item" href="forgot-password.html">Forgot Password</Link>
                        <div className="collapse-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <Link className="collapse-item" href="404.html">404 Page</Link>
                        <Link className="collapse-item" href="blank.html">Blank Page</Link>
                    </div>
                </div>
            </li>

        
            <li className="nav-item">
                <Link className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></Link>
            </li>

        
            <li className="nav-item">
                <Link className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tables</span></Link>
            </li>

        

        </ul>

                
        
    </div>
  );
}

export default Sidebar;
