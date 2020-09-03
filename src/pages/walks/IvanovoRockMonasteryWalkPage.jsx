import React from "react";

import "./IvanovoRockMonasteryWalkPage.scss";

const URL = "https://my.matterport.com/show/?m=hRuiH3pebbz";

export default class IvanovoRockMonasteryWalkPage extends React.Component {
    render() {
        return (
            <div className="IvanovoRockMonasteryWalkPage">
                <iframe title="IvanovoRockMonasteryWalkFrame" src={URL} className="IvanovoRockMonasteryWalkFrame"/>
            </div>
        );
    }
}