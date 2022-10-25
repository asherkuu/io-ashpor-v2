import React, { useRef, useEffect } from "react";
import ReactQuill, { formats } from "react-quill";
// import EditorToolbar from "./Toolbar";
// import { FaHashtag } from "react-icons/fa";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import Viewer from "./Viwer";
import { EditorWrap } from "./styled";

hljs.configure({
  languages: ["javascript", "html", "jsx", "css", "ruby"],
});

// let Quill = ReactQuill.Quill;
// let Embed = Quill.import("blots/block/embed");

// class Variable extends Embed {
//   static create(value) {
//     let node = super.create(value);
//     node.textContent = value;
//     return node;
//   }
//   static value(node) {
//     return node.childNodes[0].textContent;
//   }
// }

// Variable.blotName = "variable";
// Variable.tagName = "span";
// Variable.className = "skills";

// Quill.register(Variable);

// const formats = [
//   "header",
//   "bold",
//   "italic",
//   "underline",
//   "strike",
//   "blockquote",
//   "list",
//   "bullet",
//   "indent",
//   "link",
//   "image",
//   "code-block",
// ];

function imageHandler() {
  const range = this.quill.getSelection();
  const url = prompt("Insert image URL");
  if (url) {
    this.quill.insertEmbed(range.index, "image", url);
  }
}

const modules = {
  syntax: {
    highlight: (value) => hljs.highlightAuto(value).value,
  },
  toolbar: {
    container: [
      ["bold", "italic", "underline", "strike", "link"], // toggled buttons
      ["blockquote", "code-block", "image"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
    handlers: {
      image: imageHandler,
    },
  },
};

const Editor = ({ onChange, editValues = "" }) => {
  const ref = useRef();
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    editValues && setValue(editValues);
  }, [editValues]);

  const handleChange = (value) => {
    setValue(value);
    onChange(value);
  };

  const inserMention = (ref) => {
    const editor = ref.getEditor();
    let range = editor.getSelection();
    let position = range ? range.index : 0;
    editor.insertEmbed(position, "variable", "skills");
  };

  return (
    <EditorWrap>
      {/* <EditorToolbar /> */}
      {/* 
      <button
        type="button"
        className="btn btn-success"
        onClick={() => inserMention(ref.current)}
      >
        <FaHashtag />
      </button> */}
      <ReactQuill
        ref={ref}
        theme="snow"
        value={value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
      <div className="text-editor-viewer">
        <Viewer contents={value} />
      </div>
    </EditorWrap>
  );
};

export default Editor;
