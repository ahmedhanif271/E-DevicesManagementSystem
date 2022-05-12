import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import {
  BrowserRouter as Router, Routes, Route, Link, useParams,
  useMatch
} from "react-router-dom";
import { MeterSetup } from './MeterSetup';
import { MeterList } from './MeterList';

export function MeterConfiguration() {

  return (
    <Routes >
    <Route path={`/`} element={ <MeterList />} />
    <Route path={`add/`} element={ <MeterSetup />} />
  </Routes>
  );
}
