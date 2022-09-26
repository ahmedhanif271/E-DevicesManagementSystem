import React,{ useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../../styles/App.scss"
import BarAnalytics from "./BarAnalytics";
import Moment from 'react-moment';

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
import DataTable from 'react-data-table-component'
import {Link} from 'react-router-dom';
import LineAnalytics from "./LineAnalytics";
import { getToken, loginAsync } from '../../reducers/AuthSlice'

import { GetAnalytics} from '../../api/AnalyticsApis';
import { GetAnalyticsAsync, getAnalytics} from '../../reducers/MeterSlice'



export function Dashboard() {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {
    dispatch(GetAnalyticsAsync({token }));
  }, []);

 // console.log(GetAnalytics, "checking GetAnalytics");
  

  const Data1 = useSelector(getAnalytics);
  console.log(Data1, "DATA 1")

  var valMap=Data1?Data1.map((data) => data.CURRENT):[];
  var lblMap=Data1?Data1.map((data) => data.CREATEDON):[];
  
  console.log(valMap,"ValMap and Lblmap")
  const [BillChart, setData1] = useState({
    labels: lblMap,
    
    datasets: [
      {
        label: "CURRENT",
        data:valMap ,
        backgroundColor: [
          "rgba(0,0,255)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
    
  });

  var valMap=Data1?Data1.map((data) => data.VOLTAGE):[];
  var lblMap=Data1?Data1.map((data) => data.CREATEDON):[];
 // console.log(valMap)
  const [VoltageChart, setData2] = useState({
    labels: lblMap,
    
    datasets: [
      {
        label: "VOLTAGE",
        data:valMap ,
        backgroundColor: [
          "rgba(0,0,255)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  var valMap=Data1?Data1.map((data) => data.AMOUNT):[];
  var lblMap=Data1?Data1.map((data) => data.CREATEDON):[];
  console.log(valMap)
  const [CurrentChart, setData3] = useState({
    labels: lblMap,
    
    datasets: [
      {
        label: "BILL",
        data:valMap ,
        backgroundColor: [
          "rgba(0,0,255)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  

  return (
    <div className="p-4 text-start ">
    <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <a>Home</a>
        </MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>
          <a >Dashboard Analytics</a>
          </MDBBreadcrumbItem>
          </MDBBreadcrumb>
    
    
      
   <MDBBreadcrumb>
<MDBBreadcrumbItem >
<MDBCard alignment="center">
  <h3 className="py-5 px-3">Bill Analytics</h3>

    <div className="p-4 text-start" >
      <div style={{ width: 1000 }}>
    <BarAnalytics chartData={BillChart} />    
      </div>
      </div>
</MDBCard>
      </MDBBreadcrumbItem></MDBBreadcrumb>
      
    
    <MDBBreadcrumb> 
      <MDBBreadcrumbItem>
      <MDBCard alignment="center">
        <h4 className="py-5 px-3"> Voltage Graph</h4>
        <div className="p-4 text-start">
      <div style={{ width: 1000 }}>
      <LineAnalytics chartData={VoltageChart} />
        
      </div>
      </div>
      </MDBCard>
      </MDBBreadcrumbItem>
    </MDBBreadcrumb>

<MDBBreadcrumb> 
      <MDBBreadcrumbItem>
        <MDBCard alignment="center">
        <h4 className="py-5 px-3" > Current Graph</h4>
        
      <div className="p-4 text-start">
      <div style={{ width: 1000 }}>
      <LineAnalytics chartData={CurrentChart} />
      </div>
      </div>
      </MDBCard>

    </MDBBreadcrumbItem></MDBBreadcrumb>
      
      
    </div>
  );
}

export default Dashboard;

