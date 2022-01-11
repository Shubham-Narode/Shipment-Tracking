import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import "./Home.css";
import http from "./Services/httpsService";
import { useNavigate } from "react-router-dom";
import https from "./Services/geoTrackService";
import Activity from "./Activity";
import { Tabs, Tab } from "react-bootstrap";
import Map from "./Map";
import Details from "./Details"

function Home() {
  // const navigate = useNavigate();

  const [value, setValue] = useState(null);
  const [type, setType] = useState("Activity");

 

  function ClickHandler(e) {
    e.preventDefault()
    console.log(value);
    localStorage.removeItem("datas");
    localStorage.removeItem("points");
    // navigate("/activity");
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
        localStorage.setItem("points", stringPointData);
      } catch (error) {}
    }
    getTrackPoints();
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
              onChange={(e)=>setValue(e.target.value)}
              value={value}
            />
            {/* <input
              type="search"
              className="app__search"
              placeholder="Tracking Number"
              ref={textInput}
            /> */}
          </div>
          <div>
            <button
              type="search"
              className="app__trackButton"
              onClick={(e)=>ClickHandler(e)}
              // disabled={disable}
            >
              Track Shipment
            </button>
          </div>
          {/* <div className="app__shipmentID">{`Shipment ID:${value}`}</div> */}
          <div>
            <button className="app__backButton">Back</button>
          </div>
        </div>
        <div className="app__tabs">
        </div>
          <Tabs activeKey={type} onSelect={(k) => setType(k)}>
            <Tab eventKey="Activity" title="Activity">
                <Activity />
            </Tab>
            <Tab eventKey="Map" title="Map">
            {/* {(type === "Map")&&( */}
              <Map />
            {/* )} */}
            </Tab>
            <Tab eventKey="Details" title="Details">
            {/* {(type === "Details")&&( */}
              <Details />
            {/* )} */}
            </Tab>
          </Tabs>
          {/* <NavLink
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
          </NavLink> */}
      </div>
    </>
  );
}

export default Home;
