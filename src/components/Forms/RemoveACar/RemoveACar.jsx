import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import './remove.css'

class RemoveForm extends React.Component{
    render(){
        return(
            <div className="Login">
            <FormControl>
                <div className="form">
                    <TextField id="outlined-basic" label="Licence Plate Number" variant="outlined" />
                </div>
                <Button className="SelcectCar">
                    Remove Car
                </Button>
            </FormControl>
        </div>
        )
    }
}


export default function RemoveACar() {
    return (<RemoveForm/>);
}