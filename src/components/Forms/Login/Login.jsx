import React from "react";
import { Button, FormControl, TextField } from "@mui/material";
import "./login.css";


class LoginForm extends React.Component{
    render(){
        return(
            <div className="Login">
                <FormControl>
                    <div className="form">
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                    </div>
                    <div className="form">
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                    </div>
                    <Button className="SelcectCar">
                        Login
                    </Button>
                </FormControl>
            </div>
        )
    }
}


export default function Login() {
    return (<LoginForm/>);
}