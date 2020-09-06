import React from "react";
import * as Marzipano from "marzipano"
import * as MarzoUtils from "./utils";
import * as WindowUtils from "./window-utils";

import "./MarzipanoWrapper.scss";

const STATIC_API_ENDPOINT = '/api/static/';

export default class MarzipanoWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.panoRef = React.createRef();
    }

    componentDidMount() {
        WindowUtils.detectUserDevice();

        const data = this.props.data;
        const urlPrefix = STATIC_API_ENDPOINT + this.props.urlPrefix + '/tiles';

        const viewerOptions = {
            "mouseViewMode": "drag"
        };

        const viewer = new Marzipano.Viewer(this.panoRef.current, viewerOptions);

        const scenes = MarzoUtils.mapScenes(data, viewer, urlPrefix);

        MarzoUtils.switchScene(scenes[0]);

        this.panoRef.current.addEventListener('dblclick', () => {
            const viewParams = viewer.view() && viewer.view().parameters();
            console.log(JSON.stringify(viewParams))
        });
    }

    render() {
        return (
            <div className="MarzipanoWrapper">
                <div className="MarzipanoWrapperInner" ref={this.panoRef}/>
                <div className="MarzipanoWrapperModals" />
            </div>
        );
    }

}