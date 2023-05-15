import { css, styled } from "styled-components";
import colors from "../../utils/colors";

export const Label = styled.p`
  color: #242424;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const Error = styled.span`
  font-size: 0.7rem;
  font-weight: 300;
  color: red;
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const Input = styled.input<{
  focused?: boolean;
  error?: boolean;
}>`
  color: black;
  width: 100%;
  border-bottom: 1px solid ${colors.secondary};

  ${({ focused }) =>
    focused &&
    css`
      border-bottom: 1px solid ${colors.primary};
    `}

  ${({ error }) =>
    error &&
    css`
      border-bottom: 1px solid red;
    `}
`;
