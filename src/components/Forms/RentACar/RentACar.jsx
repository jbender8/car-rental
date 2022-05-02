import { Typography } from "@mui/material";
import React from "react";

class RentForm extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Rent Cars Form </Typography>
            </div>
        )
    }
}


export default function RentACar() {
    return (<RentForm/>);
}