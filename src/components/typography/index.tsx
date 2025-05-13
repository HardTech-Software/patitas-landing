import { theme } from "@/helpers/theme";
import { styles, Variant } from "./styles";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: Variant;
  color?: keyof typeof theme | "inherit";
}

const Typography = ({
  variant = "description1",
  style,
  color,
  ...props
}: TypographyProps) => {
  const rootStyles = {
    ...styles[variant],
    color:
      color === "inherit"
        ? "inherit"
        : color
        ? theme[color]
        : styles[variant].color,

    ...style,
  };

  return <p style={rootStyles} {...props} />;
};

export default Typography;
