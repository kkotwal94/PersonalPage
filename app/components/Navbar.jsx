import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Scroll from 'react-scroll';
import $ from 'jquery';



export default class Navigation extends Component{
    constructor(props){
      super(props);
    }
    navigate(type) {
        $('.html, body').animate({
          scrollTop: $("." + type).offset().top},
          'slow');
      }

   handleScroll(){
         let navbar = $("#nav");
         let windowsScrollTop  = window.pageYOffset;
         if(windowsScrollTop > 0){
           navbar[0].classList.add("navbar-fixed-top");
         }else{
           navbar[0].classList.remove("navbar-fixed-top");
         }
      }

   componentDidMount() {
   window.addEventListener('scroll', this.handleScroll);
   }

   componentWillUnmount() {
   window.removeEventListener('scroll', this.handleScroll);
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
              <Paper  style={navBarStyle} zDepth={1} ref={(input) => { this.navbar = input;}} id="nav">
                <p style={nameStyle}>Karan Kotwal</p>
                <div style={navItems}>
                    <a href="#about" onClick={() => this.navigate('about')} style={itemStyle}>About</a>

            <a href="#skills" onClick={() => this.navigate('skills')} style={itemStyle}>Skills</a>
<a href="#projects" onClick={() => this.navigate('projects')} style={itemStyle}>Projects</a>
    <a href="#contact" onClick={() => this.navigate('contacts')} style={lastItemStyle}>Contact</a>
                </div>
              </Paper>

            </div>
        )
    }
}
