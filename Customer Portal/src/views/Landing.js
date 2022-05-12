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

import { MeterDetail } from './Meter/MeterConfiguration';
import { DeviceDetail } from './Connected Devices/DeviceConfiguration';
import { UnitDetail } from './Unit Restriction/UnitConfiguration';
import { BillsDetail } from './Bills/BillsConfiguration';

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
            <Link to={`/home/meter-detail`} >Meter Details</Link>
            </div>
</div>
            <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/device-detail`} >Connected Devices</Link>
            </div>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/unit-config`} >Units Restriction</Link>
            </div>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/bills-config`} >Bills</Link>
            </div>
          </div>   
          
        </div>
        <div className="custom-sidebar-content">
      <div className="custom-sidebar-content-nav">

      </div>
          <Routes>
            
            
            <Route path={`meter-detail/*`} element={ <MeterDetail />} />
            <Route path={`device-detail/*`} element={ <DeviceDetail />} />
            <Route path={`unit-config/*`} element={ <UnitDetail />} />
            <Route path={`bills-config/*`} element={ <BillsDetail />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}