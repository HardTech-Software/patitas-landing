import { theme } from "@/helpers/theme";
import { StylesProps } from "@/utils/styles-props";

export const styles: StylesProps = {
  h1: {
    fontSize: "3rem",
    fontWeight: 700,
    color: theme.secondary,
    lineHeight: 1,
  },

  h2: {
    fontSize: "2.5rem",
    fontWeight: 600,
    color: theme.primary,
  },

  title1: {
    fontSize: "1.3rem",
    fontWeight: 700,
    color: theme.primary,
  },

  title2: {
    fontSize: "1rem",
    fontWeight: 700,
    color: theme.primary,
  },

  description: {
    fontSize: "14px",
    fontWeight: 400,
    color: theme.secondary,
  },
  description2: {
    fontSize: "1rem",
    fontWeight: 700,
    color: theme.secondary,
  },
};

export type Variant =
  | "h1"
  | "h2"
  | "title1"
  | "title2"
  | "description"
  | "description2";
