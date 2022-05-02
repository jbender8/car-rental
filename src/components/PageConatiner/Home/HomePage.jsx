import { Typography } from "@mui/material";
import React from "react";

class HomeWindow extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h2"> Rent A Car</Typography>
            </div>
        )
    }
}


export default function HomePage() {
    return (<HomeWindow/>);
}