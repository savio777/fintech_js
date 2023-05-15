import React, { useState } from "react";
import { toast } from "react-toastify";

import InputCustom from "../../components/InputCustom";
import { signIn } from "../../store/modules/Session";
import { maskCpf } from "../../utils/mask";
import Button from "../../components/Button";
import { useAppDispatch } from "../../store";
import SignInRequest from "../../services/Session/SignInRequest";
import { LoginUserDto } from "./signIn.dto";

import { Container, Content, Title, Icon } from "./styles";

export default function SignIn() {
  const dispatch = useAppDispatch();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    try {
      const data = { cpf, password };

      LoginUserDto.validateSync(data);

      const response = await SignInRequest(data);

      dispatch(signIn(response));
    } catch (error: any) {
      if (error?.errors?.length > 0) {
        toast(error?.errors[0], { type: "error" });
      }
    }
  };

  return (
    <Container>
      <Icon />
      <Content>
        <Title>login</Title>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <InputCustom
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(maskCpf(e.target.value))}
          />

          <InputCustom
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button full onClick={onSubmit}>
            continuar
          </Button>

          <a href="/signup">
            <p className="text-signup">cadastrar</p>
          </a>
        </form>
      </Content>
    </Container>
  );
}
