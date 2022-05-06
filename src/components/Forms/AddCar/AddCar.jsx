import { Button, FormControl, TextField } from "@mui/material";
import React from "react";

class AddCars extends React.Component{
    render(){
        return(
            <div className="Add">
                <FormControl>
                    <div className="form">
                        <TextField id="outlined-basic" label="Car Make" variant="outlined" />
                        <TextField id="outlined-basic" label="Car Model" variant="outlined" />
                    </div>
                    <div className="form">
                        <TextField id="outlined-basic" label="Car Color" variant="outlined" />
                        <TextField id="outlined-basic" label="Car Price per Day" variant="outlined" />
                    </div>
                    <div className="form">
                        <TextField id="outlined-basic" label="Car Year" variant="outlined" />
                        <TextField id="outlined-basic" label="Car Lience Plate Number" variant="outlined" />
                    </div>
                    <div className="form">
                        <TextField id="outlined-basic" label="Car Desciption" variant="outlined" />
                    </div>
                    <div className="form">
                        <TextField id="outlined-basic" label="Lot Number" variant="outlined" />
                        <TextField id="outlined-basic" label="Parking Spot Number" variant="outlined" />
                    </div>
                    <Button className="SelcectCar">
                        Add Car
                    </Button>
                </FormControl>
            </div>
        )
    }
}


export default function AddCar() {
    return (<AddCars/>);
}