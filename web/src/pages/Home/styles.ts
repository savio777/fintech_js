import { css, styled } from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 900px;
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;
  gap: 15px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #000;
  margin: 1rem 0;
`;

export const ButtonTransparent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 10px;
`;

export const SubTitle = styled.p<{ bold?: boolean }>`
  font-size: 1.2rem;
  color: #000;
  margin: 0.5rem 0;

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
