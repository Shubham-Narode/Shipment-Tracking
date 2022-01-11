import axios from "axios";

export async function MapData(){
    async function getData() {
        try {
          const receiveddata = await axios.get(
            "/containertracking/v2/shipments/16203532/",
          );
          console.log(receiveddata);
        } catch (error) {}
      }
  
      getData();
}