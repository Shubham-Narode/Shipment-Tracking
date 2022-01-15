import React, { useEffect } from "react";
import "./Activity.css";
import Milestones from "./React-Table/Milestones";
import {COLUMNS} from "../Columns/Column"

function Activity() {

  const milestonesPoints = JSON.parse(localStorage.getItem("milestonePoints"))
  console.log(milestonesPoints)

  useEffect(() => {


    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");

    let statusData = JSON.parse(localStorage.getItem("datas"))

    console.log(statusData)
    

    if(statusData !== null){
      if((statusData.data.tsp1_loc === null)&&(statusData.data.tsp2_loc === null)&&(statusData.data.tsp3_loc === null)&&(statusData.data.tsp4_loc === null)){

        
        if(statusData.data.status_verbose === "unknown"){
          return;
        }
        if(statusData.data.status_verbose === "waiting for pickup"){
          let current = 2
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("noTSP");
            progressCheck[i - 1].classList.add("noTSP");
            progressText[i - 1].classList.add("noTSP");
          }
        }
        if(statusData.data.status_verbose === "land transport to POL"){
          let current = 3
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("noTSP");
            progressCheck[i - 1].classList.add("noTSP");
            progressText[i - 1].classList.add("noTSP");
          }
        }
        if((statusData.data.status_verbose === "in POL terminal")||(statusData.data.status_verbose === "waiting for departure from POL")){
          let current = 4
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("noTSP");
            progressCheck[i - 1].classList.add("noTSP");
            progressText[i - 1].classList.add("noTSP");
          }
        }
        if(statusData.data.status_verbose === "ocean transport from POL"){
          let current = 5
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("noTSP");
            progressCheck[i - 1].classList.add("noTSP");
            progressText[i - 1].classList.add("noTSP");
          }
        }
        if(statusData.data.status_verbose === "ocean transport to POD"){
          let current = 6
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("noTSP");
            progressCheck[i - 1].classList.add("noTSP");
            progressText[i - 1].classList.add("noTSP");
          }
        }
        if((statusData.data.status_verbose === "waiting for discharge at POD")||(statusData.data.status_verbose === "in POD terminal")){
          let current = 7
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("noTSP");
            progressCheck[i - 1].classList.add("noTSP");
            progressText[i - 1].classList.add("noTSP");
          }
        }
        if(statusData.data.status_verbose === "land transport to Place of Delivery"){
          let current = 8      
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("noTSP");
            progressCheck[i - 1].classList.add("noTSP");
            progressText[i - 1].classList.add("noTSP");
          }
        }
        if((statusData.data.status_verbose === "delivered; returning container")||(statusData.data.status_verbose === "completed")){
          let current = 9
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("noTSP");
            progressCheck[i - 1].classList.add("noTSP");
            progressText[i - 1].classList.add("noTSP");
            console.log(i)
          }
        }
      }
    }

    if(statusData !== null){
      if((statusData.data.tsp1_loc !== null)&&(statusData.data.tsp2_loc === null)&&(statusData.data.tsp3_loc === null)&&(statusData.data.tsp4_loc === null)){

        
        if(statusData.data.status_verbose === "unknown"){
          return;
        }
        if(statusData.data.status_verbose === "waiting for pickup"){
          let current = 2
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "land transport to POL"){
          let current = 3
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if((statusData.data.status_verbose === "in POL terminal")||(statusData.data.status_verbose === "waiting for departure from POL")){
          let current = 4
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "ocean transport from POL"){
          let current = 5
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "in transshipment"){
          let current = 6
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "ocean transport to POD"){
          let current = 7
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if((statusData.data.status_verbose === "waiting for discharge at POD")||(statusData.data.status_verbose === "in POD terminal")){
          let current = 8
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "land transport to Place of Delivery"){
          let current = 9       
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if((statusData.data.status_verbose === "delivered; returning container")||(statusData.data.status_verbose === "completed")){
          let current = 10
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
            console.log(i)
          }
        }
      }
    }

    if(statusData !== null){
      if((statusData.data.tsp1_loc !== null)&&(statusData.data.tsp2_loc !== null)&&(statusData.data.tsp3_loc === null)&&(statusData.data.tsp4_loc === null)){

        
        if(statusData.data.status_verbose === "unknown"){
          return;
        }
        if(statusData.data.status_verbose === "waiting for pickup"){
          let current = 2
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "land transport to POL"){
          let current = 3
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if((statusData.data.status_verbose === "in POL terminal")||(statusData.data.status_verbose === "waiting for departure from POL")){
          let current = 4
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "ocean transport from POL"){
          let current = 5
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "in transshipment"){
          let current = 6
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "in transshipment"){
          let current = 7
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "ocean transport to POD"){
          let current = 8
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if((statusData.data.status_verbose === "waiting for discharge at POD")||(statusData.data.status_verbose === "in POD terminal")){
          let current = 9
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if(statusData.data.status_verbose === "land transport to Place of Delivery"){
          let current = 10       
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
          }
        }
        if((statusData.data.status_verbose === "delivered; returning container")||(statusData.data.status_verbose === "completed")){
          let current = 11
          for (let i = 1; i < current; i++) {
            bullet[i - 1].classList.add("actives");
            progressCheck[i - 1].classList.add("actives");
            progressText[i - 1].classList.add("actives");
            console.log(i)
          }
        }
      }
    }

  },[milestonesPoints]);
  
  let j = 1;

  function TSP1Loc (){
    if(milestonesPoints !== null){
      if (milestonesPoints.data.tsp1_loc !== null) {
        return true
      }
      return false
    }
  }
  function TSP2Loc (){
    if(milestonesPoints !== null){
      if (milestonesPoints.data.tsp2_loc !== null) {
        return true
      }
      return false
    }
  }
  function TSP3Loc (){
    if(milestonesPoints !== null){
      if (milestonesPoints.data.tsp3_loc !== null) {
        return true
      }
      return false
    }
  }
  function TSP4Loc (){
    if(milestonesPoints !== null){
      if (milestonesPoints.data.tsp4_loc !== null) {
        return true
      }
      return false
    }
  }
  return (
    <>
      <div className="activity__container">
        <div className="container">
          <div className="progress-bar">
            <div className="step">
              <div className="bullet">
                <span className="first">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Origin Location</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="second">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>In Transit</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="third">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Loading</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="fourth">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Transport from POL</p>
            </div>
            {TSP1Loc() && <div className="step">
              <div className="bullet">
                <span className="fifth">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Exchanging 1</p>
            </div>}
            {TSP2Loc() && <div className="step">
              <div className="bullet">
                <span className="fifth">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Exchanging 2</p>
            </div>}
            {TSP3Loc() && <div className="step">
              <div className="bullet">
                <span className="fifth">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Exchanging 3</p>
            </div>}
            {TSP4Loc() && <div className="step">
              <div className="bullet">
                <span className="fifth">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Exchanging 4</p>
            </div>}
            <div className="step">
              <div className="bullet">
                <span className="sixth">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Transport to POD</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="seventh">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Unloading</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="eighth">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Out for Delivery</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="ninth">{j++}</span>
                {console.log(j)}
              </div>
              <div className="check fas fa-check"></div>
              <p>Delivered</p>
            </div>
          </div>
        </div>
        <Milestones />
      </div>
    </>
  );
}
export default Activity;
