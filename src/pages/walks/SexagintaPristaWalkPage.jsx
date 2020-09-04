import React from "react";
import MarzipanoWrapper from "../../components/marzipano/MarzipanoWrapper";

import {APP_DATA} from "./sexaginta/data";

export default class SexagintaPristaWalkPage extends React.Component {
    render() {
        return (
            <MarzipanoWrapper data={APP_DATA} urlPrefix="sexaginta"/>
        );
    }
}