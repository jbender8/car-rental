import { Button, FormControl, TextField } from "@mui/material";
import React from "react";

class EditForm extends React.Component{
    render(){
        return(
            <div className="Login">
                <FormControl>
                    <div className="form">
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />

                    </div>
                    <div className="form">
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </div>
                    <Button className="SelcectCar">
                        Cancel Reservation
                    </Button>
                    <Button className="SelcectCar">
                        Edit Reservation
                    </Button>
                </FormControl>
            </div>
        )
    }
}


export default function EditReservation() {
    return (<EditForm/>);
}