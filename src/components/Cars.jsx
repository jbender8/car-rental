import { Typography } from "@mui/material";
import React from "react";

class CarRental extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Cars We Offer</Typography>
            </div>
        )
    }
}


export default function Cars() {
    return (<CarRental/>);
}