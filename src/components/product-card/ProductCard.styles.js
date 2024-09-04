import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  min-width: 300px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `};

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;

  @media (min-width: 600px) {
    width: 70%;
  }
`;

export const StyledText = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fontSecondary};
    color: ${theme.colors.darkGrayishBlue};
  `}
  font-size: 1rem;
`;

export const ProductCategory = styled(StyledText)`
  text-transform: uppercase;
  letter-spacing: 8px;
`;

export const ProductName = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fontPrimary};
    color: ${theme.colors.veryDarkBlue};
    font-weight: ${theme.fontWeight.bold};
  `}
  font-size: 2.5rem;
  margin: 0;
  line-height: 1;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SalePrice = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fontPrimary};
    color: ${theme.colors.darkCyan};
    font-weight: ${theme.fontWeight.bold};
  `}
  font-size: 2.5rem;
  margin: 0px 25px 0px 0px;
`;

export const OriginalPrice = styled(StyledText)`
  text-decoration: line-through;
`;
