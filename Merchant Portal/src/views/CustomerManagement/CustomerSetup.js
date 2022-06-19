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
import { createNewProfileAsync } from '../../reducers/CustomerProfileSlice'
import { Link } from 'react-router-dom';

export const CustomerSetup = (props) => {
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

    dispatch(createNewProfileAsync({ formData, token }));

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
        <MDBBreadcrumbItem active>Setup Profile</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Customer Registration</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>Customer Information</h5>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Name" icon="envelope" type="text"  error="wrong"
                        success="right" name="username" value={formData.username} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Password" icon="envelope" type="text" error="wrong"
                        success="right" name="password" value={formData.password} onChange={handleChange} />
                    </MDBCol>

                    <MDBCol lg="4" className="py-1">
              <MDBInput label="CNIC" icon="envelope" group type="text" validate error="wrong"
                success="right" name="cnic" value={formData.cnic} onChange={handleChange}/>
            </MDBCol>

            <MDBCol lg="4" className="py-1">
              <MDBInput label="Phone" icon="envelope" group type="text" validate error="wrong"
                success="right" name="phone" value={formData.phone} onChange={handleChange}/>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Address" icon="envelope" group type="text" validate error="wrong"
                success="right" name="address"  value={formData.address} onChange={handleChange}/>
            </MDBCol>
      
            <MDBCol lg="4" className="py-1">

            <MDBInput type="date" error="wrong"
                        success="right" name="dob" value={formData.dob} onChange={handleChange} />

            </MDBCol>
            <MDBCol lg="4" className="py-1">
            <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} >
                <option>Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Others</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="User ID" icon="envelope" group type="text" validate error="wrong"
                success="right" name="userId" value={formData.userId} onChange={handleChange}/>
            </MDBCol>
                  
  </MDBRow> 
                </div>
                <div className="text-end w-100">
                <Link to={"/home/customers"}> <MDBBtn color="danger" className="mx-2 my-5">Close</MDBBtn></Link><Link to={"/home/customers"}><MDBBtn type={"button"} className="mx-2  my-5" onClick={onSubmit}>Add</MDBBtn></Link>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}