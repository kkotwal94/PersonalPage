import React from 'react';
import ReactDOM from 'react-dom';
import spacing from 'material-ui/styles/spacing';
import ClearFix from 'material-ui/internal/ClearFix';
let DesktopGutter = spacing.desktopGutter;


export default class FullWidthSection extends React.Component {

  static propTypes: {
    children: React.PropTypes.node,
    contentStyle: React.PropTypes.object,
    contentType: React.PropTypes.string,
    style: React.PropTypes.object,
    useContent: React.PropTypes.bool,
  };

   getDefaultProps() {
    return {
      useContent: false,
      contentType: 'div',
    };
  }

  getStyles() {
    return {
      root: {
        padding: DesktopGutter + 'px',
        boxSizing: 'border-box',
      },
      content: {
        maxWidth: '1200px',
        margin: '0 auto',
      },
      rootWhenSmall: {
        //paddingTop: (DesktopGutter * 2) + 'px',
        //paddingBottom: (DesktopGutter * 2) + 'px',
      },
      rootWhenLarge: {
        //paddingTop: (DesktopGutter * 3) + 'px',
        //paddingBottom: (DesktopGutter * 3) + 'px',
      },
    };
  }



  render() {

  	let {
      style,
      useContent,
      contentType,
      contentStyle,
      ...other
    } = this.props;

    let styles = this.getStyles();

    let content;
    if (useContent) {
      content =
        React.createElement(
          contentType,
          {style: this.mergeStyles(styles.content, contentStyle)},
          this.props.children
        );
    } else {
      content = this.props.children;
    }

    return (
      <ClearFix {...other}
        style={Object.assign(
          styles.root,
          style,
          styles.rootWhenSmall,
          styles.rootWhenLarge)}>
        {content}
      </ClearFix>
    );
  }
}
