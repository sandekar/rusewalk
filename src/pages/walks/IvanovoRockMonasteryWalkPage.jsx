import React from "react";

import "./IvanovoRockMonasteryWalkPage.scss";

const URL = "https://my.matterport.com/show/?m=hRuiH3pebbz&fbclid=IwAR0s8u1uMpDqGN-qiCfLdT-d3Xql9Wa-H4kwSqEKAU9D7s7Ye4BKn1nIXR4";

export default class IvanovoRockMonasteryWalkPage extends React.Component {
    render() {
        return (
            <div className="IvanovoRockMonasteryWalkPage">
                <iframe src={URL} className="IvanovoRockMonasteryWalkFrame"/>
            </div>
        );
    }
}