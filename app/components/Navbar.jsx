import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Scroll from 'react-scroll';



export default class Navigation extends Component{
    constructor(props){
      super(props);
    }
    navigateAbout() {
        console.log(ReactDOM.findDOMNode(this.about));
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
            zIndex: '99999',
            display: 'inline-block'
        };
        const nameStyle = {
            position: 'relative',
            left: '10px',
            top: '15px',
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
            zIndex: '999999',
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
                    <a href="#about" onClick={this.navigateAbout} style={itemStyle}>About</a>
                <a href="#projects" style={itemStyle}>Projects</a>
            <a href="#skills" style={itemStyle}>Skills</a>
        <a href="#contact" style={lastItemStyle}>Contact</a>
                </div>
              </Paper>

            </div>
        )
    }
}
