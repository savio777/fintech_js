import { styled } from "styled-components";

export const Container = styled.div<{
  type?: "add" | "sub";
}>`
  border: 0.5px solid #ccc;
  border-radius: 8px;
  padding: 10px;

  border: 1px solid ${({ type }) => (type === "add" ? "green" : "red")};
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1rem;
`;
