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
  MDBCardHeader,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';

import { getToken, loginAsync } from '../../reducers/AuthSlice'
import { createComplaintsAsync } from '../../reducers/MeterSlice'
import { Link } from 'react-router-dom';

export const ComplaintsSetup = (props) => {
  const token = useSelector(getToken);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleChange = event => {
    var data = formData;
    data[event.target.name] = event.target.value;
    setFormData(data);
  }
  const handleDate = event => {
    var data = formData;

    data[event.target.name] = new Date(event.target.value);
    setFormData(data);
  }

  const onSubmit = () => {

    dispatch(createComplaintsAsync({ formData, token }));

  }

  return (
    <div className="p-4 text-start w-100">
  <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a >Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href='/home/customers'>Customers</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Complaints</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Complaint Registration</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Customer Information</h5>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Meter ID" icon="envelope" type="text"  error="wrong"
                        success="right" name="meterId" value={formData.meterId} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Name" icon="envelope" type="text" error="wrong"
                        success="right" name="name" value={formData.name} onChange={handleChange} />
                    </MDBCol>

                    <MDBCol lg="4" className="py-1">
              <MDBInput label="Details" icon="envelope" group type="text" validate error="wrong"
                success="right" name="details" value={formData.details} onChange={handleChange}/>
            </MDBCol>

            <MDBCol lg="4" className="py-1">
              <MDBInput label="Phone" icon="envelope" group type="text" validate error="wrong"
                success="right" name="phone" value={formData.phone} onChange={handleChange}/>
            </MDBCol>
            
                  
  </MDBRow> 
                </div>
                <div className="text-end w-100">
                <Link to={"/home/dashboard"}> <MDBBtn color="danger" className="mx-2 my-5">Close</MDBBtn></Link><Link to={"/home/dashboard"}><MDBBtn type={"button"} className="mx-2  my-5" onClick={onSubmit}>Add</MDBBtn></Link>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}