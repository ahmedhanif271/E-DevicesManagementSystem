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



export function UserSetup() {

  return (
    <div className="p-4 text-start w-100">

      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginLeft: 315 }}> Add User profile</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>

              <form>

                <div className="grey-text text-start">

                <MDBRow>
                    <h5>User Details</h5>
                    <MDBCol lg="4" className="py-1">
                      <MDBInput label="User ID" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="User Name" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">others</option>
                      </select>
                    </MDBCol>

                    <MDBCol lg="4" className="py-1">
                      <select className="form-select">
                        <option>Role</option>
                        <option value="1">Agent</option>
                        <option value="2">Support</option>
                        <option value="3">Chat</option>
                      </select>
                    </MDBCol>

                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="CNIC" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>     
                    <MDBCol lg="4" className="py-1">

                      <MDBInput label="Phone Number" icon="envelope" group type="text" validate error="wrong"
                        success="right" />
                    </MDBCol>         
                   
                  </MDBRow>
                  <hr />
                  
                  
                  
                  
                 
                  
                  
                  <hr />
                  
                  <hr />
                </div>
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/User-config">Close</MDBBtn><MDBBtn className="mx-2  my-5">Add</MDBBtn>
                </div>
              </form>

            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}
