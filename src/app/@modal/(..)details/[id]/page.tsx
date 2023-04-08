import products from "@/utils/products.json";
import ProductDetailsModal from "./ProductDetailsModal";

interface ProductDetailModalProps {
  params: {
    id: string;
  };
}

export default async function ProductDetails({
  params,
}: ProductDetailModalProps) {
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return null;
  }

  return <ProductDetailsModal product={product} />;
}
