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
  MDBInput,
  MDBCardHeader
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';

import { NetworkSetup } from './NetworkSetup';
const columns = [
  {
    name: 'Network ID',
    selector: row => row.networkId,
  },
  {
    name: 'IP address',
    selector: row => row.ipAddress,
  },
  {
    name: 'Port',
    selector: row => row.port,
  },
  {
    name: 'Actions',
    selector: row => row.action,
  },
];

const data = [
  {
    id: 1,
    networkId: '3467',
    ipAddress:'213.233.2.62',
    port:'36796',
    action: <MDBBtn href='/home/network-config/add' >Add New</MDBBtn>
  },
  {
    id: 2,
    networkId: '5902',
    ipAddress:'175.189.191.144',
    port:'44526',
  },
  {
    id: 3,
    networkId: '1111',
    ipAddress:'187.123.89.123',
    port:'36796',
  },
  {
    id: 4,
    networkId: '1902',
    ipAddress:'161.12.165.193',
    port:'44526',
  },
  {
    id: 5,
    networkId: '1555',
    ipAddress:'23.172.81.10',
    port:'36796',
  },
  {
    id: 6,
    networkId: '9000',
    ipAddress:'116.112.35.208',
    port:'44526',
  },
  {
    id: 7,
    networkId: '2341',
    ipAddress:'102.200.117.69',
    port:'36796',
  },
]
export function NetworkList() {

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Networks List</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/network-config/add' >Add New</MDBBtn>
        </div>
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
