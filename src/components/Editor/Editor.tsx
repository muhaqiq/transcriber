import React from "react";

export interface EditorProps {
  label: string;
}

const Editor = (props: EditorProps) => {
  return <h1>{props.label}</h1>;
};

export default Editor;
