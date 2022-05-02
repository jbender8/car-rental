import { Typography } from "@mui/material";
import React from "react";

class LoginForm extends React.Component{
    render(){
        return(
            <div>
                <Typography variant="h5">Login Form </Typography>
            </div>
        )
    }
}


export default function Login() {
    return (<LoginForm/>);
}