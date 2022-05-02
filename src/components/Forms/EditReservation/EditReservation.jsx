import { Typography } from "@mui/material";
import React from "react";

class EditForm extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Edit Reservation Form </Typography>
            </div>
        )
    }
}


export default function EditReservation() {
    return (<EditForm/>);
}