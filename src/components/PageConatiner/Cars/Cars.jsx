import { Typography } from "@mui/material";
import React from "react";
import CarsCard from "../../Cards/CarsOffered/CarsCard";
import HeaderSection from "../../Header/Header"


class CarRental extends React.Component{
    render(){
        return(
            <div>
                <HeaderSection />
                <Typography variant="h5">Cars We Offer</Typography>
                <CarsCard />
            </div>
        )
    }
}


export default function Cars() {
    return (<CarRental/>);
}