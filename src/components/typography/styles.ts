import { theme } from "@/helpers/theme";
import { StylesProps } from "@/utils/styles-props";

export const styles: StylesProps = {
  h1: {
    fontSize: 35,
    fontWeight: 700,
    color: theme.secondary,
    lineHeight: 1,
  },

  h2: {
    fontSize: 30,
    fontWeight: 600,
    color: theme.primary,
  },

  title1: {
    fontSize: 20,
    fontWeight: 700,
    color: theme.primary,
  },

  title2: {
    fontSize: 16,
    fontWeight: 700,
    color: theme.primary,
  },

  title3: {
    fontSize: 25,
    fontWeight: 700,
    color: theme.primary,
  },

  title4: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.white,
  },

  description1: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.secondary,
  },

  description2: {
    fontSize: 18,
    fontWeight: 400,
    color: theme.secondary,
  },
};

export type Variant =
  | "h1"
  | "h2"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "description1"
  | "description2";
