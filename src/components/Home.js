import React, { Component } from 'react'
import { Row, Grid, Cell } from 'react-foundation';

export default class Home extends Component {
    render() {
        return (
            <Row>
                <Grid className="display pad-top-8">
                    <Cell  medium={2} large={4}><h1><b>Welcome to the BRCK Design Portal</b></h1></Cell>
                    <Cell  medium={3} >
                        <h3>ABOUT</h3>
                        <p>The one stop shop for different templates and assets that are being worked on by the design team.</p>
                    </Cell>
                    <Cell medium={6} large={4} className="medium-offset-1">
                    <h4>CONTAINS</h4>
                <p>The one stop shop for different templates and assets that are being worked on by the design team. All the rumours have finally died down and many.</p>
                    </Cell>
                </Grid>
                <Grid className="pad-top-8">
                    <img src={process.env.PUBLIC_URL + '/img/banner.png'} alt="banner"/>
                </Grid>
            </Row>
        )
    }
}
