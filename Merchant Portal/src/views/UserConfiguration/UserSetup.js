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
import { createNewUserAsync } from '../../reducers/UserSlice'
import { Link } from 'react-router-dom';

export const UserSetup = (props) => {
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

    dispatch(createNewUserAsync({ formData, token }));

  }

  return (
    <div className="p-4 text-start w-100">
  <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a >Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href='/home/user-config'>User</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Setup Users</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> User Registration</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                  <MDBRow>
                    <h5>User Information</h5>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Name" icon="envelope" type="text" error="wrong"
                        success="right" name="name" value={formData.name} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Role" icon="envelope" type="text" error="wrong"
                        success="right" name="role" value={formData.role} onChange={handleChange} />
                    </MDBCol>

                   {/* <MDBCol lg="4" className="py-1">
                      <MDBInput label="CNIC" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                  
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Phone" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Meter ID" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Meter Type" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="Ip address" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="Address" icon="envelope" type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Select Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Others</option>
                      </select>
                    </MDBCol>
                    
                   
                  </MDBRow>
                  <hr />                
                  <hr />
                  <MDBRow>
                    <h5>Documents</h5>
                    <MDBCol lg="4" className="py-1">
                      Customer picture: <input type="file" />
                    </MDBCol>
              
                    <MDBCol lg="4" className="py-1">
                     Customer CNIC: <input type="file" />
  </MDBCol>*/}
                  
  </MDBRow> 
                </div>
                <div className="text-end w-100">
                <Link to={"/home/user-config"}> <MDBBtn color="danger" className="mx-2 my-5">Close</MDBBtn></Link><Link to={"/home/user-config"}><MDBBtn type={"button"} className="mx-2  my-5" onClick={onSubmit}>Add</MDBBtn></Link>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}