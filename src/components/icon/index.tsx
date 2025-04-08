import { IconProps } from "@/utils/icon-props";
import React from "react";
import { LogoIcon } from "../icons";

const icons = (props?: IconProps) => ({
  logo: <LogoIcon {...props} />,
});

export type IconName = keyof ReturnType<typeof icons>;

interface IconComponentProps extends IconProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = icons({ ...props })[name];

  if (!IconComponent) return <></>;

  return <>{IconComponent}</>;
};

export default Icon;
