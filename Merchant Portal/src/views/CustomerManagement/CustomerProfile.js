import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Customer1 from '../../Assets/customer-1.jpg';
import Customer2 from '../../Assets/customer-2.jpg';

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
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCardHeader,
  MDBBadge,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem

} from 'mdb-react-ui-kit';
import { CustomerSubProfile, CustomerBill1, CustomerBill2, CustomerSubStatus1, CustomerSubStatus2 } from './CustomerProfileSubForms';


export function CustomerProfile1() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  return (
    <div className="p-4 text-start w-100">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a >Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href='/home/customers'>Customers</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Profile</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Customer profile</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow >
              <MDBCol size="12">

                <img
                  src= {Customer1}
                  className=' rounded-circle'
                  style={{ height: "150px", width: "150px" }}
                />

                <h4 className='mt-3'>Abdul Rafay</h4>
                <p className=''>3 Devices connected | <MDBBadge color='danger'>Not Paid</MDBBadge> </p>
                <hr />
              </MDBCol>
              <MDBCol size="12">
                <MDBTabs fill className='mb-3'>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      Status
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink>
                      Profile
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                      Bill
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
                      Poll logs
                    </MDBTabsLink>
                  </MDBTabsItem>

                </MDBTabs>

                <MDBTabsContent>
                  <MDBTabsPane show={fillActive === 'tab1'}><CustomerSubStatus1/></MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab2'}><CustomerSubProfile /></MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab3'}>< CustomerBill1 /></MDBTabsPane>
                </MDBTabsContent>
              </MDBCol>
              <MDBCol size="12">
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/customers">Close</MDBBtn><MDBBtn className="mx-2  my-5">Save</MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}


export function CustomerProfile2() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };
  return (
    <div className="p-4 text-start w-100">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a >Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem>
          <a href='/home/customers'>Customers</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Profile</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBCard alignment='center' >

        <MDBCardHeader className="text-start"><h5 style={{ marginBottom: 0 }}> Customer profile</h5></MDBCardHeader>
        <MDBCardBody>
          <MDBContainer>
            <MDBRow >
              <MDBCol size="12">

                <img
                  src={Customer2}
                  className=' rounded-circle'
                  style={{ height: "150px", width: "150px" }}
                />

                <h4 className='mt-3'>Ahmed</h4>
                <p className=''>11 Devices connected | <MDBBadge color='success'>Paid</MDBBadge> </p>
                <hr />
              </MDBCol>
              <MDBCol size="12">
                <MDBTabs fill className='mb-3'>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      Status
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink >
                      Profile
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                      Bill
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
                      Poll logs
                    </MDBTabsLink>
                  </MDBTabsItem>

                </MDBTabs>

                <MDBTabsContent>
                  <MDBTabsPane show={fillActive === 'tab1'}><CustomerSubStatus2/></MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab2'}><CustomerSubProfile /></MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab3'}>< CustomerBill2 /></MDBTabsPane>
                </MDBTabsContent>
              </MDBCol>
              <MDBCol size="12">
                <div className="text-end w-100">
                  <MDBBtn color="danger" className="mx-2 my-5" href="/home/customers">Close</MDBBtn><MDBBtn className="mx-2  my-5">Save</MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );
}