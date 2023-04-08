import Icon from "@/components/Icon";
import formatCurrency from "@/utils/formatCurrency";
import getProducts from "@/utils/getProducts";
import Image from "next/image";
import Link from "next/link";
import { Star } from "react-feather";

export default async function Home() {
  const products = await getProducts();

  return (
    <ul className="gap-8 grid items-center grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))]">
      {products.map((product) => (
        <li
          key={product.id}
          className="w-auto min-w-[240px] h-full overflow-hidden flex-1 border-px border border-gray-100 rounded-md"
        >
          <Link
            href={`/details/${product.id}`}
            className="h-full flex flex-col"
          >
            <div className="p-6 flex-grow">
              <Image
                src={product.image}
                alt={product.title}
                className="dark:invert"
                width={500}
                height={500}
              />
            </div>
            <div className="p-4 bg-gray-100 flex flex-col gap-2">
              <p className="font-semibold line-clamp-1">{product.title}</p>
              <p className="overflow-hidden line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between">
                <p className="inline-flex items-center gap-1">
                  <span>
                    <Icon
                      icon={Star}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  </span>
                  {product.rating.rate}
                </p>
                <p>{formatCurrency(product.price)}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
