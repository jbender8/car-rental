import { Typography } from "@mui/material";
import React from "react";

class Reservation extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Edit a current reservation</Typography>
            </div>
        )
    }
}


export default function EditRes() {
    return (<Reservation/>);
}