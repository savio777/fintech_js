import React, { InputHTMLAttributes } from "react";

import { Container, Input, Label } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputCustom: React.FC<IProps> = ({ label, ...rest }) => (
  <Container>
    {label && <Label>{label}</Label>}
    <Input {...rest} />
  </Container>
);

export default InputCustom;
