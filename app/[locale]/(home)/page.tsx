import BrowsingHistoryList from "@/components/shared/browsing-history-list";
import { HomeCard } from "@/components/shared/home/home-card";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
import ProductSlider from "@/components/shared/product/product-slider";
import { Card, CardContent } from "@/components/ui/card";

import {
  getProductsForCard,
  getProductsByTag,
  getAllCategories,
} from "@/lib/actions/product.actions";
import { getSetting } from "@/lib/actions/setting.actions";
import { toSlug } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function HomePage() {
  const t = await getTranslations("Home");
  const { carousels } = await getSetting();
  const todaysDeals = await getProductsByTag({ tag: "todays-deal" });
  const bestSellingProducts = await getProductsByTag({ tag: "best-seller" });

  const categories = (await getAllCategories()).slice(0, 4);
  const newArrivals = await getProductsForCard({
    tag: "new-arrival",
  });
  const featureds = await getProductsForCard({
    tag: "featured",
  });
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
  });
  const cards = [
    {
      title: t("Categories to explore"),
      link: {
        text: t("See More"),
        href: "/search",
      },
      items: categories.map((category) => ({
        name: category,
        image: `/images/${toSlug(category)}.jpg`,
        href: `/search?category=${category}`,
      })),
    },
    {
      title: t("Explore New Arrivals"),
      items: newArrivals,
      link: {
        text: t("View All"),
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: t("Discover Best Sellers"),
      items: bestSellers,
      link: {
        text: t("View All"),
        href: "/search?tag=new-arrival",
      },
    },
    {
      title: t("Featured Products"),
      items: featureds,
      link: {
        text: t("Shop Now"),
        href: "/search?tag=new-arrival",
      },
    },
  ];

  return (
    <>
      <HomeCarousel items={carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
        <div className="p-4 bg-background">
          <h2 className="h2-bold mb-4 text-center py-3">
            Shop by Category
          </h2>
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
                    <a
                      href="#"
                      className="px-3 py-2 bg-black text-white text-sm"
                    >
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
        <Card className="w-full rounded-none">
          <CardContent className="p-4 items-center gap-3">
            <ProductSlider title={t("Today's Deals")} products={todaysDeals} />
          </CardContent>
        </Card>
        <Card className="w-full rounded-none">
          <CardContent className="p-4 items-center gap-3">
            <ProductSlider
              title={t("Best Selling Products")}
              products={bestSellingProducts}
              hideDetails
            />
          </CardContent>
        </Card>
      </div>

      <div className="p-4 bg-background">
        <BrowsingHistoryList />
      </div>
    </>
  );
}
