import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button } from "@storybook/angular/demo";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => ({
  component: Button,
  props: {
    text: "Hello Button",
  },
});

export const Emoji = () => ({
  component: Button,
  props: {
    text: "😀 😎 👍 💯",
  },
});

Emoji.story = {
  parameters: { notes: "Button中使用Emoji" },
};

export const WithSomeEmojiAndAction = () => ({
  component: Button,
  props: {
    text: "😀 😎 👍 💯",
    onClick: action("组件的事件"),
  },
});

WithSomeEmojiAndAction.story = {
  name: "With Action",
  parameters: { notes: "组件的笔记" },
};

export const ButtonWithLinkToAnotherStory = () => ({
  component: Button,
  props: {
    text: "跳转到Welcome",
    onClick: linkTo("Welcome"),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: "Link跳转",
};
