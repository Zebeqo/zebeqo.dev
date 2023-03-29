import { Tooltip } from "@/ui/primitive/Tooltip";

export interface WithToolTipLogoIconProps {
  LogoIcon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >;
  content: string;
  href: string;
}
export function withToolTipLogoIcon({
  LogoIcon,
  content,
  href,
}: WithToolTipLogoIconProps) {
  return function WithToolTipLogoIconComponent({
    ...props
  }: React.ComponentPropsWithoutRef<"svg">) {
    return (
      <Tooltip content={content} delayDuration={0}>
        <a href={href} target="_blank">
          <LogoIcon {...props} />
        </a>
      </Tooltip>
    );
  };
}
