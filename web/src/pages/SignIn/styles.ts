import styled from "styled-components";
import { TbPigMoney } from "react-icons/tb";

import colors from "../../utils/colors";

export const Container = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  flex: 1;
  height: 100vh;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #fff;
  height: 45%;
  width: 35%;
  padding: 30px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 50%;
    margin-top: 3rem;
    flex: 1;

    .text-signup {
      color: ${colors.secondary};
      width: 100%;
      text-align: center;
      margin-top: 1rem;
    }
  }
`;

export const Title = styled.h2`
  color: black;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Icon = styled(TbPigMoney)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 7rem;
  color: black;
`;
