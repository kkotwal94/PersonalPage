import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navigation from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import video from '../video/Inbox-Zero.mp4';
import videom from '../video/Inbox-Zero.webm';
import videoimg from '../images/Inbox-Zero.jpg';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Github from './Github';



export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Github />
        <Footer />
      </div>
    </MuiThemeProvider>
    );
  }
}
