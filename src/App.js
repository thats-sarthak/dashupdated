import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import StaffDetails from './components/StaffDetails';
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Logout from './components/Logout';
import Barchart from './components/Barchart';
import DateRange from './components/DateRange';
import { Route, Routes } from 'react-router-dom';


function App() {

  const[uniqueVisitor, setUniqueVisitor] = useState("");
  const[totalVisitor, setTotalVisitor] = useState("");
  const[pageLoadTime, setPageLoadTime] = useState("");
  const[conversionRate, setConversionRate] = useState("");
  const[avgOrderValue, setAvgOrderValue] = useState("");
  const[abaddonmentCount, setAbandonmentCount] = useState("");
  const[lifeTimeOrderValue, setLifeTimeOrderValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://socket-io-server-mc3e.onrender.com/api/v1/getAllInfo');
        const data = await response.json();
        setUniqueVisitor(data?.response[1]?.totalUniqueVisitors?.value);
        setTotalVisitor(data?.response[0]?.totalVisitors?.value);
        setPageLoadTime(data?.response[2]?.averagePageLoadTime?.value);
        setConversionRate(data?.response[3]?.conversionRate?.value);
        setAvgOrderValue(data?.response[4]?.avgOrderValue?.value);
        setAbandonmentCount(data?.response[5]?.cartAbandonmentCount?.value);
        setLifeTimeOrderValue(data?.response[6]?.lifetimeOrderValue?.value);

  

        console.log("value", uniqueVisitor )
         
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <Heading />
      <Navbar />

      {/* <DateRange /> */}

      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard uniqueVisitor = {uniqueVisitor} totalVisitor = {totalVisitor} pageLoadTime = {pageLoadTime} conversionRate = {conversionRate}  avgOrderValue = {avgOrderValue} abaddonmentCount = {abaddonmentCount}
         lifeTimeOrderValue = {lifeTimeOrderValue} />} /> */}


         <Route exact path="/dashboard" element={

          <React.Fragment>
             <DateRange />
            <Dashboard uniqueVisitor = {uniqueVisitor} totalVisitor = {totalVisitor} pageLoadTime = {pageLoadTime} conversionRate = {conversionRate}  avgOrderValue = {avgOrderValue} abaddonmentCount = {abaddonmentCount}
              lifeTimeOrderValue = {lifeTimeOrderValue} />
              <Barchart/>
          </React.Fragment>

         } />

        <Route path="/staffdetails" element={<StaffDetails />} />
        <Route path="/logout" element={<Logout />} /> 
        {/* <Route path="/Barchart" element={<Barchart />} />  */}
      </Routes>
    </div>
  );
}

export default App;
