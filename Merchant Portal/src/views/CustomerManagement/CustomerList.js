import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GridButton1, GridButton2 } from '../../CustomComponents/GridButton';

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


const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Devices',
    selector: row => row.deviceCount,
  },
  {
    name: 'Status',
    selector: row => row.status,
  },
  {
    name: 'Payment Status',
    selector: row => row.paymentStatus,
  },
  {
    name: 'Actions',
    selector: row => row.action,
  },
];

const data = [
  {
    id: 1,
    name: 'Abdul Rafay',
    deviceCount: '3',
    status: 'Active',
    paymentStatus: <MDBBadge className='mx-2' color='danger'>
      Not Paid
    </MDBBadge>,
    action: <GridButton1 href="/home/customers/profile/123" iconName="edit" color="green" />
  },
  {
    id: 2,
    name: 'Ahmed Hanif',
    deviceCount: '11',
    status: 'Active',
    paymentStatus: <MDBBadge className='mx-2' color='success'>
      Paid
    </MDBBadge>,
    action: <GridButton2 href="/home/customers/profile/124" iconName="edit" color="green" />
  }
]
export function CustomerList() {

  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Customers</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> Customer Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/customers/add' >Add New</MDBBtn>
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
