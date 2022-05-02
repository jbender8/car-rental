import { Typography } from "@mui/material";
import React from "react";

class AddCars extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Add Cars Form </Typography>
            </div>
        )
    }
}


export default function AddCar() {
    return (<AddCars/>);
}