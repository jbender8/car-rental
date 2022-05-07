import { Typography } from "@mui/material";
import React from "react";
import AddCar from "../../Forms/AddCar/AddCar";
import Login from "../../Forms/Login/Login";
import RemoveACar from "../../Forms/RemoveACar/RemoveACar";

class ManagerPortal extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Manager Portal</Typography>
                <Login />
                <AddCar />
                <RemoveACar />
            </div>
        )
    }
}


export default function Manager() {
    return (<ManagerPortal/>);
}