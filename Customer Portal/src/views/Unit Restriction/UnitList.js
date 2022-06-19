import React, { useState, useEffect } from 'react';
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
  MDBBadge,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';

import DataTable from 'react-data-table-component';
import { getToken, loginAsync } from '../../reducers/AuthSlice'
import { createUnitsAlertAsync } from '../../reducers/MeterSlice'
import { Link } from 'react-router-dom';


const columns = [
  {
    name: 'ID',
    selector: row => row.ID,
  },
  {
    name: 'Meter ID',
    selector: row => row.meterID,
  },
  {
    name: 'Network ID',
    selector: row => row.networkID,
  },
  {
    name: 'Units',
    selector: row => row.units,
  },
  {
    name: 'Phone Number',
    selector: row => row.phone,
  }
  
]
export const UnitList = (props) => {
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

    dispatch(createUnitsAlertAsync({ formData, token }));

  }
  return (
    <div className="p-4 text-start ">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Unit Restriction</a>
        </MDBBreadcrumbItem>

      </MDBBreadcrumb>
      <MDBCard alignment='center' >
        <MDBCardHeader className="text-start"><h5> Units Alert</h5></MDBCardHeader>

        <MDBCardBody>
          <MDBCardText lg="4" className='text-start'>Enter the Units to create alert</MDBCardText>

        <MDBRow>
            <MDBCol lg="4" className="py-1">
            <MDBInput label="Your ID" icon="envelope" type="text"  error="wrong"
                        success="right" name="ID" value={formData.ID} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Meter ID" icon="envelope" type="text"  error="wrong"
                        success="right" name="meterID" value={formData.meterID} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Network ID" icon="envelope" type="text"  error="wrong"
                        success="right" name="networkID" value={formData.networkID} onChange={handleChange} />
                    </MDBCol>
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Add Units to alert" icon="envelope" type="text"  error="wrong"
                        success="right" name="units" value={formData.units} onChange={handleChange} />
                    </MDBCol>     
                    <MDBCol lg="4" className="py-1">
                    <MDBInput label="Phone Number" icon="envelope" type="text"  error="wrong"
                        success="right" name="phone" value={formData.phone} onChange={handleChange} />
                    </MDBCol>  
          
        </MDBRow>
        <div className="text-end w-100">
                <Link to={"/home/home"}> <MDBBtn color="danger" className="mx-2 my-5">Close</MDBBtn></Link><Link to={"/home/units"}><MDBBtn type={"button"} className="mx-2  my-5" onClick={onSubmit}>Add</MDBBtn></Link>
                </div>
        </MDBCardBody>
      </MDBCard>

    </div>
  );
}
