// import React from 'react';
// import {EditorState} from 'draft-js';
// import Editor from 'draft-js-plugins-editor';
//
// import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
// import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
//
// import 'draft-js/dist/Draft.css';
// import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
// import 'draft-js-static-toolbar-plugin/lib/plugin.css';
// import {
//   ItalicButton,
//   BoldButton,
//   UnderlineButton,
//   CodeButton,
//   Separator
// } from "draft-js-buttons";
//
// const inlineToolbarPlugin = createInlineToolbarPlugin({
//   //I read somewhere that this plug-in needs this structure passed to it,
//   //but the example in the docs did not use it, and they are undefined anyway
//   structure: [
//     BoldButton,
//     ItalicButton,
//     UnderlineButton,
//     CodeButton,
//     Separator,
//   ],
// });
//
// const toolbarPlugin = createToolbarPlugin();
//
// class TextEditor extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {editorState: EditorState.createEmpty()};
//     this.onChange = (editorState) => this.setState({editorState});
//   }
//
//   render() {
//     return (
//       <Editor
//         editorState={this.state.editorState}
//         onChange={this.onChange}
//         plugins={[inlineToolbarPlugin, toolbarPlugin]}
//       />
//     );
//   }
// }
//
// export default TextEditor;
