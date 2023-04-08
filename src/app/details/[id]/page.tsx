import Icon from "@/components/Icon";
import formatCurrency from "@/utils/formatCurrency";
import getProducts from "@/utils/getProducts";
import Image from "next/image";
import { Star } from "react-feather";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const products = await getProducts();
  const product = products.find((item) => item.id === Number(params.id));

  if (!product) {
    return <p>product not found</p>;
  }

  return (
    <div className="flex justify-center gap-12 flex-col md:flex-row min-w-min">
      <div className="overflow-hidden rounded-lg md:max-w-md border border-gray-200 p-4">
        <Image
          src={product.image}
          alt={product.title}
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-col h-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {product.title}
        </h2>

        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading" className="sr-only">
            Product information
          </h3>

          <p className=" text-gray-900">{product.description}</p>
        </section>

        <section
          aria-labelledby="options-heading"
          className="flex flex-col flex-grow gap-2 justify-end"
        >
          <div className="mt-6">
            <h4 className="sr-only">Reviews</h4>
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="flex items-center gap-1">
                  <Icon
                    icon={Star}
                    className="fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                  <p>{product.rating.rate}</p>
                </div>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {product.rating.count} reviews
                </a>
              </div>
              <p className="text-2xl text-gray-900">
                {formatCurrency(product.price)}
              </p>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Add to bag
          </button>
        </section>
      </div>
    </div>
  );
}
