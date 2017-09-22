import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FullWidthSection from './FullWidthSection';
import {Grid, Row, Col} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import passions from '../images/20kpassions.png';
import boardgameselector from '../images/boardgameselector.png';
import chatapp from '../images/chatapp.jpg';
import csgo from '../images/csgo.jpg';
import isometricreportprocessor from '../images/IsomorphicReportProcessor.png';
import kareddit from '../images/kareddit.png';
import parkinglotmanager from '../images/parkinglotmanager.png';
import parsonsproblems from '../images/parsonsproblems.png';
import toolazyto from '../images/TooLazyTo.png';

export default class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      source: "",
      demo: "",
      type: "",
    };
  }

  parsonsource = () => {
    window.location.href = "https://github.com/kkotwal94/ParsonsProject";
  }
  parsonsite = () => {
    window.location.href = "http://parsons.kkotwal.me";
  }
  passionsource = () => {
    window.location.href = "https://github.com/kkotwal94/20000Passions";
  }
  passionsite = () => {
    window.location.href = "http://20000Passions.kkotwal.me";
  }
  sourceRedirect =() =>{
  	window.location.href = "https://github.com/kkotwal94/IsoReportProcessor";
  }
  isoSite = () => {
    window.location.href ="http://isoreports.kkotwal.me/"
  }
  lazysource = () => {
  	window.location.href ="https://github.com/kkotwal94/TooLazyTo";
  }

  lazysite = () => {
  	window.location.href ="http://toolazy.kkotwal.me/";
  }

  parkingsite = () => {
  	window.location.href ="http://parking.kkotwal.me/";
  }

  parkingsource = () => {
  	window.location.href ="https://github.com/kkotwal94/ParkingLotProj";
  }

  karedditsite = () => {
   window.location.href ="http://kareddit.kkotwal.me/";
  }

  karedditsource = () => {
   window.location.href ="https://github.com/kkotwal94/Kareddit";
  }

  chatsite = () => {
  	window.location.href = "http://chat.kkotwal.me/";
  }

  chatsource = () => {
  	window.location.href = "https://github.com/kkotwal94/ChatApp";
  }

  boardsite = () => {
  	window.location.href ="http://ec2-52-11-66-109.us-west-2.compute.amazonaws.com/";
  }

  boardsource = () => {
  	window.location.href ="https://github.com/kkotwal94/BoardGameSelector";
  }

  d3dsource = () => {
  	window.location.href ="https://github.com/kkotwal94/Counterstrike-GO";
  }

  handleOpen = (type) => {
    this.setState({open: true});
    this.setState({type: type});
    console.log(type);
  };

  handleClose = () => {
    this.setState({open: false});
  };

  _renderModal() {

    let source ="";
    let demo = "";
    let title ="";
    let description = "";
    switch(this.state.type){
      case "iso":
        source = this.sourceRedirect;
        demo = this.isoSite;
        title ="Isomorphic Report Processor";
        description = "A project which was done at my Internship at A. Duie Pyle. It involved me learning Flux, webpack, SCSS, Isojs, and react-router. Using all these tools along with ReactJS/Mongo/Node I was able to produce a Web App that can create reports, join reports, delete reports, edit reports, and add SubReports (creating a tree like data-structure). Most importantly it was made so a Manager can select his employees, and add them under his jurisdiction, and then assign them reports. While doing all this, all Users who belong to the manager/boss can only see Documents they were assigned or are involved in.";
        break;
      case "lazy":
        source = this.lazysource;
        demo = null;
        title = "TooLazyTo";
        description = "Too Lazy To... is a app created to have people exchange favors with each other, whether its through money or other favors itself, like a oncampus craigslist, except you have rep. So dont lose your street cred by forgetting to hold up your end of the bargain. Really, you dont have to ask for anything either, a true hero would do some things for free! Through this app (Node, Mongo, React, Express) I learned that it was terribly hard to communicate between components without writing fragile code. Which was when I discovered react. I also learned that load time and anything more than a second feels like forever.";
        break;
      case "chat":
        source = this.chatsource;
        demo = this.chatsite;
        title = "Chat App";
        description = "This is my chat app done with socket.io and javascript. The CSS is pretty dank. Gained experience with socket.io.";
        break;
      case "csgo":
        source = this.d3dsource;
        demo = null;
        title= "CSGO Chams";
        description = "This was a D3D wallhack made in C++, was never publicized or monetized or shared. Was already detected by their anti-cheat, however I messed around with it offline(NON-VAC servers). It just hooks on to d3d9, overwrites endscene, DrawIndexedPrimitive, and registers its own colors. The magic happens when we disable the zbuffer allowing us to see them through walls. Render colors in Endscene, disable z-buffer in DIP.";
        break;
      case "kareddit":
        source = this.karedditsource;
        demo = null;
        title = "KaReddit";
        description = "This was done for an Advanced Web Technologies course. It is a reddit clone and has most of the same functionality. You can have a link post, or just a body post, or even both. It was my first attempt at making a solo stack-based website. The idea was inherited from the MEAN stack, except using Angular I used React.";
        break;
      case "parkinglot":
        source = this.parkingsource;
        demo = null;
        title = "Parking Lot Application"
        description = "A parking lot system programmed in NodeJS, ReactJS, ExpressJS, and templating. I used mongodb for a database. This project just randomizes all the users that are signed up with a profile to a parking spot. The slick part is their is a admin profile to it. The admin can add violations based off user or vehicle information, the admin can also edit profiles and select slots for users to stop at. The admin can most importantly add violations and notes, whether they have the user or not. If the user is not determined when adding a violation, the admin may assign a vehicle a violation, and then a vehicle to a user when they figure it out who the violation belongs to. The user may do all the same but they cannot edit info like parking lot #, or tag #s. They can however have multiple vehicles and select the one that is currently in use. If you decide to pull it, create some users, and create a user with the id Admin, In the demo the admin login credentials admin, 123";
        break;
      case "boardgame":
        source = this.boardsource;
        demo= null;
        title = "Board Game";
        description = "This was a app to take in a lot of board games (100+) and sort them by max player, min player, duration, rank, and it they can be searched. Was done to learn ajax.";
        break;
      case "passion":
        source = this.passionsource;
        demo = this.passionsite;
        title = "20k Passions";
        description = "20k passions is a idea formed by Zachary Jones at University of Delaware, I was just the one to implement a cointainer to express these ideas. That being said, the idea was to take a passion a user had and pitch it, in video or textual format. In a sense those with similar passions could band together and create some of their own original collective idea. This app was a representation of that (work is still left to be done). However most of the fundamental ideas are implemented.";
        break;
      case "parsons":
        source = this.parsonsource;
        demo = this.parsonsite;
        title = "Parsons Problem App";
        description = "This is a app for students to answer / solve parsons problems. A teacher or user can generate a parsons problem. After selecting to answer a different parsons problem in a different view, you must rearrange the code lines to properly solve the problem. This was done with React Drag-N-Drop, along with the redux framework.";
        break;
      default:
        source = null;
        demo = null;
    };
    let disabled;
    if(demo == null){
      disabled = true;
    } else {
      disabled =false;
    }
    const style = {
      margin: 12,
    };
    const actions = [
      <RaisedButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
        style={style}
      />,
    <RaisedButton
      label="View Source"
      primary={true}
      ref={(input) => { this.modalSource = input; }}
      onClick={source}
      style={style}
    />,
    <RaisedButton
      label="View Demo"
      primary={true}
      ref={(input) => { this.modalDemo = input; }}
      onClick={demo}
      disabled = {disabled}
      style={style}
    />,
  ];
  return (
    <div>
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        ref={(input) => {this.modal = input;}}
        >
          <div>
          <p ref={(input) => { this.modalDescription = input; }}>{description}</p>
        </div>
        </Dialog>
    </div>
  );
  }
  _renderProjects() {
    const columnStyle = {
      paddingLeft: '0px',
      paddingRight: '0px',
    }
    const sectionStyle = {
     padding: '0px',
    }
    const imgStyle = {
      minHeight: '400px',
      cursor: 'pointer',
    }
    return(
      <FullWidthSection style={sectionStyle}>
        <div className="container-fluid">
          <Row>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={passions} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("passion")}/>
            </Col>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={parsonsproblems} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("parsons")}/>
            </Col>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={isometricreportprocessor} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("iso")}/>
            </Col>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={toolazyto} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("lazy")}/>
            </Col>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={parkinglotmanager} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("parkinglot")}/>
            </Col>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={chatapp} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("chat")}/>
            </Col>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={kareddit} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("kareddit")}/>
            </Col>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={boardgameselector} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("boardgame")}/>
            </Col>
            <Col lg={4} sm={6} style={columnStyle}>
              <img src={csgo} className="img-responsive" style={imgStyle} onClick={() => this.handleOpen("csgo")}/>
            </Col>
          </Row>
        </div>
      </FullWidthSection>
    );
  }
  render(){
    return (
      <div className="projects">
        {this._renderModal()}
        {this._renderProjects()}

      </div>
    );
  }
}
