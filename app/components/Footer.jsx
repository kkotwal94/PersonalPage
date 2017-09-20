import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FullWidthSection from './FullWidthSection';

export default class Footer extends Component {
  constructor(props){
    super(props);
  }
  _renderFooter() {
    let aboutStyles = {
      backgroundColor: 'black',
    };
    return (
      <FullWidthSection style={aboutStyles}>
                  <p>
                    Programmed and Developed by Karan Kotwal based of Material Design(Material-UI)
                    <br/>
                  </p>
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
