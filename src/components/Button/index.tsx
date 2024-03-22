import { FC } from "react";
import { Btn } from "./styles";
/**Props */
import ButtonProps from "./ButtonProps";

const Button: FC<ButtonProps> = ({
  children, ...props
}): JSX.Element => {
  return <Btn {...props}>{children}</Btn>
};

export default Button;