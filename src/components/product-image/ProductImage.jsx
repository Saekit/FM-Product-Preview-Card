import ProductImgMobile from "../../assets/images/image-product-mobile.jpg";
import ProductImgDesktop from "../../assets/images/image-product-desktop.jpg";
import { DefaultImage } from "./ProductImage.styles";

const ProductImage = () => (
  <picture>
    <source media="(min-width:600px)" srcSet={ProductImgDesktop} />
    <source media="(min-width:300px)" srcSet={ProductImgMobile} />
    <DefaultImage src={ProductImgMobile} alt="Perfume" />
  </picture>
);
export default ProductImage;
