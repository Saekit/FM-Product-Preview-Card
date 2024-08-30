import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  width: 100%,
    ${({ theme }) => css`
      background-color: ${theme.color.white};
    `};
`;
