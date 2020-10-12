import React from "react";

import "./YouthParkWalkPage.scss";

const URL = "https://www.thinglink.com/mediacard/1333012956434137089";

export default class YouthParkWalkPage extends React.Component {
    render() {
        return (
            <div className="YouthParkWalkPage">
                <iframe title="YouthParkWalkFrame" src={URL} className="YouthParkWalkFrame"/>
            </div>
        );
    }
}