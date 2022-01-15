
    import {COLUMNS} from "../../Columns/Column"

    
    function MilestoneTableData(){
      const milestonesPoints = JSON.parse(localStorage.getItem("milestonePoints"))
      console.log(milestonesPoints)
  
    }

    export default MilestoneTableData;
    
    // export const dateObj = {
    //     container_empty_pickup_actual_date : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
    //     container_arrival_at_POL_date : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
    //     container_loaded_at_POL_date : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
    //     vessel_departure_at_POL_date : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
    //     vessel_arrival_at_TSP1_date : new Date(milestonesPoints.data.tsp1_vslarrival_detected).toLocaleDateString(),
    //     container_discharge_at_TSP1_date : new Date(milestonesPoints.data.tsp1_discharge_actual).toLocaleDateString(),
    //     container_loaded_at_TSP1_date : new Date(milestonesPoints.data.tsp1_loaded_actual).toLocaleDateString(),
    //     vessel_departure_at_TSP1_date : new Date(milestonesPoints.data.tsp1_vsldeparture_detected).toLocaleDateString(),
    //     vessel_arrival_at_TSP2_date : new Date(milestonesPoints.data.tsp2_vslarrival_detected).toLocaleDateString(),
    //     container_discharge_at_TSP2_date : new Date(milestonesPoints.data.tsp2_discharge_actual).toLocaleDateString(),
    //     container_loaded_at_TSP2_date : new Date(milestonesPoints.data.tsp2_loaded_actual).toLocaleDateString(),
    //     vessel_departure_at_TSP2_date : new Date(milestonesPoints.data.tsp2_vsldeparture_detected).toLocaleDateString(),
    //     vessel_arrival_at_POD_date : new Date(milestonesPoints.data.pod_vslarrival_detected).toLocaleDateString(),
    //     container_discharge_at_POD_date : new Date(milestonesPoints.data.pod_discharge_actual).toLocaleDateString(),
    //     container_departure_at_POD_date : new Date(milestonesPoints.data.pod_departure_actual).toLocaleDateString(),
    //     container_empty_return_date : new Date(milestonesPoints.data.empty_return_actual).toLocaleDateString()
    //   }
      
      
      
    //   export const locationObj = {
    //     container_empty_pickup_actual_location : milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
    //     container_arrival_at_POL_location : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
    //     container_loaded_at_POL_location : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
    //     vessel_departure_at_POL_location : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
    //     vessel_arrival_at_TSP1_location : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
    //     container_discharge_at_TSP1_location : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
    //     container_loaded_at_TSP1_location :  milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
    //     vessel_departure_at_TSP1_location :  milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
    //     vessel_arrival_at_TSP2_location : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
    //     container_discharge_at_TSP2_location : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
    //     container_loaded_at_TSP2_location : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
    //     vessel_departure_at_TSP2_location : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
    //     vessel_arrival_at_POD_location : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
    //     container_discharge_at_POD_location : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
    //     container_departure_at_POD_location : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
    //     container_empty_return_location : milestonesPoints.data.empty_return_loc.name +`(${milestonesPoints.data.empty_return_loc.locode})`,
    //   }

