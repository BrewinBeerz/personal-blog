import React, { Component } from "react";
import Map from "./Map";
import './Travel.css'


class Travel extends Component {
    render() {
        return ( 
        <div>
            <h2 style={{paddingBottom: '20px'}}>Travel</h2>
            <Map></Map>
            <p id="travel-quote">“Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.”</p>
            <p id="travel-author">– <b>Anthony Bourdain</b> -</p>
        </div>
        );
    }
}

export default Travel;