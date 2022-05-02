import { Typography } from "@mui/material";
import React from "react";

class RemoveForm extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Remove Cars Form </Typography>
            </div>
        )
    }
}


export default function RemoveACar() {
    return (<RemoveForm/>);
}