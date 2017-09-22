import React, {Component} from 'React';
import ReactDOM from 'react-dom';
import FullWidthSection from './FullWidthSection';

export default class About extends Component {
  constructor(props){
    super(props);
  }
  _renderAbout(){
    let aboutSectionStyle = {
      backgroundColor: '#033649',
      padding: '100px 0',
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
    return(
      <FullWidthSection style={aboutSectionStyle}>
        <div>
          <h2>Who I Am</h2>
          <hr className="barItem"/>
        <div className="summary" style={summaryStyle}>
            My name is Karan Kotwal. Im a avid web developer and received my
            Computer Science Bachelors from University of Delaware. I'm really into
            MOBAs such as Dota 2, and im super into Music, especially Hip-Hop. In my free time
            I develop applications around my two hobbies. Recently just got my first dog so im learning the ropes
            of raising and training a dog as well.
          </div>
        </div>
      </FullWidthSection>
    );
  }
  render() {
    return (
      <div className="about" ref={(input) => { this.about = input; }}>
        {this._renderAbout()}
      </div>
    );
  }
}
