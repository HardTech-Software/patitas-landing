import { theme } from "@/helpers/theme";
import { styles, Variant } from "./styles";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: Variant;
  color?: keyof typeof theme;
}

const Typography = ({
  variant = "description",
  style,
  color,
  ...props
}: TypographyProps) => {
  const rootStyles = {
    ...styles[variant],
    color: color ? theme[color] : styles[variant].color,
    ...style,
  };

  return <p style={rootStyles} {...props} />;
};

export default Typography;
