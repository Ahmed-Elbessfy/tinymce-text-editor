import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        apiKey='gjf2owkeqsrqujf2rj9osgukukffn7f1sggp5pjx09o48x9c'
        init={ {
          // adding textpattern plugin to enable adding lists using keyboard shortcuts
          // adding lists plugin to enable adding lists using toolbar
          // adding advlist -- advanced lists -- plugin to enable adding custom lists :(( roman, greek and alpha)) using toolbar
          plugins: 'link image code textpattern lists advlist',
          selector: "textarea",  // select the editor main element
          // determine toolbar options
          // as we use lists plugin, we can add numlist and bullist in toolbar
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | numlist bullist',
          // assign commands to specified keyboard shortcuts
          textpattern_patterns: [
            // unordered list
            // adding unordered list item with empty circle bullet using specified keyboard shortcuts
            { start: '* ', cmd: 'InsertUnorderedList', value: { 'list-style-type': 'circle' } },
            // adding unordered list item with filled circle bullet using specified keyboard shortcuts
            { start: '** ', cmd: 'InsertUnorderedList', value: { 'list-style-type': 'disc' } },
            // adding unordered list item with filled square bullet using specified keyboard shortcuts
            { start: '- ', cmd: 'InsertUnorderedList', value: { 'list-style-type': 'square' } },

            // ordered list
            // adding ordered list item with decimal number using specified keyboard shortcuts
            { start: '1. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' } },
            { start: '1) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' } },
            // adding ordered list item with lower alphabetical letters using specified keyboard shortcuts
            { start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' } },
            { start: 'a) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' } },
            // adding ordered list item with upper alphabetical letters using specified keyboard shortcuts
            { start: 'A. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'upper-alpha' } },
            { start: 'A) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'upper-alpha' } },
            // adding ordered list item with lower roman letters using specified keyboard shortcuts
            { start: 'i. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' } },
            { start: 'i) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' } },
            // adding ordered list item with upper roman letters using specified keyboard shortcuts
            { start: 'I. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'upper-roman' } },
            { start: 'I) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'upper-roman' } },
            // adding ordered list item with greek letters using specified keyboard shortcuts
            { start: 'g. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-greek' } }
          ]
        } }
        onChange={ this.handleEditorChange }
      />
    );
  }
}

export default App;
