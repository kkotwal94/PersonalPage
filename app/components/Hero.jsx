import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FullWidthSection from './FullWidthSection';
import video from '../video/Inbox-Zero.mp4';
import videom from '../video/Inbox-Zero.webm';
import videoimg from '../images/Inbox-Zero.jpg';
import karanimg from '../images/Karan.jpg';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
export default class Hero extends Component {
  constructor(props){
    super(props);
  }

  _renderHero() {
    let heroStyles = {
      backgroundColor: '#033649',
      padding: 0,
    };
    let videoStyle = {
      width: '100%',
    };
    let avatarModuleStyle = {
      margin: '0 auto',
      position:'absolute',
      width: '100%',
      height: '100%',
      opacity: '1',
      zIndex: '5000',
      textAlign: 'center',
    };
    let homepageStyle = {
      height: '100%',
    };
    let aboutMeStyle = {
      backgroundColor: '#033649',
    }
    return (
      <FullWidthSection style={heroStyles}>
        <div className="homepage-hero-module" style={homepageStyle}>
          <div className="video-container">
            <div className="avatar-module" style={avatarModuleStyle}>
              <h1 className="header">Karan Kotwal</h1>
              <br/>
              <br/>
              <p className="header-text">Read below to learn about me and my passion</p>
              <br/>
              <RaisedButton label="About Me" buttonStyle={aboutMeStyle} />
            </div>
            <video preload="auto" style={videoStyle} autoPlay loop="loop" className="fillWidth" src={video}>
            <source />
            </video>

          </div>
        </div>
      </FullWidthSection>
    );
  }

  render() {
    return(
      <div>
      {this._renderHero()}
      </div>
    );
  }
}
