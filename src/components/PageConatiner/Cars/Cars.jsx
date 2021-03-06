import { Typography } from "@mui/material";
import React from "react";
import CarsCard from "../../Cards/CarsOffered/CarsCard";
import HeaderSection from "../../Header/Header"
import './cars.css'


class CarRental extends React.Component{
    render(){
        return(
            <div className="cars">
                <HeaderSection type='cars' />
                <CarsCard />
            </div>
        )
    }
}


export default function Cars() {
    return (<CarRental/>);
}