import type { Meta, StoryObj } from "@storybook/react";
import { LikeButton } from "@/ui/general/LikeButton";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "LikeButton",
  component: LikeButton,
} satisfies Meta<typeof LikeButton>;

export default meta;
type Story = StoryObj<typeof LikeButton>;

export const LikeButton_: Story = {
  args: {
    step: 0,
    onClick: action("button clicked"),
  },
  argTypes: {
    step: {
      control: {
        type: "range",
        min: 0,
        max: 3,
      },
    },
  },
};
