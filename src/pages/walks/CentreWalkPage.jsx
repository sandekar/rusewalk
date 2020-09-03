import React from "react";
import MarzipanoWrapper from "../../components/marzipano/MarzipanoWrapper";

import {APP_DATA} from "./centre/data";

export default class CentreWalkPage extends React.Component {
    render() {
        return (
            <MarzipanoWrapper data={APP_DATA} urlPrefix="centre"/>
        );
    }
}