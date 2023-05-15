import { css, styled } from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.button<{ full?: boolean }>`
  padding: 1rem;
  border-radius: 15px;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
`;
