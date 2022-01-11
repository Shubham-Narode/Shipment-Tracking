import React from "react";
import GoogleMapReact from "google-map-react";
import jsonData from "../Data.json";
import {Marker} from "./Marker"

function MapData() {


  // const apiIsLoaded = (map, maps) => {
  //   const directionsService = new maps.DirectionsService();
  //   const directionsDisplay = new maps.DirectionsRenderer();
  //   // const vehicleType = new maps.VehicleType();
  //   directionsService.route(
  //     {
  //       //   origin: 'Thoothukudi, Thoothukkudi, India',
  //       //   destination: 'Piña MZ3 LT8, Ampliacion Lopez Portillo, 13400 Ciudad de México, CDMX, Mexico',
  //       origin: { lat: 8.8, lng: 78.16667 },
  //       destination: { lat: 6.95, lng: 79.85 },
  //       travelMode:"DRIVING",
  //       avoidHighways: true,
  //       avoidTolls: true,
  //       avoidFerries: true
  //       // avoid: ["tolls", "highways"],
  //     },
  //     (response, status) => {
  //       if (status === "OK") {
  //         directionsDisplay.setDirections(response);
  //         console.log(response);
  //         const routePolyline = new maps.Polyline({
  //           path: response.routes[0].overview_path,
  //         });
  //         routePolyline.setMap(map);
  //       } else {
  //         window.alert("Directions request failed due to " + status);
  //       }
  //     }
  //   );
    // vehicleType.route({
    //   FERRY: "Ferry"
    // })
  // };

  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAdUg5RYhac4wW-xnx-p0PrmKogycWz9pI" }}
          defaultCenter={{ lat: 8.8, lng: 78.16667 }}
          defaultZoom={7}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps })=>
            Marker(map, maps)
            //  => apiIsLoaded(map, maps)
          }
        ></GoogleMapReact>
      </div>
    </>
  );
}

export default MapData;
