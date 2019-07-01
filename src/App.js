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
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        } }
        onChange={ this.handleEditorChange }
      />
    );
  }
}

export default App;
