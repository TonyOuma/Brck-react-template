import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Row, Grid, Cell, Menu, MenuItem } from 'react-foundation';
import logo from '../logo.svg'

export default class NavBar extends Component {
    render() {
        return (
            <Grid>
                <Cell medium={3}>
                    <Link to="/"><img src={logo} className="header-logo" alt="BRCKLOGO"/></Link>
                </Cell>
                <Cell medium={9}>
                    <div className="float-right">
                        <Menu>
                            <MenuItem><Link to="/">Home</Link></MenuItem>
                            <MenuItem><Link to="/mojaapp">Moja App</Link></MenuItem>
                            <MenuItem><Link to="/admintemplates">Admin Templates</Link></MenuItem>
                            <MenuItem><Link to="/websites">Websites</Link></MenuItem>
                            <MenuItem><Link to="/uidesign">UI Design</Link></MenuItem>
                            {/* <MenuItem><Link to="/default"></Link></MenuItem> */}
                        </Menu>
                    </div>
                </Cell>
            </Grid>

        )
    }
}
