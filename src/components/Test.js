import React, { Component } from 'react';

import axios from 'axios';

export default class Test extends Component {

    constructor() {
        super();
        this.state = {
            object: []
        }
    }

    async componentDidMount() {
        const resp = await axios.get("http://www.mocky.io/v2/5ed8bba3310000e48bc4e755");
        this.setState({ object: resp.data.object });
    }

    render() {
        // console.log(this.state.object);
        return (
            <div>
                <div>{this.state.object.map((obj, index) =>
                    (
                        <div key={index}>
                            <div>username: {obj.username}</div>
                            <div> id: {obj.bookingId}</div>
                            <div> name: {obj.name}</div>
                        </div>
                    ))}</div>
            </div>
        )
    }

}