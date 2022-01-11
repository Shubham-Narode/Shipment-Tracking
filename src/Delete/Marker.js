import jsonData from "../Data.json"

export function Marker(map, maps) {
var DataArray = [];
for (let key in jsonData) {
  for (let words in jsonData[key]) {
    if (words === "latitude" || words === "longitude") {
      DataArray.push(jsonData[key]);
    }
  }
}

    DataArray.map((data) => {
      console.log(data);
      let marker = new maps.Marker({
        position: { lat: data.latitude, lng: data.longitude },
        map,
      });
    });
  }