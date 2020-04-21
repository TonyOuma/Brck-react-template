import React, { Component } from 'react'
import { Grid, Cell } from 'react-foundation';
import {Link} from 'react-router-dom';

export default class MojaApp extends Component {
    render() {
        return (
            <Grid className="pad-top-8">
                <Cell medium={4}>
                    <h2><b>Moja App</b></h2>
                    <p>Here you will find Moja Ui layouts for android and the web app</p>
                    <h5><b>PRODUCTION RELEASES</b></h5>
                    <p>The one stop shop for different templates and assets that are being worked on by the design team</p>
                    <Link to="#">View Template</Link>
                    <h5>PLAYGROUND</h5>
                    <p>The one stop shop for different templates and assets that are being worked on by the design team. All the rumours have finally died down and many</p>
                    <Link to="#">View Template</Link>
                </Cell>
                <Cell medium={6} className="medium-offset-2">
                <img src={process.env.PUBLIC_URL + '/img/mobile.jpg'} alt="banner"/>
                </Cell>
            </Grid>
        )
    }
}
