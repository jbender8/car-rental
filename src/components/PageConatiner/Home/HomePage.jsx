import { Typography } from "@mui/material";
import React from "react";
import SelectACarCard from "../../Cards/SelectACar/SelectACarCard";
import RentACar from "../../Forms/RentACar/RentACar";
import HeaderSection from "../../Header/Header";
import './home.css';


class HomeWindow extends React.Component{
    render(){
        return(
            <div className="home">
                <HeaderSection type='home'/>
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