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

import { GetMeterList} from '../../api/MeterApis';
import { GetMeterListAsync, getMeterList, getNetworkInfo, GetNetworkInfoAsync} from '../../reducers/MeterSlice'
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'IP address',
    selector: row => row.ip_address,
   },
  {
    name: 'Port',
    selector: row => row.port,
  }
  
]

export function NetworkList() {
const dispatch = useDispatch();
  const token = useSelector(getToken);
  var formData = useSelector(getNetworkInfo);

  useEffect(() => {
    dispatch(GetNetworkInfoAsync({token }));
  }, []);
  const data = useSelector(getNetworkInfo);
  console.log(data)
  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Network List</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> Network List</h5></MDBCardHeader>
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
