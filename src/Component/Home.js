import React, {  useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import http from "./Services/httpsService";
import { useNavigate } from "react-router-dom";
import https from "./Services/geoTrackService";
import HTTP from "./Services/mileStonesService";
// import { Tabs, Tab } from "react-bootstrap";



function Home() {

  const navigate = useNavigate()

  const [value, setValue] = useState("");

  function changeHandler(e){
   setValue(e.target.value)
  }
  

  useEffect(()=>{
    const values = JSON.parse(localStorage.getItem("keepValue"))
    if(value === ""){
      setValue((pre)=> ({...pre, ...values}))
    }
  },[])


  useEffect(()=>{
    localStorage.setItem("keepValue", JSON.stringify(value))
  },[value])

  function ClickHandler(e) {
    e.preventDefault();
    console.log(value);
    navigate(`/`)
    localStorage.removeItem("datas");
    localStorage.removeItem("trackPoints");
  
    async function getData() {
      try {
        const receiveddata = await http.get(
          `/containertracking/v2/shipments/${value}/`
        );
        const stringData = JSON.stringify(receiveddata);
        localStorage.setItem("datas", stringData);
      } catch (error) {}
    }
    getData();

    async function getTrackPoints() {
      try {
        const receivedPoints = await https.get(
          `/containertracking/v2/shipments/${value}/geotrack/`
        );
        const stringPointData = JSON.stringify(receivedPoints);
        localStorage.setItem("trackPoints", stringPointData);
      } catch (error) {}
    }
    getTrackPoints();

    async function getMilestonesData() {
      try {
        const receivedPoints = await HTTP.get(
          `/containertracking/v2/shipments/${value}/`
        );
        const stringPointData = JSON.stringify(receivedPoints);
        localStorage.setItem("milestonePoints", stringPointData);
      } catch (error) {}
    }
    getMilestonesData();
  }

  function backClickHandler (){
    navigate(-1)
  }


  return (
    <>
      <div className="app__container">
        <div className="app__header">
          <div>
            <input
              type="number"
              className="app__search"
              placeholder="Tracking Number"
              onChange={changeHandler}
              value={value}
            />
          </div>
          <div>
            <button
              type="search"
              className="app__trackButton"
              onClick={(e) => ClickHandler(e)}
            >
              Track Shipment
            </button>
          </div>
          <div>
            <button className="app__backButton" onClick={backClickHandler}>Back</button>
          </div>
        </div>
        <div className="app__tabs">
          {/* <Tabs activeKey={type} onSelect={(k) => setType(k)}>
            <Tab eventKey="Activity" title="Activity">
            {type === "Activity" && <Activity />}
            </Tab>
            <Tab eventKey="Map" title="Map">
            {type === "Map" && <Map />}
            </Tab>
            <Tab eventKey="Details" title="Details">
            {type === "Details" && <Details />}
            </Tab>
          </Tabs> */}
        
          <NavLink
            to="/activity"
            className="app__activityTab"
            activeClassName="active"
            >
            <div>Activity</div>
          </NavLink>
          <NavLink to="/map" className="app__mapTab">
            <div>Map</div>
          </NavLink>
          <NavLink to="/details" className="app__detailsTab">
            <div>Details</div>
          </NavLink>
            </div>
      </div>
    </>
  );
}

export default Home;
