import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/ui/primitive/Badge";
import type { Color } from "@/lib/color";
import { colorArray } from "@/lib/color";

const meta = {
  title: "Badge",
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: colorArray,
    },
  },
} satisfies Meta;

export default meta;

export const Badge_: StoryObj<{ color: Color; text: string }> = {
  args: {
    color: "accent",
    text: "Badge",
  },
  render: ({ color, text }) => <Badge color={color}>{text}</Badge>,
};
