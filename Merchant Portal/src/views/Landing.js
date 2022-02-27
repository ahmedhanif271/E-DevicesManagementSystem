import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import logo from '../Assets/logo3.png';
import '../styles/App.scss';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import { Login } from './Authentication/Login'

import { CustomerManagement } from './CustomerManagement/CustomerManagement'
import { MeterConfiguration } from './Meter/MeterConfiguration';
import { NetworkConfiguration } from './Network/NetworkConfiguration';
import { UserConfiguration } from './UserConfiguration/UserConfiguration';
import {
  BrowserRouter as Router, Routes, Route, Link, useParams,
  useMatch
} from "react-router-dom";

export function Landing() {

  return (
    <div style={{ height: "100%" }} >
      <div className="w-100 d-flex" style={{ height: "100%",backgroundColor:"#E4E8F1" }}>
        <div className="custom-sidebar">
          <div className="custom-sidebar-logo"  >
          <img src={logo} style={{ width: "140px", height: "69px"}}/>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              Dashboard
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
            <Link to={`/home/customers`} >Customer Management</Link>
            </div>

            <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/meter-config`} >Meter type</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/network-config`} >Network</Link>
            </div>
          </div>
          </div>
          
          
          
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
            <Link to={`/home/user-config`} >  User configurations</Link>
            </div>
            <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              Reports
            </div>
          </div>
          </div>
          
        </div>
        <div className="custom-sidebar-content">
      <div className="custom-sidebar-content-nav">

      </div>
          <Routes>
            
            <Route path={`customers/*`} element={ <CustomerManagement />} />
            <Route path={`meter-config/*`} element={ <MeterConfiguration />} />
            <Route path={`network-config/*`} element={ <NetworkConfiguration />} />
            <Route path={`user-config/*`} element={ <UserConfiguration />} />

          </Routes>

        </div>
      </div>
    </div>
  );
}

