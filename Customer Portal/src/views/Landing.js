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

import Dashboard  from './Dashboard/Dashboard'
import { MeterDetail } from './Meter/MeterConfiguration';
import { NetworkList } from './Network/NetworkList';
import { UnitDetail } from './Unit Restriction/UnitConfiguration';
import { BillsDetail } from './Bills/BillsConfiguration';
import { MyDetail } from './MyDetail/DetailConfiguration';
import { ComplaintsDetail } from './Complaints/ComplaintsConfiguration';

import {
  BrowserRouter as Router, Routes, Route, Link, useParams,
  useMatch
} from "react-router-dom";
import { ComplaintsSetup } from './Complaints/ComplaintsSetup';

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
              <Link to={`/home/dashboard`}>Dashboard</Link>
            </div>
          </div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
            <Link to={`/home/my-detail`} >My Details</Link>
            </div>
</div>
          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
            <Link to={`/home/meter-detail`} >Meter Details</Link>
            </div>
</div>
            <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/network-detail`} >Network list</Link>
            </div>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/unit-config`} >Units Alert</Link>
            </div>
          </div>

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/bills-config`} >Bills</Link>
            </div>
          </div>  

          <div className="custom-sidebar-menu-item">
            <div className="custom-sidebar-menu-item-inner">
              <Link to={`/home/complaints`} >Complaints</Link>
            </div>
          </div>    
          
        </div>
        <div className="custom-sidebar-content">
      <div className="custom-sidebar-content-nav">

      </div>
          <Routes>
            
          <Route path={`dashboard/*`} element={ <Dashboard />} />
            <Route path={`my-detail/*`} element={ <MyDetail />} />
            <Route path={`meter-detail/*`} element={ <MeterDetail />} />
            <Route path={`network-detail/*`} element={ <NetworkList />} />
            <Route path={`unit-config/*`} element={ <UnitDetail />} />
            <Route path={`bills-config/*`} element={ <BillsDetail />} />
            <Route path={`complaints/*`} element={ <ComplaintsSetup />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}