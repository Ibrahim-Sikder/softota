import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from Next.js

// Use dynamic import to load react-quill only on the client-side
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // Import styles

const TextEditor = ({ value, onChange }) => {
  const [quill, setQuill] = useState(null);
  
  return (
    <div>
      <ReactQuill
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          [{ 'font': [] }],
          [  { size: [ 'small', false, 'large', 'huge' ]}],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['bold', 'italic', 'underline'],
          [{ align: [] }],
          ['link', 'image'],
          ['video'],
          ['clean'],
          ['blockquote', 'code-block'],
          ['direction'],
          ['formula'],
          ['strike'],
          
          
        
        ],
      }}
    />
    </div>
  );
};

export default TextEditor;