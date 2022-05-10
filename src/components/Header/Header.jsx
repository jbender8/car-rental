import { Typography } from "@mui/material";
import React from "react";
import CarHeader from "./headers/carHeader";
import HomeHeader from "./headers/homeHeader";
import LocationHeader from "./headers/locationHeader";
import ManagerHeader from "./headers/managerHeader";
import EditHeader from "./headers/editHeader";





class HeaderSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
        };
    }
        render() {
            if (this.state.type === 'cars') {
                return <CarHeader />;
            }
            else if (this.state.type === 'location'){
                return <LocationHeader />;
            }
            else if (this.state.type === 'manager') {
                return <ManagerHeader />;
            }
            else if (this.state.type === 'edit') {
                return <EditHeader />;
            }
            return <HomeHeader />;
            
        }
    }



export default function Header(props) {
    return (<HeaderSection type={props.type} />);
}