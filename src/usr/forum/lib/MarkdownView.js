import React from 'react';
import PropTypes from 'prop-types';
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import { withStyles } from '@material-ui/core/styles';
import MarkdownIt from 'markdown-it';
import mila from 'markdown-it-link-attributes';
import './github-markdown.css';

hljs.registerLanguage('javascript', javascript);

export function highlightBlock(codeBlockElement) {
  hljs.highlightBlock(codeBlockElement);
}

export function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str, true).value;
    } catch (__) {}
  }

  return ''; // use external default escaping
}

const styles = theme => ({
  root: {
    fontSize: '14px',
    overflow: 'hidden'
  },
});

window.__openURLInExternalWindow = function (element) {
  if (element && element.href) {
    window.open(element.href, '__blank').focus();
  }
  return false;
};

class MarkdownView extends React.Component {
  static propTypes = {
    // A markdown text for rendering
    markdownContent: PropTypes.string,
  };

  static defaultProps = {
    markdownContent: '### Empty content',
  };

  constructor (props) {
    super(props);
    this.markdown = new MarkdownIt({
      linkify: true,
      highlight: markdownHighlight,
    });
    this.markdown.use(mila, {
      attrs: {
        target: '_blank',
        rel: 'noopener',
        onclick: 'return __openURLInExternalWindow(this)'
      }
    });
  }

  render () {
    const { markdownContent, classes } = this.props;
    if (markdownContent) {
      return (
        <div
          className={`${classes.root} markdown-body`}
          dangerouslySetInnerHTML={{
            __html: this.markdown.render(markdownContent)
          }}
        />
      );
    }
    return <span>Empty content</span>
  }
}

export default withStyles(styles)(MarkdownView);