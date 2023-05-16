import React from "react";

import { useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";

import { RootState } from "../../store";
import { Wrapper, Container, Content, SubTitle, Title } from "./styles";

const Header = () => {
  const { user, account } = useSelector((state: RootState) => state.session);

  return (
    <Wrapper>
      <Container primary>
        <Content>
          <BiUserCircle color="white" size={40} />
          <Title>Olá, {user.name}</Title>
        </Content>
      </Container>
      <Container>
        <Content>
          <SubTitle>agência {account?.account_branch}</SubTitle>
          <SubTitle>conta {account?.account_number}</SubTitle>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Header;
