import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FullWidthSection from './FullWidthSection';
import Navigation from './Navbar';
import video from '../video/Inbox-Zero.mp4';
import videom from '../video/Inbox-Zero.webm';
import videoimg from '../images/Inbox-Zero.jpg';


export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let aboutStyles = {
      backgroundColor: 'red',
    };

    let heroStyles = {
      backgroundColor: 'black',
      padding: 0,
    };
    let videoStyle = {
      width: '100%',
    }
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <Navigation />
      <FullWidthSection style={heroStyles}>
        <div className="homepage-hero-module">
          <div className="video-container">

            <video preload="auto" style={videoStyle} autoPlay loop="loop" className="fillWidth" src={video}>
            <source />
            </video>

          </div>
        </div>
      </FullWidthSection>
      <FullWidthSection style={aboutStyles}>
                  <p>
                    Programmed and Developed by Karan Kotwal based of Material Design(Material-UI)
                    <br/>
                  </p>
        </FullWidthSection>
      </div>
    </MuiThemeProvider>
    );
  }
}
