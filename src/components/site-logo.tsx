import Image from "next/image";
import { cn } from "@/lib/utils";
import lofistack_logo from "../../public/lofistack-logo.png";

export function SiteLogo({
  className,
  width = 150,
  ...props
}: Omit<React.ComponentProps<typeof Image>, "src" | "alt">) {
  return (
    <Image
      src={lofistack_logo}
      alt="Site Logo"
      width={width}
      className={cn("", className)}
      {...props}
    />
  );
}
