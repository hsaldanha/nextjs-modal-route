import getProducts from "@/utils/getProducts";
import ProductDetailsModal from "./ProductDetailsModal";

interface ProductDetailModalProps {
  params: {
    id: string;
  };
}

export default async function ProductDetails({
  params,
}: ProductDetailModalProps) {
  const products = await getProducts();

  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return null;
  }

  return <ProductDetailsModal product={product} />;
}
