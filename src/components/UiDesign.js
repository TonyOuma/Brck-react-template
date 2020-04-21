import React, { Component } from 'react';
import { Grid, Cell } from 'react-foundation';
import {Link} from 'react-router-dom';

export default class UiDesign extends Component {
    render() {
        return (
            <Grid className="pad-top-8">
                <Cell medium={4}>
                    <h2><b>UI Designs</b></h2>
                    <p>Contains various prototypes for the mobile, websites and Admin dashboards</p>
                    <h5><b>WEBSITES</b></h5>
                    <p>The one stop shop for different templates and assets that are being worked on by the design team</p>
                    <Link to="#">View Template</Link>
                    <h5><b>MOBILE APPS</b></h5>
                    <p>The one stop shop for different templates and assets that are being worked on by the design team. All the rumours have finally died down and many</p>
                    <Link to="#">View Template</Link>
                    <h5><b>ADMIN/SYSTEM DASHBOARDS</b></h5>
                    <p>The one stop shop for the different templates and assets that are being worked on by the design team. All the rumours have finally died down and many.</p>
                    <Link to="#">View Template</Link>
                </Cell>
                <Cell medium={6} className="medium-offset-2">
                <img src={process.env.PUBLIC_URL + '/img/pic5.jpg'} alt="banner"/>
                </Cell>
            </Grid>
        )
    }
}
