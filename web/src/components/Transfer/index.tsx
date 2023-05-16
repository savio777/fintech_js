import React from "react";
import { ITransfer } from "../../services/Account/TransfersListRequest";

import { formatPrice } from "../../utils/mask";
import { Container, Title, SubTitle } from "./styles";

interface IProps extends ITransfer {
  type?: "add" | "sub";
}

const Transfer: React.FC<IProps> = ({
  value,
  through_transfer,
  type = "add",
  accountRecipient = undefined,
  accountSender = undefined,
}) => (
  <Container type={type}>
    <Title>{formatPrice(value)}</Title>
    <SubTitle>{through_transfer}</SubTitle>
    <SubTitle>
      usuário:{' '}
      {type === "add"
        ? accountSender?.user?.name
        : accountRecipient?.user?.name}
    </SubTitle>
  </Container>
);

export default Transfer;
