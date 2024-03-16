import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

function App() {
  const [editorValue, setEditorValue] = useState("");

  return (
    <>
      <ReactQuill
        value={editorValue}
        modules={{
          toolbar: [
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }, "task"],
            [
              "header",
              "blockquote",
              "code-block",
              // 'code' //need to handle both in a smart way
            ],
            ["link"],
            [
              {
                background: [],
              },
            ],
          ],
        }}
        onChange={(value) => {
          setEditorValue(value);
        }}
      />
      <ReactQuill
        value={editorValue}
        modules={{
          toolbar: [
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }, "task"],
            [
              "header",
              "blockquote",
              "code-block",
              // 'code' //need to handle both in a smart way
            ],
            ["link"],
            [
              {
                background: [
                  "",
                  "rgba(220, 131, 131, 0.4)",
                  "rgba(176, 161, 73, 0.4)",
                  "rgba(122, 177, 110, 0.4)",
                  "rgba(104, 164, 226, 0.4)",
                  "rgba(183, 139, 209, 0.4)",
                  "rgba(1,1,1,0.2)",
                ],
              },
            ],
          ],
        }}
        onChange={(value) => {
          setEditorValue(value);
        }}
      />
    </>
  );
}

export default App;
