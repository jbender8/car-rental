import { Typography } from "@mui/material";
import React from "react";

class Navagation extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">nav bar</Typography>
            </div>
        )
    }
}


export default function Navbar() {
    return (<Navagation/>);
}