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
import { GetMeterListAsync, getMeterList, getMeterInfo, GetMeterInfoAsync} from '../../reducers/MeterSlice'
import { Link } from 'react-router-dom';



export function MeterList() {
const dispatch = useDispatch();
  const token = useSelector(getToken);
  var formData = useSelector(getMeterInfo);
  useEffect(() => {
    dispatch(GetMeterInfoAsync({token }));
  }, []);
  const data = useSelector(getMeterInfo);
  console.log(data)
  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Meter Details</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> Meter Details</h5></MDBCardHeader>
        <MDBRow>
          <MDBCardBody>
          <form>
  <MDBRow>
    <MDBCol size='4'>
      <MDBInput className="mt-3" label="Network" type="text" value={formData.network} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
      </MDBCol>
      <MDBCol size='4'>
      <MDBInput className="mt-3" label="entity" type="text" value={formData.entity} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
      </MDBCol>
      <MDBCol size='4'>
      <MDBInput className="mt-3" label="serial" type="text" value={formData.serial} disabled style={{ backgroundColor: "#FFFFFF" }}
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
