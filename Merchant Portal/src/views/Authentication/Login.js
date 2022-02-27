import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import background from '../../Assets/background.png';
import bg from '../../Assets/background.png';

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
  MDBInput
} from 'mdb-react-ui-kit';

export function Login() {

  return (
    <div>

      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse w-100' id='navbarExample01' >
            <MDBNavbarNav left className='mb-2 mb-lg-0'>
              <MDBNavbarItem >
                <MDBNavbarLink href='#'>
                  Admin Portal 
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
            <MDBNavbarNav right className='mb-2 mb-lg-0 text=right d-flex justify-content-end' >


              <MDBNavbarLink href='#'>
                E-Devices Management System
              </MDBNavbarLink>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
      <div
        className='p-5 text-center bg-image'
        style={{ background: `url(${bg})`, height: "88vh", backgroundSize: 'cover'}}
      >
          
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>

            <MDBCard style={{ minWidth: '25rem' }} >
              <MDBCardBody>
                <MDBCardTitle>Management Login</MDBCardTitle>
                <MDBInput label="Username" className="mt-5 mb-2" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Password" className="mb-5 mb-2" icon="envelope" group type="password" validate error="wrong"
                  success="right" />


                <MDBBtn  href="/home">Login</MDBBtn>
              </MDBCardBody>
            </MDBCard>

          </div>
        </div>
      </div>
      {/* <MDBContainer>
        <MDBRow>
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </MDBCardText>
              <MDBBtn>Button</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
    </MDBContainer>*/}
      <MDBFooter backgroundColor='light' className='text-center text-lg-left'>


        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='https://mdbootstrap.com/'>
            Szabist Karachi. Ahmed Hanif & Syed Abdul Rafay 
          </a>
        </div>
      </MDBFooter>

    </div>
  );
}
