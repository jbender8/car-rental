import { Typography } from "@mui/material";
import React from "react";
import "./header.css";

class CarHeader extends React.Component {
    render() {
        return (
            <div class='carHeader'>
                <Typography class="title">Cars We Offer</Typography>
                <Typography class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus id mauris eget aliquet. Duis pretium nisi nec metus imperdiet laoreet. Proin eget nibh sagittis, consequat lacus quis, lobortis felis. Quisque vel dui a est tincidunt gravida nec eleifend urna. Cras sem arcu, mollis id enim vel, sodales faucibus turpis. Morbi non ipsum porttitor, varius metus id, vestibulum urna. Nullam non urna luctus, aliquet turpis quis, congue eros. Sed pretium turpis vitae arcu fringilla, quis rhoncus purus pulvinar. In vulputate nisi orci, vitae eleifend diam tempus in. Etiam nisi nulla, varius a nisl nec, accumsan vestibulum nisl.</Typography>
            </div>
        )
    }
}

export default function carHeader () {
    return (<CarHeader />);
}