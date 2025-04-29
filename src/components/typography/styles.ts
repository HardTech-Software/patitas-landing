import { theme } from "@/helpers/theme";
import { StylesProps } from "@/utils/styles-props";

export const styles: StylesProps = {
  h1: {
    fontSize: 35,
    fontWeight: 700,
    color: theme.secondary,
    lineHeight: 1,
  }, //texto home

  h2: {
    fontSize: 30,
    fontWeight: 600,
    color: theme.primary,
  }, //titulos secciones

  title1: {
    fontSize: 20,
    fontWeight: 700,
    color: theme.primary,
  }, //titulo cards for you y correo footer

  title2: {
    fontSize: 16,
    fontWeight: 700,
    color: theme.primary,
  }, //item header y descargala en

  title3: {
    fontSize: 25,
    fontWeight: 700,
    color: theme.primary,
  }, //precios card, cambian color

  title4: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.white,
  }, //item sidebar

  description1: {
    fontSize: 14,
    fontWeight: 400,
    color: theme.secondary,
  }, //descripcion home
};

export type Variant =
  | "h1"
  | "h2"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "description1";
