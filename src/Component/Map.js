import React from "react";
import "./Map.css";


function Map() {

  return (
    <>
      <div className="map">
        <iframe
        frameBorder="0"
          src="./map.html"
          width="1100px"
          height="500px"
          title="map"
        ></iframe>
      </div>
    </>
  );
}
export default Map;
