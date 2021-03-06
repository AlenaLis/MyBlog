// import React, {useState} from "react";
// import "./AddArt.scss"
//
// import Editor, {createEditorStateWithText} from "draft-js-plugins-editor";
//
// import createToolbarPlugin, {Separator} from "draft-js-static-toolbar-plugin";
// import 'draft-js/dist/Draft.css';
//
// import {convertToRaw} from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
// import {
//     BoldButton,
//     CodeBlockButton,
//     CodeButton,
//     HeadlineOneButton,
//     HeadlineThreeButton,
//     HeadlineTwoButton,
//     ItalicButton,
//     OrderedListButton,
//     SubButton,
//     SupButton,
//     UnderlineButton,
//     UnorderedListButton,
// } from "draft-js-buttons";
//
//
// const AddArt = () => {
//
//     const text = "ewfwefwefwefwfewfwfwf";
//
//     const [newArticle, setNewArticle] = useState({
//         title: createEditorStateWithText(text),
//         category: createEditorStateWithText(text),
//         text: createEditorStateWithText(text),
//     })
//
//
//     // const [text, setText] = useState("")
//     const handleChange = (value, key) => {
//         setNewArticle((prevState) => ({
//             ...prevState,
//             [key]: value,
//         }))
//     }
//     const content = newArticle.text.getCurrentContent();
//     const contentToSave = JSON.stringify(convertToRaw(content).blocks);
//     const getCurrentContent = JSON.parse(contentToSave);
//
//     const lastArt = JSON.parse(localStorage.getItem("art"));
//
//     const createNewArt = () => {
//         if (lastArt && lastArt.length > 0) {
//             localStorage.setItem('newArticle', JSON.stringify(newArticle))
//             lastArt.push(newArticle);
//             localStorage.setItem('art', JSON.stringify(lastArt))
//         } else {
//             localStorage.setItem('art', JSON.stringify([newArticle]))
//             console.log('===>newArticle', newArticle);
//         }
//     }
//
//     const toolbarPlugin = createToolbarPlugin({
//         structure: [
//             BoldButton,
//             CodeBlockButton,
//             CodeButton,
//             HeadlineOneButton,
//             HeadlineThreeButton,
//             HeadlineTwoButton,
//             ItalicButton,
//             OrderedListButton,
//             SubButton,
//             SupButton,
//             UnderlineButton,
//             UnorderedListButton,
//         ]
//     });
//     console.log('===>toolbarPlugin', toolbarPlugin);
//     const {Toolbar} = toolbarPlugin;
//     const plugins = [toolbarPlugin];
//     const foc = (e) => {
//         e.editor.focus();
//     };
//
//     return (
//         <div>
//             <div className="addArt__content">
//                 <div>
//                     <h2 className="h2__text"> Add article </h2>
//                 </div>
//                 <div>
//                     <div>
//                         <div className="editor" onClick={foc}>
//                             <Toolbar/>
//                             <form className="valid__form">
//                                 <div className="text" style={{border: '1px solid #E1E1E1', padding: 20}}>
//                                     <Editor
//                                         editorState={newArticle.title}
//                                         onChange={
//                                             (value) => handleChange(value, 'title')
//                                         }
//                                         className="editorContainer"
//                                         placeholder="New Titles"
//                                         plugins={plugins}
//                                         ref={(e) => {
//                                             newArticle.text.editor = e;
//                                         }}
//                                         id="title"
//                                     />
//                                 </div>
//                                 <div className="text" style={{border: '1px solid #E1E1E1', padding: 20}}>
//                                     <Editor
//                                         editorState={newArticle.category}
//                                         onChange={
//                                             (value) => handleChange(value, 'category')
//                                         }
//                                         className="editorContainer"
//                                         placeholder="New Titles"
//                                         plugins={plugins}
//                                         ref={(e) => {
//                                             newArticle.text.editor = e;
//                                         }}
//                                     />
//                                 </div>
//                                 <div className="descript" style={{border: '1px solid #E1E1E1', padding: 20}}>
//                                     <Editor
//                                         editorState={newArticle.text}
//                                         onChange={
//                                             (e) => handleChange(e, 'text')
//                                         }
//                                         className="editorContainer"
//                                         placeholder="New Titles"
//                                         plugins={plugins}
//                                         ref={(e) => {
//                                             newArticle.text.editor = e;
//                                         }}
//                                     />
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                     <div>
//                         {/*{getCurrentContent[0].text}*/}
//                     </div>
//                     <div className="valid__bottom">
//                         <button className="button__valid" onClick={createNewArt}>Publish an article</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default AddArt;
/* eslint-disable react/no-multi-comp */
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const AddArt = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    useEffect(() => {
        console.log(editorState);
    }, [editorState]);
    return (
        <div>
            <h1>React Editors</h1>
            <h2>Start editing to see some magic happen!</h2>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />

            </div>
        </div>
    );
}
export default AddArt;