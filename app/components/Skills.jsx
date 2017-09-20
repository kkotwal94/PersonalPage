import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FullWidthSection from './FullWidthSection';
import {Grid, Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Skills extends Component {
  constructor(props){
    super(props);
  }
  _renderSkills(){
    let skillsStyle = {
      backgroundColor: 'white',
      padding: '100px 0',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      color: 'white',
      textAlign: 'center',
    };

    let iconStyle = {
      color: '#033649',
    }
    let headerStyle = {

    };
    return(
      <FullWidthSection style={skillsStyle}>
        <h1 className="headerBlack">Skills</h1>
      <hr className="barItem black"/>
    <div className="container">
      <Row>
        <Col lg={3} md={6}>
          <div className="skill">
            <FontAwesome
              className="skill-laptop"
              name='laptop'
              size='4x'
              style={iconStyle}
            />
          <h3 className="headerBlack">
            Front-End
          </h3>
          <ul>
            <li className="headerBlack">ReactJS</li>
            <li className="headerBlack">HTML</li>
            <li className="headerBlack">Javascript</li>
            <li className="headerBlack">CSS/LESS</li>
          </ul>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="skill">
            <FontAwesome
              className="skill-server"
              name='server'
              size='4x'
              style={iconStyle}
            />
          <h3 className="headerBlack">
            Databases
            </h3>
            <ul>
              <li className="headerBlack">SQL</li>
              <li className="headerBlack">MongoDB</li>
            </ul>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="skill">
            <FontAwesome
              className="skill-database"
              name='database'
              size='4x'
              style={iconStyle}
            />
            <h3 className="headerBlack">
              Back-End
            </h3>
            <ul>
              <li className="headerBlack">NodeJS</li>
            <li className="headerBlack">ASP.NET</li>
          <li className="headerBlack">Web API</li>
        <li className="headerBlack">C#</li>
      <li className="headerBlack">Express.js / IO.js</li>
    <li className="headerBlack">Socket.IO</li>
            </ul>
          </div>
        </Col>
        <Col lg={3} md={6}>
          <div className="skill">
            <FontAwesome
              className="skill-gears"
              name='gears'
              size='4x'
              style={iconStyle}
            />
            <h3 className="headerBlack">
              Other
            </h3>
            <ul>
              <li className="headerBlack">Redux Framework</li>
            <li className="headerBlack">C / C++</li>
          <li className="headerBlack">Java</li>
          <li className="headerBlack">Python</li>
        <li className="headerBlack">Webpack</li>
      <li className="headerBlack">MochaJS</li>
    <li className="headerBlack">Git / Visual Studio</li>
  <li className="headerBlack">Apache / Linux</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
      </FullWidthSection>
    );
  }

  render() {
    return(
      <div className="skills">
        {this._renderSkills()}
      </div>
    );
  }
}
