import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


import {
  MDBInput,
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
<p className=''>{formData.username} | <MDBBadge color='success'>Bill Paid</MDBBadge> </p>
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
                  <MDBTabsPane show={fillActive === 'tab2'}>
                  <div className="p-4 text-start w-100">

<form>
  <MDBRow>
    <MDBCol size='4'>
      <MDBInput className="mt-3" label="Username" type="text" value={formData.username} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
    </MDBCol>
    <MDBCol size='4'>
      <MDBInput className="mt-3" label="Password" type="text" value={formData.password} disabled style={{ backgroundColor: "#FFFFFF" }}
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
    <MDBCol size='4'>
      <MDBInput className="mt-3" label="Date of Birth" type="text" value={formData.dob} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
    </MDBCol>
    <MDBCol size='4'>
      <MDBInput className="mt-3" label="Gender" type="text" value={formData.gender} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
    </MDBCol>
    <MDBCol size='4'>
      <MDBInput className="mt-3" label="User Id" type="text" value={formData.userId.toString()} disabled style={{ backgroundColor: "#FFFFFF" }}
      />
    </MDBCol>
    
  </MDBRow> 
</form>


</div>
                  </MDBTabsPane>
                  <MDBTabsPane show={fillActive === 'tab3'}>

                  <div className="p-4 text-start w-100 ">

<form>
  <MDBRow >
    <MDBCol size='4' >
      <MDBInput className="mt-3 " label="Username" type="text" value={formData.username} disabled style={{ backgroundColor: "#39C0ED" }}
      />
    <MDBInput className="mt-3" label="Bill Status" type="text " value={"Paid"}  disabled style={{ backgroundColor: "#39C0ED" }}
      />
       <MDBInput className="mt-3" label="Month" type="text" value={"June"} disabled style={{ backgroundColor: "#39C0ED" }}
      />
       <MDBInput className="mt-3" label="Amount" type="text" value={"25678"} disabled style={{ backgroundColor: "#39C0ED" }}
      />
    </MDBCol>

    <MDBCol size='4' >
      <MDBInput className="mt-3 " label="Username" type="text" value={formData.username} disabled style={{ backgroundColor: "#00B74A" }}
      />
    <MDBInput className="mt-3" label="Bill Status" type="text " value={"Paid"}  disabled style={{ backgroundColor: "#00B74A" }}
      />
       <MDBInput className="mt-3" label="Month" type="text" value={"July"} disabled style={{ backgroundColor: "#00B74A" }}
      />
       <MDBInput className="mt-3" label="Amount" type="text" value={"29523"} disabled style={{ backgroundColor: "#00B74A" }}
      />
    </MDBCol>

    <MDBCol size='4'>
      <MDBInput className="mt-3 text-white " label="Username" type="text" value={formData.username} disabled style={{ backgroundColor: "#F93154" }}
      />
    <MDBInput className="mt-3 text-white" label="Bill Status" type="text " value={"Not Paid"}  disabled style={{ backgroundColor: "#F93154" }}
      />
       <MDBInput className="mt-3 text-white" label="Month" type="text" value={"August"} disabled style={{ backgroundColor: "#F93154" }}
      />
       <MDBInput className="mt-3 text-white" label="Amount" type="text" value={"26478"} disabled style={{ backgroundColor: "#F93154" }}
      />
    </MDBCol>
    </MDBRow>

    
    </form>
    </div>



                  </MDBTabsPane>
                  
                
                
                
                
                
                
                
                
                
                
                
                
                
                </MDBTabsContent>
              </MDBCol>
            
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>

      </MDBCard>

    </div>
  );


}