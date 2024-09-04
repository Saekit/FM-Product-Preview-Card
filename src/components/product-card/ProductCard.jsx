import {
  ProductCategory,
  ProductContentContainer,
  StyledArticle,
  ProductName,
  StyledText,
  SalePrice,
  PriceContainer,
  OriginalPrice,
} from "./ProductCard.styles";
import ProductImage from "../product-image/ProductImage";
import AddToCartButton from "../ui/buttons/AddToCartButton";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <StyledArticle>
      <ProductImage />
      <ProductContentContainer>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName>{product.productName}</ProductName>
        <StyledText>{product.description}</StyledText>
        <PriceContainer>
          <SalePrice>{product.salePrice}</SalePrice>
          <OriginalPrice>{product.price}</OriginalPrice>
        </PriceContainer>
        <AddToCartButton />
      </ProductContentContainer>
    </StyledArticle>
  );
};

export default ProductCard;
