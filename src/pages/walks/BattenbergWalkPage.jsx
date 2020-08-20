import React from "react";
import MarzipanoWrapper from "../../components/marzipano/MarzipanoWrapper";

import {APP_DATA} from "./battenberg/data";

export default class BattenbergWalkPage extends React.Component {
    render() {
        return (
            <MarzipanoWrapper data={APP_DATA} urlPrefix="battenberg"/>
        );
    }
}