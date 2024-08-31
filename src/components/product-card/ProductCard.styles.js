import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `};

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;
