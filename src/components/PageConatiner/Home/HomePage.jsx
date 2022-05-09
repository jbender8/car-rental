import { Typography } from "@mui/material";
import React from "react";
import SelectACarCard from "../../Cards/SelectACar/SelectACarCard";
import RentACar from "../../Forms/RentACar/RentACar";
import HeaderSection from "../../Header/Header"


class HomeWindow extends React.Component{
    render(){
        return(
            <div>
                <HeaderSection />
                <Typography variant="h2"> Rent A Car</Typography>
                <RentACar />
                <SelectACarCard />
            </div>
        )
    }
}


export default function HomePage() {
    return (<HomeWindow/>);
}