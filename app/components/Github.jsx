import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FullWidthSection from './FullWidthSection';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';

export default class Github extends Component {
  constructor(props){
    super(props);
  }

  _renderGithub() {
    let githubSectionStyle = {
      backgroundColor: '#222',
      padding: '75px 0',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      color: 'white',
      textAlign: 'center',
    };
    let summaryStyle = {
      textAlign: 'center',
      width: '50%',
      margin: '0 auto',
    }
    return (
      <FullWidthSection style={githubSectionStyle}>
        <h1>Check out my Github!</h1>
      <div>
        <RaisedButton
          icon={<FontIcon className="muidocs-icon-custom-github" />}
          href="http://github.com/kkotwal94"
          target="_blank"
          label="Github"/>
      </div>
      </FullWidthSection>
    );
  }

  render() {
    return (
      <div>
        {this._renderGithub()}
      </div>
    );
  }
}
