import "./App.css";
import React from "react";
import "react-quill/dist/quill.snow.css";
import { Editor1, Editor2, Editor3 } from "./editors/index";

function App() {
  return (
    <>
      <Editor1 />
      <Editor2 />
      <Editor3 />
    </>
  );
}

export default App;
