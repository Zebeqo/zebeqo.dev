import type { WithToolTipLogoIconProps } from "@/components/LogoIcons/withToolTipLogoIcon";
import { TwitterIcon } from "@/ui/icon/24/TwitterIcon";
import { GithubIcon } from "@/ui/icon/24/GithubIcon";

export const sns: WithToolTipLogoIconProps[] = [
  {
    LogoIcon: TwitterIcon,
    content: "Twitter",
    href: "https://twitter.com/zebeqo",
  },
  {
    LogoIcon: GithubIcon,
    content: "Github",
    href: "https://github.com/Zebeqo/",
  },
];
