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
import { UserDetails } from './UserSetup';
import { GetUserList} from '../../api/UserApis';
import { GetUserListAsync, getUserList} from '../../reducers/UserSlice'
import { Link } from 'react-router-dom';


const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Role',
    selector: row => row.role,
  }
  
]
export function UserList() {
const dispatch = useDispatch();
  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(GetUserListAsync({token }));
  }, []);
  const data = useSelector(getUserList);
  console.log(data)
  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Users List</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> User Management</h5></MDBCardHeader>
        <div className="w-100 d-flex p-4 justify-content-end" >
        <Link to={"/home/user-config/add"}><MDBBtn>Add New</MDBBtn></Link>
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
