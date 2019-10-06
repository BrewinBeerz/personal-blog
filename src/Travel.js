import React, { Component } from "react";
import Map from "./Map";
import './Travel.css'


class Travel extends Component {
    render() {
        return ( <div>
            <h2>Travel</h2> 
                <Map></Map>
            </div>
        );
    }
}

export default Travel;