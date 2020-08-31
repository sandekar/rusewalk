import React from "react";

import "./HistoryMuseumWalkPage.scss";

const URL = "https://my.matterport.com/show/?m=7PhS2HB8xwq";

export default class HistoryMuseumWalkPage extends React.Component {
    render() {
        return (
            <div className="HistoryMuseumWalkPage">
                <iframe src={URL} className="HistoryMuseumWalkFrame"/>
            </div>
        );
    }
}