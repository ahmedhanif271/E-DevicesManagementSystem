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
import { GetMeterListAsync, getMeterList, getMeterInfo, GetMeterInfoAsync, getMyDetails, GetMyDetailsAsync} from '../../reducers/MeterSlice'
import { Link } from 'react-router-dom';



export function DetailList() {
const dispatch = useDispatch();
  const token = useSelector(getToken);
  var formData = useSelector(getMyDetails);
  useEffect(() => {
    dispatch(GetMyDetailsAsync({token }));
  }, []);
  const data = useSelector(getMyDetails);
  console.log(data)
  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >My Details</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> My Details</h5></MDBCardHeader>
        <MDBRow>
          <MDBCardBody>
          <form>
  <MDBRow>
    <MDBCol size='4'>
      <MDBInput className="mt-3" label="Username" type="text" value={formData.username} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
      </MDBCol>
      <MDBCol size='4'>
      <MDBInput className="mt-3" label="CNIC" type="text" value={formData.cnic} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
      </MDBCol>
      <MDBCol size='4'>
      <MDBInput className="mt-3" label="Phone" type="text" value={formData.phone} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
      </MDBCol>
      <MDBCol size='4'>
      <MDBInput className="mt-3" label="Address" type="text" value={formData.address} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
      </MDBCol>
      </MDBRow>
      </form>
          </MDBCardBody>
        </MDBRow>
      </MDBCard>

    </div>
  );
}
