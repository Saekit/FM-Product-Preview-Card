import { ButtonText, StyledButton } from "./AddToCardButton.styles";
import CartIcon from "../../../assets/images/CartIcon.jsx";

const AddToCartButton = () => (
  <StyledButton>
    <CartIcon />
    <ButtonText>Add to Cart</ButtonText>
  </StyledButton>
);
export default AddToCartButton;
