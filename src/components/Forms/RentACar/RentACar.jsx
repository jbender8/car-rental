import { FormControl, InputBase, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";
import "./rent.css"

class RentForm extends React.Component {
    render() {
        const make = [
            {
                value: 'Bentley',
                label: 'Bentley',
            },
            {
                value: 'Rolls-Royce',
                label: 'Rolls-Royce',
            },
            {
                value: 'Maybach',
                label: 'Maybach',
            },
            {
                value: 'Lagonda',
                label: 'Lagonda',
            },
            {
                value: 'Bugatti',
                label: 'Bugatti',
            },
            {
                value: 'Koenigsegg',
                label: 'Koenigsegg',
            },
            {
                value: 'SSC North America',
                label: 'SSC North America',
            },
            {
                value: 'Porsche',
                label: 'Porsche',
            },
            {
                value: 'Ferrari',
                label: 'Ferrari',
            },
            {
                value: 'Maserati',
                label: 'Maserati',
            },
            {
                value: 'Aston Martin',
                label: 'Aston Martin',
            },
            {
                value: 'Alfa Romeo',
                label: 'Alfa Romeo',
            },
            {
                value: 'Lamborghini',
                label: 'Lamborghini',
            },
            {
                value: 'Mercedes-Benz',
                label: 'Mercedes-Benz',
            },
            {
                value: 'BMW',
                label: 'BMW',
            },
            {
                value: 'Audi',
                label: 'Audi',
            },
            {
                value: 'Volvo',
                label: 'Volvo',
            },
            {
                value: 'Jaguar',
                label: 'Jaguar',
            },
            {
                value: 'Acura',
                label: 'Acura',
            },
            {
                value: 'Lincoln',
                label: 'Lincoln',
            },
            {
                value: 'Land Rover',
                label: 'Land Rover',
            },
            {
                value: 'Tesla',
                label: 'Tesla',
            },
            {
                value: 'Chrysler',
                label: 'Chrysler',
            },
            {
                value: 'Pontiac',
                label: 'Pontiac',
            },
            {
                value: 'Infiniti',
                label: 'Infiniti',
            },
            {
                value: 'Mini',
                label: 'Mini',
            },
            {
                value: 'Genesis',
                label: 'Genesis',
            },
        ];
        const color = [
            {
                value: 'White',
                label: 'White',
            },
            {
                value: 'Blue',
                label: 'Blue',
            },
            {
                value: 'Gray',
                label: 'Gray',
            },
            {
                value: 'Black',
                label: 'Black',
            },
            {
                value: 'Red',
                label: 'Red',
            },
            {
                value: 'Silver',
                label: 'Silver',
            },
            {
                value: 'Brown',
                label: 'Brown',
            },
            {
                value: 'Orange',
                label: 'Orange',
            },
            {
                value: 'Yellow',
                label: 'Yellow',
            },
        ];
        return (
            <div className="Rent">
                <FormControl>
                    <div className="form">
                        <TextField id="outlined-basic" label="Pick Up Date" variant="outlined" />
                        <TextField id="outlined-basic" label="Pick Up Time" variant="outlined" />
                    </div>
                    <div className="form">                        <TextField id="outlined-basic" label="Drop Off Date" variant="outlined" />
                        <TextField id="outlined-basic" label="Drop Off Time" variant="outlined" />
                    </div>
                    <div className="form">
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Car Make"
                        >
                            {make.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Car Make"
                        >
                            {color.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </FormControl>

            </div>
        )
    }
}


export default function RentACar() {
    return (<RentForm />);
}