import React from 'react';
import { useTable } from "react-table";
import {COLUMNS} from "../../Columns/Column";
import "./Milestones.css"
// import MilestoneTableData from './MilestoneTableData';


const Milestones = () => {

    const milestonesPoints = JSON.parse(localStorage.getItem("milestonePoints"))
        console.log(milestonesPoints)
    var data = []
    if(milestonesPoints !== null){

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc === null)&&(milestonesPoints.data.tsp1_loc === null)&&(milestonesPoints.data.tsp2_loc === null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            
            data.push(tableData)
        }
        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc === null)&&(milestonesPoints.data.tsp2_loc === null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            data.push(tableData, tableData2, tableData3, tableData4)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc !== null)&&(milestonesPoints.data.tsp2_loc === null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            const tableData5=
            {
                "Milestones": "Vessel arrival at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vslarrival_detected).toLocaleDateString(),
            }
            const tableData6=
            {
                "Milestones": "Container discharge at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_discharge_actual).toLocaleDateString(),
            }
            const tableData7=
            {
                "Milestones": " Container loaded at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_loaded_actual).toLocaleDateString(),
            }
            const tableData8=
            {
                "Milestones": "Vessel departure from T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vsldeparture_detected).toLocaleDateString(),
            }

            data.push(tableData, tableData2, tableData3, tableData4, tableData5, tableData6, tableData7, tableData8)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc !== null)&&(milestonesPoints.data.tsp2_loc !== null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            const tableData5=
            {
                "Milestones": "Vessel arrival at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vslarrival_detected).toLocaleDateString(),
            }
            const tableData6=
            {
                "Milestones": "Container discharge at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_discharge_actual).toLocaleDateString(),
            }
            const tableData7=
            {
                "Milestones": " Container loaded at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_loaded_actual).toLocaleDateString(),
            }
            const tableData8=
            {
                "Milestones": "Vessel departure from T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vsldeparture_detected).toLocaleDateString(),
            }

            const tableData9=
            {
                "Milestones": "Vessel arrival at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_vslarrival_detected).toLocaleDateString(),
            }
            const tableData10=
            {
                "Milestones": "Container discharge at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_discharge_actual).toLocaleDateString(),
            }
            const tableData11=
            {
                "Milestones": "Container loaded at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_loaded_actual).toLocaleDateString(),
            }
            const tableData12=
            {
                "Milestones": "Vessel departure from T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_vsldeparture_detected).toLocaleDateString(),
            }

            data.push(tableData, tableData2, tableData3, tableData4, tableData5, tableData6, tableData7, tableData8, tableData9, tableData10, tableData11, tableData12)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc !== null)&&(milestonesPoints.data.tsp2_loc !== null)&&(milestonesPoints.data.pod_loc !== null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            const tableData5=
            {
                "Milestones": "Vessel arrival at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vslarrival_detected).toLocaleDateString(),
            }
            const tableData6=
            {
                "Milestones": "Container discharge at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_discharge_actual).toLocaleDateString(),
            }
            const tableData7=
            {
                "Milestones": " Container loaded at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_loaded_actual).toLocaleDateString(),
            }
            const tableData8=
            {
                "Milestones": "Vessel departure from T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vsldeparture_detected).toLocaleDateString(),
            }

            const tableData9=
            {
                "Milestones": "Vessel arrival at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_vslarrival_detected).toLocaleDateString(),
            }
            const tableData10=
            {
                "Milestones": "Container discharge at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_discharge_actual).toLocaleDateString(),
            }
            const tableData11=
            {
                "Milestones": "Container loaded at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_loaded_actual).toLocaleDateString(),
            }
            const tableData12=
            {
                "Milestones": "Vessel departure from T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_vsldeparture_detected).toLocaleDateString(),
            }

            const tableData13=
            {
                "Milestones": "Vessel arrival at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_vslarrival_detected).toLocaleDateString(),
            }
            const tableData14=
            {
                "Milestones": "Container discharge at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_discharge_actual).toLocaleDateString(),
            }
            const tableData15=
            {
                "Milestones": "Container departure from final POD (Gate out)",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_departure_actual).toLocaleDateString(),
            }

            data.push(tableData, tableData2, tableData3, tableData4, tableData5, tableData6, tableData7, tableData8, tableData9, tableData10, tableData11, tableData12, tableData13, tableData14, tableData15)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc !== null)&&(milestonesPoints.data.tsp2_loc !== null)&&(milestonesPoints.data.pod_loc !== null)&&(milestonesPoints.data.empty_return_loc !== null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            const tableData5=
            {
                "Milestones": "Vessel arrival at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vslarrival_detected).toLocaleDateString(),
            }
            const tableData6=
            {
                "Milestones": "Container discharge at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_discharge_actual).toLocaleDateString(),
            }
            const tableData7=
            {
                "Milestones": " Container loaded at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_loaded_actual).toLocaleDateString(),
            }
            const tableData8=
            {
                "Milestones": "Vessel departure from T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vsldeparture_detected).toLocaleDateString(),
            }
            const tableData9=
            {
                "Milestones": "Vessel arrival at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_vslarrival_detected).toLocaleDateString(),
            }
            const tableData10=
            {
                "Milestones": "Container discharge at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_discharge_actual).toLocaleDateString(),
            }
            const tableData11=
            {
                "Milestones": "Container loaded at T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_loaded_actual).toLocaleDateString(),
            }
            const tableData12=
            {
                "Milestones": "Vessel departure from T/S port 2",
                "location" : milestonesPoints.data.tsp2_loc.name +`(${milestonesPoints.data.tsp2_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp2_vsldeparture_detected).toLocaleDateString(),
            }
            const tableData13=
            {
                "Milestones": "Vessel arrival at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_vslarrival_detected).toLocaleDateString(),
            }
            const tableData14=
            {
                "Milestones": "Container discharge at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_discharge_actual).toLocaleDateString(),
            }
            const tableData15=
            {
                "Milestones": "Container departure from final POD (Gate out)",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_departure_actual).toLocaleDateString(),
            }
            const tableData16=
            {
                "Milestones": "Container empty return to depot",
                "location" : milestonesPoints.data.empty_return_loc.name +`(${milestonesPoints.data.empty_return_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_return_actual).toLocaleDateString(),
            }
            data.push(tableData, tableData2,tableData3, tableData4, tableData5, tableData6, tableData7, tableData8, tableData9, tableData10, tableData11, tableData12, tableData13, tableData14, tableData15, tableData16)
        }

        
    }

    if((milestonesPoints !== null)&&(milestonesPoints.data.tsp2_loc === null)){

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc === null)&&(milestonesPoints.data.tsp1_loc === null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            
            data.push(tableData)
        }
        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc === null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            data.push(tableData, tableData2, tableData3, tableData4)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc !== null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            const tableData5=
            {
                "Milestones": "Vessel arrival at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vslarrival_detected).toLocaleDateString(),
            }
            const tableData6=
            {
                "Milestones": "Container discharge at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_discharge_actual).toLocaleDateString(),
            }
            const tableData7=
            {
                "Milestones": " Container loaded at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_loaded_actual).toLocaleDateString(),
            }
            const tableData8=
            {
                "Milestones": "Vessel departure from T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vsldeparture_detected).toLocaleDateString(),
            }

            data.push(tableData, tableData2, tableData3, tableData4, tableData5, tableData6, tableData7, tableData8)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc !== null)&&(milestonesPoints.data.pod_loc !== null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            const tableData5=
            {
                "Milestones": "Vessel arrival at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vslarrival_detected).toLocaleDateString(),
            }
            const tableData6=
            {
                "Milestones": "Container discharge at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_discharge_actual).toLocaleDateString(),
            }
            const tableData7=
            {
                "Milestones": " Container loaded at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_loaded_actual).toLocaleDateString(),
            }
            const tableData8=
            {
                "Milestones": "Vessel departure from T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vsldeparture_detected).toLocaleDateString(),
            }

            const tableData13=
            {
                "Milestones": "Vessel arrival at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_vslarrival_detected).toLocaleDateString(),
            }
            const tableData14=
            {
                "Milestones": "Container discharge at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_discharge_actual).toLocaleDateString(),
            }
            const tableData15=
            {
                "Milestones": "Container departure from final POD (Gate out)",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_departure_actual).toLocaleDateString(),
            }

            data.push(tableData, tableData2, tableData3, tableData4, tableData5, tableData6, tableData7, tableData8,tableData13, tableData14, tableData15)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.tsp1_loc !== null)&&(milestonesPoints.data.pod_loc !== null)&&(milestonesPoints.data.empty_return_loc !== null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            const tableData5=
            {
                "Milestones": "Vessel arrival at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vslarrival_detected).toLocaleDateString(),
            }
            const tableData6=
            {
                "Milestones": "Container discharge at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_discharge_actual).toLocaleDateString(),
            }
            const tableData7=
            {
                "Milestones": " Container loaded at T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_loaded_actual).toLocaleDateString(),
            }
            const tableData8=
            {
                "Milestones": "Vessel departure from T/S port 1",
                "location" : milestonesPoints.data.tsp1_loc.name +`(${milestonesPoints.data.tsp1_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.tsp1_vsldeparture_detected).toLocaleDateString(),
            }
            
            const tableData13=
            {
                "Milestones": "Vessel arrival at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_vslarrival_detected).toLocaleDateString(),
            }
            const tableData14=
            {
                "Milestones": "Container discharge at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_discharge_actual).toLocaleDateString(),
            }
            const tableData15=
            {
                "Milestones": "Container departure from final POD (Gate out)",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_departure_actual).toLocaleDateString(),
            }
            const tableData16=
            {
                "Milestones": "Container empty return to depot",
                "location" : milestonesPoints.data.empty_return_loc.name +`(${milestonesPoints.data.empty_return_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_return_actual).toLocaleDateString(),
            }
            data.push(tableData, tableData2,tableData3, tableData4, tableData5, tableData6, tableData7, tableData8, tableData13, tableData14, tableData15, tableData16)
        }

        
    }

    if((milestonesPoints !== null)&&(milestonesPoints.data.tsp1_loc === null)&&(milestonesPoints.data.tsp2_loc === null)){

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc === null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            
            data.push(tableData)
        }
        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.pod_loc === null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            data.push(tableData, tableData2, tableData3, tableData4)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.pod_loc !== null)&&(milestonesPoints.data.empty_return_loc === null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }

            const tableData13=
            {
                "Milestones": "Vessel arrival at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_vslarrival_detected).toLocaleDateString(),
            }
            const tableData14=
            {
                "Milestones": "Container discharge at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_discharge_actual).toLocaleDateString(),
            }
            const tableData15=
            {
                "Milestones": "Container departure from final POD (Gate out)",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_departure_actual).toLocaleDateString(),
            }

            data.push(tableData, tableData2, tableData3, tableData4,tableData13, tableData14, tableData15)
        }

        if((milestonesPoints.data.empty_pickup_loc !== null)&&(milestonesPoints.data.pol_loc !== null)&&(milestonesPoints.data.pod_loc !== null)&&(milestonesPoints.data.empty_return_loc !== null)){

            const tableData=
            {
                "Milestones": "Container empty pickup from depot",
                "location" :  milestonesPoints.data.empty_pickup_loc.name +`(${milestonesPoints.data.empty_pickup_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_pickup_actual).toLocaleDateString(),
            }
            
            const tableData2=
            {
                "Milestones": "Container arrival at first POL (Gate in)",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_arrival_actual).toLocaleDateString(),
            }
            
            const tableData3=
            {
                "Milestones": "Container loaded at first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_loaded_actual).toLocaleDateString(),
            }
            
            const tableData4=
            {
                "Milestones": "Vessel departure from first POL",
                "location" : milestonesPoints.data.pol_loc.name +`(${milestonesPoints.data.pol_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pol_vsldeparture_detected).toLocaleDateString(),
            }
            
            const tableData13=
            {
                "Milestones": "Vessel arrival at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_vslarrival_detected).toLocaleDateString(),
            }
            const tableData14=
            {
                "Milestones": "Container discharge at final POD",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_discharge_actual).toLocaleDateString(),
            }
            const tableData15=
            {
                "Milestones": "Container departure from final POD (Gate out)",
                "location" : milestonesPoints.data.pod_loc.name +`(${milestonesPoints.data.pod_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.pod_departure_actual).toLocaleDateString(),
            }
            const tableData16=
            {
                "Milestones": "Container empty return to depot",
                "location" : milestonesPoints.data.empty_return_loc.name +`(${milestonesPoints.data.empty_return_loc.locode})`,
                "Predicted_Date" : "--",
                "Actual_Date" : new Date(milestonesPoints.data.empty_return_actual).toLocaleDateString(),
            }
            data.push(tableData, tableData2,tableData3, tableData4, tableData13, tableData14, tableData15, tableData16)
        }

        
    }


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns: COLUMNS,
            data
        }
        
    )


    return (
        <>
        <span className="milestone__heading">MILESTONE</span>
            <div className="table-modal">
                <div className="table_container" style={{display: "flex", justifyContent: "center"}}>
                    <table {...getTableProps()} style={{minWidth: "100%"}}>
                        <thead >
                            {
                                headerGroups.map((headerGroup) =>
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map((column) => (
                                                <th {...column.getHeaderProps()}>
                                                    {column.render('Header')}
                                                </th>
                                            ))}
                                    </tr>
                                )}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {
                                rows.map((row) => {
                                    console.log(row)
                                    prepareRow(row)
                                    return (
                                        <tr  {...row.getRowProps()}>
                                            {
                                                row.cells.map((cell) => {
                                                    return (
                                                        <td {...cell.getCellProps()} className="pl8">
                                                            {cell.render('Cell')}
                                                        </td>
                                                    )
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Milestones;