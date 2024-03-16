import React from "react";
import ReactQuill from "react-quill";

import { LOREM } from "./constants";

export default function Editor1() {
  return (
    <ReactQuill
      value={LOREM}
      modules={{
        toolbar: [
          ["bold", "italic"],
          [{ list: "ordered" }, { list: "bullet" }, "task"],
          ["header", "blockquote", "code-block"],
          ["link"],
          [
            {
              background: [],
            },
          ],
        ],
      }}
    />
  );
}
