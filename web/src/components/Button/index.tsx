import React, { ButtonHTMLAttributes } from "react";

import { Container, Text } from "./styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean;
}

const Button: React.FC<IProps> = ({ children, full = false, ...rest }) => (
  <Container full={full} {...rest}>
    <Text>{children}</Text>
  </Container>
);

export default Button;
