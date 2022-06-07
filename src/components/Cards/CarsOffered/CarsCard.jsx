import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import './carsCard.css';
import phantom from './rr-phantom-viii-16-1501184786.jpg'
import cullinan from './cullinan-magma-red-ext-4-1525901623.jpg'
import ghost from './new-ghost-white-fr-3-4-1-1598911711.jpg'
import flying from './new-bentley-flying-spur-3-1560256771.jpg'
import maybach from './20c0535-041-1605715551.jpg'
import centry from './20171005-02-01-s-1507210109.jpg'


class Cars extends React.Component{
    render(){
        return(
            <div classname="carscard">
                <div class= "card">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                    image={flying}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    2022 Bentley Flying Spur                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                        Only in the world of ultra-luxury cars can a quarter-million-dollar sedan look affordable.Don't think for a second, though, that there's anything cheap about the Flying Spur.The new one can hit 207 mph, making it the fastest production sedan on earth.                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                    image={cullinan}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    2022 Rolls-Royce Cullinan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                        The Cullinan is the Rolls-Royce of SUVs, so it's no surprise to see it on this list. With a twin-turbo V-12 and more quality features than you could ever imagine, it's the perfect vehicle for driving anywhere in total comfort.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={ghost}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                        2022 Rolls-Royce Ghost
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Compared to most sedans, the Rolls-Royce Ghost is huge. But on this list, it seems like a compact. That means it's small enough to drive yourself, should you want to give your chauffeur the day off. It's still a Rolls-Royce, though, so the back seat is always the best in the house.                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={phantom}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        2022 Rolls-Royce Phantom
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Cars simply don't get more opulent than the Rolls-Royce Phantom—the biggest Roller you can buy has always been the ultra-luxury benchmark. With a starting price just under half a million dollars, it better be.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={maybach}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        2022 Mercedes-Maybach S-Class
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        If you want the ultimate expression of luxury from Mercedes-Benz, look for the Maybach badge.The latest top-level S-Class is coated in luxury, with a world-class interior and a classic two-tone exterior with plenty of chrome.                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={centry}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        2022 Toyota Century
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        The current Century might not have a V-12 anymore, but we're confident Toyota has made the hybrid V-8 setup just as relaxing. Combine that with the company's expertise in building fantastic luxury cars, and you've got yourself the ultimate JDM cruiser—as long as you live in Japan, the only country where it's sold.
                                    </Typography>
                                    </CardContent>
                            </Card>
                        </Grid>
                </Grid>
                </div>
            </div>
        )
    }
}


export default function CarsCard() {
    return (<Cars/>);
}