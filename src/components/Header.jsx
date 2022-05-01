import { Typography } from "@mui/material";
import React from "react";

class HeaderSection extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h1">Ocean Drive Rental Co.</Typography>
            </div>
        )
    }
}


export default function Header() {
    return (<HeaderSection/>);
}