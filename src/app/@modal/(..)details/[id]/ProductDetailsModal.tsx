"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { Star, X } from "react-feather";
import Icon from "../../../../components/Icon";
import formatCurrency from "@/utils/formatCurrency";
import Image from "next/image";

interface ProductDetailsModalProps {
  product: Product;
}

function ProductDetailsModal({ product }: ProductDetailsModalProps) {
  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <Image
                        src={product.image}
                        alt={product.title}
                        className="object-cover object-center"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7 flex flex-col h-full">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {product.title}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ProductDetailsModal;
