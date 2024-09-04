import ProductCard from "../product-card/ProductCard";
import ProductCardWrapper from "../wrapper/ProductCardWrapper";
import perfume from "../../data/perfume";

const Page = () => (
  <ProductCardWrapper>
    <ProductCard product={perfume} />
  </ProductCardWrapper>
);
export default Page;
