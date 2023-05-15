import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import InputCustom from "../../components/InputCustom";
import { maskCpf } from "../../utils/mask";
import Button from "../../components/Button";
import { SignUpDto } from "./signUp.dto";
import SignOutRequest from "../../services/Session/SignOutRequest";

import { Container, Content, Title, Icon } from "./styles";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    try {
      const data = { cpf, password, name, email };

      SignUpDto.validateSync(data);

      SignOutRequest(data).then((res) => {
        toast("Cadastro realizado com sucesso!");

        setTimeout(() => {
          navigate(-1);
        }, 2000);
      });
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
        <Title>cadastro</Title>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <InputCustom
            label="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputCustom
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(maskCpf(e.target.value))}
          />

          <InputCustom
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputCustom
            type="password"
            label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button full onClick={onSubmit}>
            enviar
          </Button>

          <a href="/">
            <p className="text-signup">voltar</p>
          </a>
        </form>
      </Content>
    </Container>
  );
}
