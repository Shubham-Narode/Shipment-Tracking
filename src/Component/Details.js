import React, { useEffect, useState } from "react";
import "./Details.css"

function Details(){

    
    var detailData = JSON.parse(localStorage.getItem("datas"))
    console.log(detailData)
    const [data, setData] = useState(false)

    useEffect(()=>{

        if(detailData !== null){
            setData(true)
        }
    },[data])

    function nullOrigin(){
        if(detailData !== null){
            if(detailData.data.origin_loc !== null){
                return true
            }
            return false
        }
    }
    function nullPOL(){
        if(detailData !== null){
            if(detailData.data.pol_loc !== null){
                return true
            }
            return false
        }
    }
    function nullTSP1(){
        if(detailData !== null){
            if((detailData.data.tsp1_loc !== null)&&(detailData.data.tsp2_loc === null)&&(detailData.data.tsp3_loc === null)&&(detailData.data.tsp4_loc === null)){
                return true
            }
            return false
        }
    }
    function nullTSP2(){
        if(detailData !== null){
            if((detailData.data.tsp1_loc !== null)&&(detailData.data.tsp2_loc !== null)&&(detailData.data.tsp3_loc === null)&&(detailData.data.tsp4_loc === null)){
                return true
            }
            return false
        }
    }
    function nulldlv(){
        if(detailData !== null){
            if(detailData.data.dlv_loc !== null){
                return true
            }
            return false
        }
    }
    function nullPOD(){
        if(detailData !== null){
            if(detailData.data.pod_loc !== null){
                return true
            }
            return false
        }
    }

    return(
        <>
        {data && <div className="details__tag">
            <div className="details__shipmentType">
                <div className="details__shipment">
                    Shipment Details
                </div>
                <div className="details__shipmentPoints">
                    <span className="details__shipmentSpanOrigin">
                        <div className="detail__shipmentHeading">ORIGIN</div>
                        {nullOrigin() && <div>{detailData.data.origin_loc.name}</div>}
                    </span>
                    <span  className="details__shipmentSpanPOL">
                        <div className="detail__shipmentHeading">PORT OF LOADING</div>
                        {nullPOL() && <div>{detailData.data.pol_loc.name}</div>}
                    </span>
                    <span  className="details__shipmentSpanExchange">
                        <div className="detail__shipmentHeading">SHIPMENT EXCHANGING - 1</div>
                        {nullTSP1() && 
                        <>
                            <div>{`TSP1 - ${detailData.data.tsp1_loc.name}`}</div> <br />
                        </> }
                    </span>
                    <span  className="details__shipmentSpanExchange">
                        <div className="detail__shipmentHeading">SHIPMENT EXCHANGING - 2</div>
                        {nullTSP2() && 
                        <>
                            <div>{`TSP2 - ${detailData.data.tsp2_loc.name}`}</div> <br />
                        </> }
                    </span>
                    <span className="details__shipmentSpanPOD">
                        <div className="detail__shipmentHeading">PORT OF DISCHARGE</div>
                        {nullPOD() && <div>{detailData.data.pod_loc.name}</div>}
                    </span>
                    <span className="details__shipmentSpanDestination">
                        <div className="detail__shipmentHeading">DESTINATION</div>
                        {nulldlv() && <div>{detailData.data.dlv_loc.name}</div>}
                    </span>
                </div>
            </div>
            <div className="details__containerType">
                <div className="details__container">
                    Container Details
                </div>
                <div className="details__containerPoints">
                    <span className="details__containerSpanContainer">
                        <div className="detail__containerHeading">CONTAINER NO</div>
                        <div>{detailData.data.container_number}</div>
                    </span>
                    <span className="details__containerSpanContainerWeight">
                        <div className="detail__containerHeading">CONTAINER WEIGHT</div>
                        <div>{detailData.data.weight}</div>
                    </span>
                    <span className="details__containerSpanDestinationC">
                        <div className="detail__containerHeading">DESTINATION COUNTRY</div>
                        {nulldlv() && <div>{detailData.data.dlv_loc.name}</div>}
                    </span>
                    <span className="details__containerSpanETD">
                        <div className="detail__containerHeading">ETD</div>
                        <div>21/12/2021</div>
                    </span>
                </div>
            </div>
        </div>}
        </>
    )
};
export default Details;