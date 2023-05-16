import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AiOutlineRight } from "react-icons/ai";
import { ImSpinner11 } from "react-icons/im";

import Header from "../../components/Header";
import { RootState } from "../../store";
import { formatPrice } from "../../utils/mask";
import TransfersListRequest, {
  ITransfers,
} from "../../services/Account/TransfersListRequest";
import {
  Container,
  Content,
  Title,
  Box,
  SubTitle,
  Row,
  ButtonTransparent,
  Column,
} from "./styles";
import Transfer from "../../components/Transfer";

export default function Home() {
  const { user, account } = useSelector((state: RootState) => state.session);

  const [transfers, setTransfers] = useState<ITransfers>({
    recipient: [],
    sender: [],
  });

  const getTransfers = async () => {
    try {
      const response = await TransfersListRequest();

      setTransfers(response);
    } catch (error) {
      toast("Problemas ao pegar lista de transferências", { type: "error" });
    }
  };

  useEffect(() => {
    getTransfers();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Box>
          <Row>
            <Title>Saldo</Title>

            <ButtonTransparent onClick={getTransfers}>
              <ImSpinner11 size={20} color="#000" />
            </ButtonTransparent>
          </Row>

          <Row>
            <SubTitle bold>{formatPrice(account?.balance)}</SubTitle>

            <ButtonTransparent>
              <SubTitle>fazer transferência</SubTitle>
              <AiOutlineRight size={20} color="#000" />
            </ButtonTransparent>
          </Row>

          <Row>
            <SubTitle>Recebidos</SubTitle>

            <SubTitle>Enviados</SubTitle>
          </Row>

          <Row>
            <Column>
              {transfers.recipient.map((recipient) => (
                <Transfer key={recipient.id} {...recipient} />
              ))}
            </Column>

            <Column>
              {transfers.sender.map((sender) => (
                <Transfer type="sub" key={sender.id} {...sender} />
              ))}
            </Column>
          </Row>
        </Box>
      </Content>
    </Container>
  );
}
