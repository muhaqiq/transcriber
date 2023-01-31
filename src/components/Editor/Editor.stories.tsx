import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Editor from "./Editor";

export default {
  title: "MuhaqiqTranscriber/Editor",
  component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Editor!",
};
