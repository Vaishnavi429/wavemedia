import React, { useState } from 'react'
import { Editor, EditorState, ContentState, convertFromHTML } from "draft-js";
import draftjsToHtml from 'draftjs-to-html';
import './PreviewData.scss'
import data from '../blogData';
export default function DisplayData({ id }) {
  let [editorState, onEditorStateChange] = useState()



  const blogData = data();
  let postInfo = blogData.filter((data) => data.id === id);
  let showing_data = postInfo[0].content
  let html_Data = draftjsToHtml(showing_data)

  console.log(html_Data);
  const blocksFromHTML = convertFromHTML(html_Data);
  const content = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );


  return (
    <div className='preview-editor'>
      <Editor
        editorState={EditorState.createWithContent(content)}
        readOnly={true}
        onEditorStateChange={onEditorStateChange}
        toolbarHidden />
    </div>
  )
}

