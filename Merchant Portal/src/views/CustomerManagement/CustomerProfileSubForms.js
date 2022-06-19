import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { GridButton1 , GridButton2 } from '../../CustomComponents/GridButton';
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
import DataTable from 'react-data-table-component';
import { getToken } from '../../reducers/AuthSlice'
import { getCustomersDetails, GetCustomerDetailsAsync, createNewProfileAsync, getCustomerList } from '../../reducers/CustomerProfileSlice'
import { Link } from 'react-router-dom';
const statusMap = { "1": "Active", "2": "Suspended", "3": "Dropped" }

const customerColumns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Units',
    selector: row => row.units,
  },
  {
    name: 'Month',
    selector: row => row.month,
  },
  {
    name: 'Amount',
    selector: row => row.amount,
  },
  {
    name: 'Status',
    selector: row => row.status,
  },
  {
    name: 'Actions',
    selector: row => row.action,
  },
];

const customerData = [
  {
    id: 1,
    name: 'Abdul Rafay',
    units: '1220',
    month: 'January',
    amount: '5000',
    status: 'Paid',
    action: <GridButton1 iconName="user-times" color="green" />
  },
  {
    id: 1,
    name: 'Abdul Rafay',
    units: '1121',
    month: 'Febuary',
    amount: '2560',
    status: 'Paid',
    action: <GridButton1 iconName="user-times" color="green" />
  },
  {
    id: 1,
    name: 'Abdul Rafay',
    units: '1880',
    month: 'March',
    amount: '9000',
    status: 'Not Paid',
    action: <GridButton1 iconName="user-times" color="red" />
  },
]
const customerInfoColumns = [
  {
    name: 'Name',
    selector: row => row.username,
  },
  {
    name: 'Password',
    selector: row => row.password,
  }, 
  {
    name: 'CNIC',
    selector: row=> row.cnic,
  }, 
  {
    name: 'Phone',
    selector: row=> row.phone,
  }, 
  {
    name: 'Date of birth',
    selector: row=> row.dob,
  }, 
  {
    name: 'Gender',
    selector: row=> row.gender,
  }, 
  {
    name: 'Address',
    selector: row=> row.address,
  },  
  {
    name: 'User Id',
    selector: row=> row.userId,
  },  

]


export const CustomerSubProfile = (props) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //navigate('/dashboard')
  
    const data = useSelector(getCustomerList);
    
  
  
  return (
    <div className="p-4 text-start w-100">

      <form>

        <div className="grey-text text-start">

          <MDBRow>
            <h5>Customer Information</h5>
            <DataTable
        pagination="true"
        columns={customerInfoColumns}
        data={data}

      />
            
 <hr />
          
          </MDBRow>
          <hr />
          

         
        </div>

      </form>
      <MDBCol size="12">
        <div className="text-end w-100">
        <Link to="/home/customers/list"><MDBBtn color="danger" className="mx-2 my-5" type={'button'}>Close</MDBBtn></Link>
        </div>
      </MDBCol>

    </div>
  );
}
export function CustomerSubStatus() {

  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => {

    setBasicModal(!basicModal)
  };

  return (
    <div className="p-4 text-start w-100">

      <form>
        <MDBRow>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Devices Connected" type="text" value={"3"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Units Consumed" type="text" value={"1729"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Amount Due" type="text" value={"5497"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Amount paid (Current Month)" type="text" value={"0"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Total Months" type="text" value={"3"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
        </MDBRow>
      </form>


    </div>
  );
}


export function CustomerBill() {

  return (
    <div className="p-4 text-start w-100">
      <div className="w-100 d-flex p-4 justify-content-end" >
        <MDBBtn href='/home/customers/add' >Add</MDBBtn>
      </div>
      <DataTable
        pagination="true"
        columns={customerColumns}
        data={customerData}

      />

    </div>
  );
}