import React, { Component } from 'react';
import { Grid, Cell } from 'react-foundation';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Websites extends Component {
    render() {
        return (
            <Grid className="pad-top-8">
                <Cell medium={4}>
                    <h2><b>BRCK WEBSITES</b></h2>
                    <p>Here you will find Moja Ui layouts for Android and the Web-App</p>
                    <img src={process.env.PUBLIC_URL + '/img/brcklogo.png'} alt="logo"/>
                    <p>The one stop shop for different templates and assets that are being worked on by the design team</p>
                    <Link to="#">View Template</Link>
                    <div>
                    <ImageLogo src={process.env.PUBLIC_URL + '/img/mojalogo.png'} alt="logo"/>
                    <p>The one stop shop for different templates and assets that are being worked on by the design team. All the rumours have finally died down and many</p>
                    <Link to="#">View Template</Link>
                    </div>
                    <h5><b>ADMIN/SYSTEM DASHBOARDS</b></h5>
                    <p>The one stop shop for the different templates and assets that are being worked on by the design team. All the rumours have finally died down and many.</p>
                    <Link to="#">View Template</Link>
                </Cell>
                <Cell medium={6} className="medium-offset-2">
                <img src={process.env.PUBLIC_URL + '/img/pic1.jpg'} alt="banner"/>
                </Cell>
            </Grid>
        )
    }
}

const ImageLogo = styled.img`
width: 124px;
`
