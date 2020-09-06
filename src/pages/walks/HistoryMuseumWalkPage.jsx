import React from "react";

import "./HistoryMuseumWalkPage.scss";

const URL = "https://my.matterport.com/show/?m=EY8zb4RApTk";

export default class HistoryMuseumWalkPage extends React.Component {
    render() {
        return (
            <div className="HistoryMuseumWalkPage">
                <iframe title="HistoryMuseumWalkFrame" src={URL} className="HistoryMuseumWalkFrame"/>
            </div>
        );
    }
}