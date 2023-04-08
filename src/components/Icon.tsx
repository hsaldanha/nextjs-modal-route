import { HTMLAttributes } from "react";
import type { Icon } from "react-feather";

interface IconProps extends HTMLAttributes<SVGElement> {
  icon: Icon;
}

function Icon({ icon, ...props }: IconProps) {
  const Component = icon;

  return (
    <Component
      {...props}
      aria-hidden="true"
      className={`h-4 w-4 text-slate-900 dark:text-slate-50 ${props.className}`}
    />
  );
}

export default Icon;
