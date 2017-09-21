import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FullWidthSection from './FullWidthSection';
import FontAwesome from 'react-fontawesome';

export default class Footer extends Component {
  constructor(props){
    super(props);
  }
  _renderFooter() {
    let footerStyles = {
      padding: '100px 0',
      paddingRight: '15px',
      paddingLeft: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
      color: 'black',
      textAlign: 'center',
    };
    let summaryStyle = {
      textAlign: 'center',
      width: '50%',
      margin: '0 auto',
      color: 'black',
    };
    let iconStyle = {
      color: 'black',
      textDecoration: 'none',
    }
    return (
      <FullWidthSection style={footerStyles}>
        <h2>Contact</h2>
        <hr className="barItem"/>
        <div className="summary" style={summaryStyle}>
            <p>Need a web developer? Email me or hit me up on my phone!</p>
          <FontAwesome
            className="phone-icon"
            name="phone"
            size="3x"
          style={iconStyle}/>
          <p>+1 (917) 348-8053</p>
          <FontAwesome
            className="envelope-icon"
            name="envelope"
            size="3x"
          style={iconStyle}/>
        <p><a style={iconStyle} href="mailto:kotwalkaran64@gmail.com">kotwalkaran64@gmail.com</a></p>
          </div>
        </FullWidthSection>
    );
  }

  render() {
    return(
      <div>
      {this._renderFooter()}
    </div>
    );
  }
}
