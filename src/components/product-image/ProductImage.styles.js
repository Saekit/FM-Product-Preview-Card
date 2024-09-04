import styled from "styled-components";

export const DefaultImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 0;

  @media (min-width: 600px) {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 0;
  }
`;
