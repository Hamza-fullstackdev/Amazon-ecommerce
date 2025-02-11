"use client";

import Image from "next/image";

const CategoryShop = () => {
  return (
    <div className="p-4 bg-background">
      <h2 className="h2-bold mb-4 text-center py-3">Shop by Category</h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <Image
              src={"/images/banner2.jpg"}
              alt="banner"
              width={500}
              height={500}
              className="size-auto"
            />
            <div className="absolute top-5 left-5">
              <h2 className="h2-bold dark:text-black">Smart Watches</h2>
              <div className="mt-3">
                <a href="#" className="px-3 py-2 bg-black text-white text-sm">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative p-2">
                <Image
                  src={"/images/p11-1.jpg"}
                  alt="product-image"
                  width={80}
                  height={80}
                />
                <div className="absolute top-3 right-3">
                  <h2 className="text-lg font-bold">Smart Watches</h2>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="px-3 py-2 bg-black text-white text-sm"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative p-2">
                <Image
                  src={"/images/p11-1.jpg"}
                  alt="product-image"
                  width={80}
                  height={80}
                />
                <div className="absolute top-3 right-3">
                  <h2 className="text-lg font-bold">Smart Watches</h2>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="px-3 py-2 bg-black text-white text-sm"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative p-2">
                <Image
                  src={"/images/p11-1.jpg"}
                  alt="product-image"
                  width={80}
                  height={80}
                />
                <div className="absolute top-3 right-3">
                  <h2 className="text-lg font-bold">Smart Watches</h2>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="px-3 py-2 bg-black text-white text-sm"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative p-2">
                <Image
                  src={"/images/p11-1.jpg"}
                  alt="product-image"
                  width={80}
                  height={80}
                />
                <div className="absolute top-3 right-3">
                  <h2 className="text-lg font-bold">Smart Watches</h2>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="px-3 py-2 bg-black text-white text-sm"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShop;
