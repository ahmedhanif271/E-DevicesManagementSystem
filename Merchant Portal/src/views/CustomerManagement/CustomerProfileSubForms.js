import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

const customerData1 = [
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
    id: 2,
    name: 'Abdul Rafay',
    units: '1121',
    month: 'Febuary',
    amount: '2560',
    status: 'Paid',
    action: <GridButton1 iconName="user-times" color="green" />
  },
  {
    id: 3,
    name: 'Abdul Rafay',
    units: '1880',
    month: 'March',
    amount: '9000',
    status: 'Not Paid',
    action: <GridButton1 iconName="user-times" color="red" />
  },
]

const customerData2 = [
  {
    id: 1,
    name: 'Ahmed Hanif',
    units: '12220',
    month: 'January',
    amount: '50400',
    status: 'Paid',
    action: <GridButton2 iconName="user-times" color="green" />
  },
  {
    id: 2,
    name: 'Ahmed Hanif',
    units: '1521',
    month: 'Febuary',
    amount: '8360',
    status: 'Paid',
    action: <GridButton2 iconName="user-times" color="green" />
  },
  {
    id: 3,
    name: 'Ahmed Hanif',
    units: '180',
    month: 'March',
    amount: '1250',
    status: 'Paid',
    action: <GridButton2 iconName="user-times" color="green" />
  },
]

export function CustomerSubProfile() {

  return (
    <div className="p-4 text-start w-100">

      <form>

        <div className="grey-text text-start">

          <MDBRow>
            <h5>Customer Information</h5>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Name" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="CNIC" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>

            <MDBCol lg="4" className="py-1">
              <MDBInput label="Phone" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Email" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Whatsapp" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">

              <MDBInput label="Date of Birth" icon="envelope" type="date" defaultValue={new Date().toString()} value={new Date().toString()} error="wrong"
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
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Care of" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>

          </MDBRow>
          <hr />
          <MDBRow className="mt-3">
            <h5>Basic Information</h5>

            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select City</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select Region</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select Disctrict</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <select className="form-select">
                <option>Select Tehsil</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Town/Village" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="Zone/Circle" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>
            <MDBCol lg="4" className="py-1">
              <MDBInput label="UC" icon="envelope" group type="text" validate error="wrong"
                success="right" />
            </MDBCol>

          </MDBRow>

          <hr />
          <MDBRow>
            <h5>Documents</h5>
            <MDBCol lg="4" className="py-1">
              Customer picture: <input type="file" />
            </MDBCol>

            <MDBCol lg="4" className="py-1">
              Customer CNIC: <input type="file" />
            </MDBCol>

          </MDBRow>
        </div>

      </form>


    </div>
  );
}
export function CustomerSubStatus1() {

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



export function CustomerSubStatus2() {

  return (
    <div className="p-4 text-start w-100">

      <form>
        <MDBRow>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Devices Connected" type="text" value={"11"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Units Consumed" type="text" value={"1599"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Amount Due" type="text" value={"0"} disabled style={{ backgroundColor: "#FFFFFF" }}
            />
          </MDBCol>
          <MDBCol size='4'>
            <MDBInput className="mt-3" label="Amount paid (Current Month)" type="text" value={"1250"} disabled style={{ backgroundColor: "#FFFFFF" }}
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

export function CustomerBill1() {

  return (
    <div className="p-4 text-start w-100">
      <div className="w-100 d-flex p-4 justify-content-end" >
        <MDBBtn href='/home/customers/add' >Add</MDBBtn>
      </div>
      <DataTable
        pagination="true"
        columns={customerColumns}
        data={customerData1}

      />

    </div>
  );
}

export function CustomerBill2() {

  return (
    <div className="p-4 text-start w-100">
      <div className="w-100 d-flex p-4 justify-content-end" >
        <MDBBtn href='/home/customers/add' >Add</MDBBtn>
      </div>
      <DataTable
        pagination="true"
        columns={customerColumns}
        data={customerData2}

      />

    </div>
  );
}