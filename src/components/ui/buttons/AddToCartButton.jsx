import { StyledButton, StyledIcon } from "./AddToCardButton.styles";
import CartIcon from "../../../assets/images/icon-cart.svg";

const AddToCartButton = () => (
  <StyledButton>
    <StyledIcon src={CartIcon} alt="cart" />
    Add to Cart
  </StyledButton>
);
export default AddToCartButton;
