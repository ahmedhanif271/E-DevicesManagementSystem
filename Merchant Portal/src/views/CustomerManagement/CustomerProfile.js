import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

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
import {  CustomerSubStatus, CustomerBill, CustomerSubProfile } from './CustomerProfileSubForms';
import { changeScreen, GetCustomersDetailsAsync,getCustomersDetails } from '../../reducers/CustomerProfileSlice'
import { getToken} from '../../reducers/AuthSlice'



export const CustomerProfile = (props) => {

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  let params = useParams();
  useEffect(() => {
    dispatch(GetCustomersDetailsAsync({"params":{id:params.ID}, token}))
  }, []);
  var formData = useSelector(getCustomersDetails);


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
                  src='https://mdbcdn.b-cdn.net/img/new/standard/city/047.jpg'
                  className=' rounded-circle'
                  style={{ height: "150px", width: "150px" }}
                />

<h4 className='mt-3'>{formData?.details?.username}</h4>
<p className=''>Ahmed Hanif | <MDBBadge color='success'>Bill Paid</MDBBadge> </p>
                <hr />
              </MDBCol>
              <MDBCol size="12">
                <MDBTabs fill className='mb-3'> 
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                      Overview & Status
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                      Profile
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                      Bill Status
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>

                

                <MDBTabsContent>
                  <MDBTabsPane show={fillActive === 'tab1'}><CustomerSubStatus/></MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab2'}>< CustomerSubProfile /></MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab3'}>< CustomerBill details={{}} /></MDBTabsPane>
                  
                </MDBTabsContent>
              </MDBCol>
            
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );


}
