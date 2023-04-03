import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MdxImage = forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
  <div className="flex items-center justify-center">
    <Image ref={ref} className={cn("rounded-md", className)} {...props} />
  </div>
));
MdxImage.displayName = "MdxImage";

export default MdxImage;
