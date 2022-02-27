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

import { UserSetup } from './UserSetup';
const columns = [
  {
    name: 'ID',
    selector: row => row.ID,
  },
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Role',
    selector: row => row.role,
  },
  {
    name: 'Status',
    selector: row => row.status,
  },
  {
    name: 'Actions',
    selector: row => row.action,
  },
];

const data = [
  {
    id: 1,
    ID: '4921',
    name: 'Mubeen',
    role: 'Chat',
    status:'Online',
    action: <MDBBtn href='/home/User-config/add' >Add New</MDBBtn>
  },
  {
    id: 2,
    ID: '6134',
    name: 'Salim',
    role: 'Support',
    status:'Offline'
  },
  {
    id: 3,
    ID: '892',
    name: 'Waqas',
    role: 'Agent',
    status:'Online'
  },
  {
    id: 4,
    ID: '1821',
    name: 'Laiba',
    role: 'Support',
    status:'Online'
  },
  {
    id: 5,
    ID: '6321',
    name: 'Saif',
    role: 'Support',
    status:'Offline'
  },
  {
    id: 6,
    ID: '3235',
    name: 'Samad',
    role: 'Chat',
    status:'Online'
  },
  {
    id: 7,
    ID: '7890',
    name: 'Hunzala',
    role: 'Agent',
    status:'Offline'
  },
]
export function UserList() {

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Users List</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/User-config/add' >Add New</MDBBtn>
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
