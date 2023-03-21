import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MdxImage = forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
  <Image ref={ref} className={cn("rounded-md", className)} {...props} />
));
MdxImage.displayName = "MdxImage";

export default MdxImage;
