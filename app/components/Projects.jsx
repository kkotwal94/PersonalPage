import React, {Component} from 'React';
import ReactDOM from 'react-dom';
import FullWidthSection from './FullWidthSection';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Projects extends Component {
  constructor(props){
    super(props);
  }

  _renderProjects() {
    return(
      <FullWidthSection>

      </FullWidthSection>
    );
  }
  render(){
    return (
      <div>
        {this._renderProjects()}
      </div>
    );
  }
}
