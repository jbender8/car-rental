import { Typography } from "@mui/material";
import React from "react";

class LocationSpot extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Location</Typography>
            </div>
        )
    }
}


export default function Location() {
    return (<LocationSpot/>);
}