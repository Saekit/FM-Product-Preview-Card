import styled, { css } from "styled-components";

const ProductCardWrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: 25px;
    background-color: ${theme.colors.cream};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;
export default ProductCardWrapper;
