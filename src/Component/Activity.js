import React, { useEffect } from "react";
import "./Activity.css";
import Milestones from "./React-Table/Milestones";

function Activity() {

  useEffect(() => {
    // const first = document.querySelector(".first");
    // const second = document.querySelector(".second");
    // const third = document.querySelector(".third");
    // const fourth = document.querySelector(".fourth");
    // const fifth = document.querySelector(".fifth");
    // const sixth = document.querySelector(".sixth");
    // const seventh = document.querySelector(".seventh");
    // const eighth = document.querySelector(".eighth");
    // const ninth = document.querySelector(".ninth");

    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");

    // first.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // });

    let statusData = JSON.parse(localStorage.getItem("datas"))
    // console.log(statusData.data.status_verbose)
    if(statusData !== null){

      if(statusData.data.status_verbose === "unknown"){
        return;
      }
      if(statusData.data.status_verbose === "waiting for pickup"){
        let current = 2
        for (let i = 1; i = current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
      if(statusData.data.status_verbose === "land transport to POL"){
        let current = 3
        for (let i = 1; i < current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
      if((statusData.data.status_verbose === "in POL terminal")||(statusData.data.status_verbose === "waiting for departure from POL")){
        let current = 4
        for (let i = 1; i < current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
      if(statusData.data.status_verbose === "ocean transport from POL"){
        let current = 5
        for (let i = 1; i < current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
      if(statusData.data.status_verbose === "in transshipment"){
        let current = 6
        for (let i = 1; i < current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
      if(statusData.data.status_verbose === "ocean transport to POD"){
        let current = 7
        for (let i = 1; i < current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
      if((statusData.data.status_verbose === "waiting for discharge at POD")||(statusData.data.status_verbose === "in POD terminal")){
        let current = 8
        for (let i = 1; i < current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
      if(statusData.data.status_verbose === "land transport to Place of Delivery"){
        let current = 9
        for (let i = 1; i < current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
      if((statusData.data.status_verbose === "delivered; returning container")||(statusData.data.status_verbose === "completed")){
        let current = 10
        console.log(current)
        for (let i = 1; i < current; i++) {
          bullet[i - 1].classList.add("actives");
          progressCheck[i - 1].classList.add("actives");
          progressText[i - 1].classList.add("actives");
          console.log(i)
        }
      }
    }






    // if(statusData.data.status_verbose === "land transport to Place of Delivery"){
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // }
    // third.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // });
    // fourth.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // });
    // fifth.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // });
    // sixth.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // });
    // seventh.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // });
    // eighth.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // });
    // ninth.addEventListener("click", function (event) {
    //   event.preventDefault();
    //   bullet[current - 1].classList.add("actives");
    //   progressCheck[current - 1].classList.add("actives");
    //   progressText[current - 1].classList.add("actives");
    //   current += 1;
    // });
  });

  return (
    <>
      <div className="activity__container">
        <div className="container">
          <div className="progress-bar">
            <div className="step">
              <div className="bullet">
                <span className="first">1</span>
              </div>
              <div className="check fas fa-check"></div>
              <p>Origin Location</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="second">2</span>
              </div>
              <div className="check fas fa-check"></div>
              <p>In Transit</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="third">3</span>
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Loading</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="fourth">4</span>
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Transport from POL</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="fifth">5</span>
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Exchanging</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="sixth">6</span>
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Transport to POD</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="seventh">7</span>
              </div>
              <div className="check fas fa-check"></div>
              <p>Shipment Unloading</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="eighth">8</span>
              </div>
              <div className="check fas fa-check"></div>
              <p>Out for Delivery</p>
            </div>
            <div className="step">
              <div className="bullet">
                <span className="ninth">9</span>
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
