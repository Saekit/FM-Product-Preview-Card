import styled from "styled-components";

export const DefaultImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 0;

  @media (min-width: 800px) {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 0;
  }
`;
