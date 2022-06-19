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
import { NetworkDetails } from './NetworkSetup';
import { GetNetworkList} from '../../api/NetworkApis';
import { GetNetworkListAsync, getNetworkList} from '../../reducers/NetworkSlice'
import { Link } from 'react-router-dom';


const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'IP',
    selector: row => row.ip_address,
  },
  {
    name: 'Port Number',
    selector: row => row.port,
  },
  {
    name: 'User ID',
    selector: row => row.userId,
  }
  
]
export function NetworkList() {
const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(GetNetworkListAsync({token }));
  }, []);
  const data = useSelector(getNetworkList);
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
        <MDBCardHeader className="text-start"><h5> Network Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
        <Link to={"/home/network-config/add"}><MDBBtn>Add New</MDBBtn></Link>
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
