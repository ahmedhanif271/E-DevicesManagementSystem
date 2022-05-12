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
import { CustomerDetails } from './CustomerSetup';
import { GetCustomerList} from '../../api/CustomerProfileApis';
import { GetCustomerListAsync, getCustomerList} from '../../reducers/CustomerProfileSlice'
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'Name',
    selector: row => row.username,
  },
  {
    name: 'Password',
    selector: row => row.password,
  }, 
  {
    name: 'CNIC',
    selector: row => row.cnic,
  }, 
  {
    //row.action
    name: 'Actions',
    selector: row => <Link to={"/home/customers/details/" + row.id}><MDBBtn color='success' size='sm'>Details</MDBBtn> </Link>,
  },
  
  
]
export function CustomerList() {
const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(GetCustomerListAsync({token }));
  }, []);
  const data = useSelector(getCustomerList);
  console.log(data)
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
        <Link to={"/home/customers/add"}><MDBBtn href='/home/customers/add' >Add New</MDBBtn></Link>
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
