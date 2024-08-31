import { ProductContentContainer, StyledArticle } from "./ProductCard.styles";
import ProductImage from "../product-image/ProductImage";

const ProductCard = () => (
  <StyledArticle>
    <ProductImage />
    <ProductContentContainer></ProductContentContainer>
  </StyledArticle>
);
export default ProductCard;
