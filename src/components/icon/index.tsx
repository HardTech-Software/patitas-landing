import { IconProps } from "@/utils/icon-props";
import React from "react";
import {
  AppStoreIcon,
  GooglePlayIcon,
  LogoFooterIcon,
  LogoIcon,
  MenuIcon,
} from "../icons";
import HomeImage from "../icons/home-image";

const icons = (props?: IconProps) => ({
  logo: <LogoIcon {...props} />,
  menu: <MenuIcon {...props} />,
  "app-store": <AppStoreIcon {...props} />,
  "google-play": <GooglePlayIcon {...props} />,
  "home-image": <HomeImage {...props} />,
  "logo-footer": <LogoFooterIcon {...props} />,
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
