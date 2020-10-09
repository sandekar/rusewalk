import React from "react";

import "./AdeoHotelWalkPage.scss";

const URL = "https://my.matterport.com/show/?m=FB7JVMfRp3R";

export default class AdeoHotelWalkPage extends React.Component {
    render() {
        return (
            <div className="AdeoHotelWalkPage">
                <iframe title="AdeoHotelWalkFrame" src={URL} className="AdeoHotelWalkFrame"/>
            </div>
        );
    }
}