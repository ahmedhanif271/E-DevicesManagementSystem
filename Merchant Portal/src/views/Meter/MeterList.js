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
import { MeterDetails } from './MeterSetup';
import { GetMeterList} from '../../api/MeterApis';
import { GetMeterListAsync, getMeterList} from '../../reducers/MeterSlice'
import { Link } from 'react-router-dom';


const columns = [
  {
    name: 'Network',
    selector: row => row.network,
  },
  {
    name: 'Entity',
    selector: row => row.entity,
  },
  {
    name: 'Serial',
    selector: row => row.serial,
  }
  
]
export function MeterList() {
const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(GetMeterListAsync({token }));
  }, []);
  const data = useSelector(getMeterList);
  console.log(data)
  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Meter List</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> Meter Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
        <Link to={"/home/meter-config/add"}><MDBBtn>Add New</MDBBtn></Link>
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
