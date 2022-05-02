import { Typography } from "@mui/material";
import React from "react";

class ManagerPortal extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Manager Portal</Typography>
            </div>
        )
    }
}


export default function Manager() {
    return (<ManagerPortal/>);
}