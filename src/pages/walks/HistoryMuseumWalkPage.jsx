import React from "react";

import "./HistoryMuseumWalkPage.scss";

const URL = "https://my.matterport.com/show/?m=7PhS2HB8xwq&fbclid=IwAR2fk2Asn80SlXLrscDX96iC9TUeiI43LaxhQF8ZJt8UuamDmA3zNlnCHUU";

export default class HistoryMuseumWalkPage extends React.Component {
    render() {
        return (
            <div className="HistoryMuseumWalkPage">
                <iframe src={URL} className="HistoryMuseumWalkFrame"/>
            </div>
        );
    }
}