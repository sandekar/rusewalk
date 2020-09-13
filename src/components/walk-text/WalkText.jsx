import React from "react";
import {Button} from 'react-bootstrap';

import './WalkText.scss';

const MAX_LENGTH = 200;

export default class WalkText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
        this.expand = this.expand.bind(this);
    }

    expand() {
        this.setState({
            expanded: true
        });
    }

    getText() {
        if (this.props.text.length <= MAX_LENGTH) {
            return this.props.text;
        }
        return this.props.text.substring(0, MAX_LENGTH);
    }

    render() {
        if (this.state.expanded || this.props.text.length <= MAX_LENGTH) {
            return (
                <span className='WalkText'>{this.props.text}</span>
            );
        }

        const text = this.props.text.substring(0, MAX_LENGTH);
        return (
            <>
                <span className='WalkText expandable'>
                    {text} ... <Button className="ReadMoreButton" variant="link" onClick={this.expand}>read more</Button>
                </span>
            </>
        );
    }

}