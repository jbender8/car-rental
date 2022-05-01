import { Typography } from "@mui/material";
import React from "react";

class FooterSection extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">footer</Typography>
            </div>
        )
    }
}


export default function Footer() {
    return (<FooterSection/>);
}