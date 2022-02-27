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

import { MeterSetup } from './MeterSetup';
const columns = [
  {
    name: 'Meter',
    selector: row => row.meter,
  },
  {
    name: 'Data type',
    selector: row => row.dataType,
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
    meter: 'Lovato',
    dataType:'float',
    status:'Active',
    action: <MDBBtn href='/home/meter-config/add' >Add New</MDBBtn>
  },
  {
    id: 2,
    meter: 'Schneider',
    dataType:'double float',
    status:'InActive'
  },
  {
    id: 3,
    meter: 'PEL',
    dataType:'float',
    status:'Active'
  },
  {
    id: 4,
    meter: 'IMO',
    dataType:'float',
    status:'Active'
  },
  {
    id: 5,
    meter: 'Lovato',
    dataType:'double ',
    status:'InActive'
  },
  {
    id: 6,
    meter: 'Lovato',
    dataType:'long',
    status:'Active'
  },
  {
    id: 7,
    meter: 'Iskra',
    dataType:'double',
    status:'InActive'
  },
]
export function MeterList() {

  return (
    <div className="p-4 text-start ">
  
      <MDBCard alignment='center' >
      <MDBCardHeader className="text-start"><h5> Meters List</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
          <MDBBtn href='/home/meter-config/add' >Add New</MDBBtn>
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
