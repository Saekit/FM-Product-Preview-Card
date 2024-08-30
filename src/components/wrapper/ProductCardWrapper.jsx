import styled, { css } from "styled-components";

export const ProductCardWrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    width: 100%;
    background-color: ${theme.color.cream};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
