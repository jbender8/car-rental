import { Typography } from "@mui/material";
import React from "react";
import HeaderSection from "../../Header/Header"


class LocationSpot extends React.Component{
    render(){
        return(
            <div>
                <HeaderSection />
                <Typography variant="h5">Location</Typography>
            </div>
        )
    }
}


export default function Location() {
    return (<LocationSpot/>);
}