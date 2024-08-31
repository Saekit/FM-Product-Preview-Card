import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    background-color: ${theme.colors.darkCyan};
    color: ${theme.colors.white};
  `};
`;
export const StyledIcon = styled.image``;
