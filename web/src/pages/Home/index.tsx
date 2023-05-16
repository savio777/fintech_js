import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AiOutlineRight } from "react-icons/ai";
import { ImSpinner11 } from "react-icons/im";

import Transfer from "../../components/Transfer";
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
  DialogSendTransfer,
  IconClose,
} from "./styles";
import GetAccountByNumberRequest from "../../services/Account/GetAccountByNumberRequest";
import SendTransferRequest from "../../services/Account/SendTransferRequest";
import Button from "../../components/Button";
import InputCustom from "../../components/InputCustom";
import { SelectInput } from "../../components/styles";

export default function Home() {
  const { account } = useSelector((state: RootState) => state.session);

  const [isOpenDialogSend, setIsOpenDialogSend] = useState(false);

  const [transfers, setTransfers] = useState<ITransfers>({
    recipient: [],
    sender: [],
    balance: null,
  });

  const [accountNumber, setAccountNumber] = useState("");
  const [accountBranch, setAccountBranch] = useState("");
  const [throughTransfer, setThroughTransfer] = useState("");
  const [valueTransfer, setValueTransfer] = useState("");

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

  const sendTransferRequest = async () => {
    try {
      const response = await GetAccountByNumberRequest(
        accountBranch,
        accountNumber
      );

      SendTransferRequest({
        id_account_recipient: response.id,
        id_account_sender: account?.id || "",
        through_transfer: throughTransfer || "PIX",
        value: Number(valueTransfer),
      }).then(() => {
        toast("Transferência realizada com sucesso!");

        setIsOpenDialogSend(false);
        getTransfers();

        setAccountNumber("");
        setAccountBranch("");
        setValueTransfer("");
      });
    } catch (error: any) {
      if (error?.errors?.length > 0) {
        toast(error?.errors[0], { type: "error" });
      } else {
        toast(error, { type: "error" });
      }
    }
  };

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
            <SubTitle bold>{formatPrice(transfers?.balance || 0)}</SubTitle>

            <ButtonTransparent onClick={() => setIsOpenDialogSend(true)}>
              <SubTitle>fazer transferência</SubTitle>
              <AiOutlineRight size={20} color="#000" />
            </ButtonTransparent>
          </Row>

          <Row center>
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

      <DialogSendTransfer open={isOpenDialogSend}>
        <ButtonTransparent onClick={() => setIsOpenDialogSend(false)} right>
          <IconClose />
        </ButtonTransparent>
        <Title>Fazer transferência</Title>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendTransferRequest();
          }}
        >
          <SelectInput
            value={throughTransfer}
            onChange={(e) => setThroughTransfer(e.target.value)}
          >
            <option value="">Selecione a forma de transferência</option>
            <option value="PIX">PIX</option>
            <option value="TED">TED</option>
            <option value="DOCS">DOCS</option>
          </SelectInput>

          <InputCustom
            label="Agência da conta"
            value={accountBranch}
            onChange={(e) => setAccountBranch(e.target.value)}
          />

          <InputCustom
            label="Número da conta"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />

          <InputCustom
            label="Valor"
            value={valueTransfer}
            onChange={(e) => setValueTransfer(e.target.value)}
            type="number"
          />

          <Button full onClick={sendTransferRequest}>
            enviar
          </Button>
        </form>
      </DialogSendTransfer>
    </Container>
  );
}
