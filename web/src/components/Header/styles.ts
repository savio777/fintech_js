import { styled } from "styled-components";
import colors from "../../utils/colors";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div<{ primary?: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  background-color: ${({ primary }) =>
    primary ? colors.primary : colors.secondary};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 900px;
  padding: 20px;
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  margin-left: 1rem;
`;

export const SubTitle = styled.h4`
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  margin-right: auto;
`;
