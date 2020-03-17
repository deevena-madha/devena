import React from "react";
import termi1 from "./images/termi1.jpg";
import dh from "./images/dh.jpg";
import avengers1 from "./images/avengers1.jpg";
import getout1 from "./images/getout1.jpg";
import toi from "./images/toi.jpg";
const Image = props => {
    return (
        <div>
            <div>
                <img src={termi1}></img>
            </div>
            <div>
                <img src={dh}></img>
            </div>
            <div>
                <img src={avengers1}></img>
            </div>
            <div>
                <img src={getout1}></img>
            </div>
            <div>
                <img src={toi}></img>
            </div>
        </div>
    );
};

export default Image;