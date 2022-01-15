import React from "react";
import { dateObj } from "./MilestoneTableData";
import { locationObj } from "./MilestoneTableData";

function MilestoneMessageObj(){
    if (dateObj.container_empty_pickup_actual_date !== "" || locationObj.container_empty_pickup_actual_location !== "") {
        return (
            <div> Container empty pickup from depot </div>
        )
    }
    if (dateObj.container_arrival_at_POL_date !== "" || locationObj.container_arrival_at_POL_location !== "") {
        return (
            <div>  Container arrival at first POL (Gate in) </div>
        )
    }
    if (dateObj.container_loaded_at_POL_date !== "" || locationObj.container_loaded_at_POL_location !== "") {
        return (
            <div> Container loaded at first POL </div>
        )
    }
    if (dateObj.vessel_departure_at_POL_date !== "" || locationObj.vessel_departure_at_POL_location !== "") {
        return (
            <div>  Vessel departure from first POL </div>
        )
    }
    if (dateObj.vessel_arrival_at_TSP1_date !== "" || locationObj.vessel_arrival_at_TSP1_location !== "") {
        return (
            <div> Vessel arrival at T/S port 1 </div>
        )
    }
    if (dateObj.container_discharge_at_TSP1_date !== "" || locationObj.container_discharge_at_TSP1_location !== "") {
        return (
            <div> Container discharge at T/S port 1 </div>
        )
    }
    if (dateObj.container_loaded_at_TSP1_date !== "" || locationObj.container_loaded_at_TSP1_location !== "") {
        return (
            <div> Container loaded at T/S port 1 </div>
        )
    }
    if (dateObj.vessel_departure_at_TSP1_date !== "" || locationObj.vessel_departure_at_TSP1_location !== "") {
        return (
            <div> Vessel departure from T/S port 1 </div>
        )
    }
    if (dateObj.vessel_arrival_at_TSP2_date !== "" || locationObj.vessel_arrival_at_TSP2_location !== "") {
        return (
            <div> Vessel arrival at T/S port 2 </div>
        )
    }
    if (dateObj.container_discharge_at_TSP2_date !== "" || locationObj.container_discharge_at_TSP2_location !== "") {
        return (
            <div> Container discharge at T/S port 2 </div>
        )
    }
    if (dateObj.container_loaded_at_TSP2_date !== "" || locationObj.container_loaded_at_TSP2_location !== "") {
        return (
            <div> Container loaded at T/S port 2 </div>
        )
    }
    if (dateObj.vessel_departure_at_TSP2_date !== "" || locationObj.vessel_departure_at_TSP2_location !== "") {
        return (
            <div> Vessel departure from T/S port 2 </div>
        )
    }
    if (dateObj.vessel_arrival_at_POD_date !== "" || locationObj.vessel_arrival_at_POD_location !== "") {
        return (
            <div> Vessel arrival at final POD </div>
        )
    }
    if (dateObj.container_discharge_at_POD_date !== "" || locationObj.container_discharge_at_POD_location !== "") {
        return (
            <div> Container discharge at final POD </div>
        )
    }
    if (dateObj.container_departure_at_POD_date !== "" || locationObj.container_departure_at_POD_location !== "") {
        return (
            <div> Container departure from final POD (Gate out) </div>
        )
    }
    if (dateObj.container_empty_return_date !== "" || locationObj.container_empty_return_location !== "") {
        return (
            <div> Container empty return to depot </div>
        )
    }
};

export default MilestoneMessageObj;