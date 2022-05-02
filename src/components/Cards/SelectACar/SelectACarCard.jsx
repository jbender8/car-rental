import { Typography } from "@mui/material";
import React from "react";

class Cars extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Select Cars Card</Typography>
            </div>
        )
    }
}


export default function SelectACarCard() {
    return (<Cars/>);
}