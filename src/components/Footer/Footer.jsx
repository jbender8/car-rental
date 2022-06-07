import { Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.css"
import logo from '../../img/logo.png'

class FooterSection extends React.Component {
    render() {
        return (
            <>
            <div class="footer">
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <img className="FooterLogo" src={logo} />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h5">Company Information</Typography>
                        <a href="">About</a>
                        <a href="">Investor Relations</a>
                        <a href="">Job Opportunities</a>
                        <a href="">Customers with Disabilities</a>
                            <a href="/Manager">Manager Portal</a>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h5">Customer Support</Typography>
                        <a href="">Product & Service</a>
                        <a href="">Under 25 Rentals</a>
                        <a href="">Policies</a>
                        <a href="">Contact Us</a>
                        <a href="">Lost & Found</a>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h5">Quick Links</Typography>
                        <a href="/Cars">Cars we Offer</a>
                        <a href="/Location">Location</a>
                        <a href="/">Rent a Car</a>
                        <a href="/Edit">Edit a Current Reservation</a>
                    </Grid>
                </Grid>
            </div>
            <div class="copyright">
                <Typography class="copy">&copy; 2022 Ocean Drive Rental Co. All Rights Reserved</Typography>
            </div>
            </>
        )
    }
}


export default function Footer() {
    return (<FooterSection />);
}