import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';


export default class Navigation extends Component{
    constructor(props){
      super(props);
    }

    render() {
        const navBarStyle = {
            height: '50px',
            width: '100%',
            padding:0,
            margin: 0,
            borderBottom: '1px solid rgba(255,255,255,.3)',
            opacity: 0.9,
            background: 'rgba(48, 48, 48, .01)',
            position: 'fixed',
            display: 'inline-block'
        };
        const nameStyle = {
            position: 'relative',
            left: '10px',
            display: 'inline-block',
        };
        const navItems = {
            display: 'inline-block',
            position: 'relative',
            float: 'right',
            top: '15px',
            }
        const itemStyle = {
            display: 'inline-block',
            paddingLeft: '10px',
            color: 'inherit', /* blue colors for links too */
            textDecoration: 'inherit', /* no underline */
        };
        const lastItemStyle = {
            display: 'inline-block',
            paddingLeft: '10px',
            paddingRight: '10px',
            color: 'inherit', /* blue colors for links too */
            textDecoration: 'inherit', /* no underline */
        }
        return(
            <div>
              <Paper  style={navBarStyle} zDepth={1}>
                <p style={nameStyle}>Karan Kotwal</p>
                <div style={navItems}>
                    <a href="#About" style={itemStyle}>About</a>
                    <a href="#Projects" style={itemStyle}>Projects</a>
                    <a href="#Skills" style={itemStyle}>Skills</a>
                    <a href="#Contact" style={lastItemStyle}>Contact</a>
                </div>
              </Paper>

            </div>
        )
    }
}
