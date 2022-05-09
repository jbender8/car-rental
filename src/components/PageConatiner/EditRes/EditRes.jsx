import { Typography } from "@mui/material";
import React from "react";
import EditReservation from "../../Forms/EditReservation/EditReservation";
import HeaderSection from "../../Header/Header"


class Reservation extends React.Component{
    render(){
        return(
            <div>
                <HeaderSection />
                <Typography variant="h5">Edit a current reservation</Typography>
                <EditReservation />
            </div>
        )
    }
}


export default function EditRes() {
    return (<Reservation/>);
}