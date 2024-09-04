import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.fontSecondary};
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkCyan};
  `};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  margin: 10px 0px;
`;
export const ButtonText = styled.span`
  margin-left: 10px;
`;
