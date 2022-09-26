import React, { useState, useEffect } from 'react';
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
  MDBInput,
  MDBCardHeader,
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';
import { getToken, loginAsync } from '../../reducers/AuthSlice'

import { GetAnalytics} from '../../api/AnalyticsApis';
import { GetAnalyticsAsync, getAnalytics} from '../../reducers/MeterSlice'
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'Voltage',
    selector: row => row.VOLTAGE,
  },
  {
    name: 'Current',
    selector: row => row.CURRENT,
   },
  {
    name: 'Amount',
    selector: row => row.AMOUNT,
  },
  {
    name: 'Created On',
    selector: row => row.CREATEDON,
  }
  
]

export function BillsList() {
const dispatch = useDispatch();
  const token = useSelector(getToken);
  console.log(token,"token in bill list")

  var formData = useSelector(getAnalytics);

  useEffect(() => {
    dispatch(GetAnalyticsAsync({token }));
  }, []);
  const data = useSelector(getAnalytics);
  console.log(data, "check data after token") 
  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Bill List</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> Bill List</h5></MDBCardHeader>
        <MDBRow>
          <MDBCardBody>
          <DataTable
              pagination="true"
              columns={columns}
              data={data}

            />
          </MDBCardBody>
        </MDBRow>
      </MDBCard>

    </div>
  );
}
