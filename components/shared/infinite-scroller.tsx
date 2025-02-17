"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Product {
  slug: string;
  name: string;
  description?: string;
  images: string[];
  avgRating?: number;
  numReviews?: number;
  videos?: string[]; 
}

const InfiniteScroller = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreItems = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    try {
      const response = await fetch(`/api/products?page=${page}&limit=4`);
      const data = await response.json();

      if (data.success) {
        setItems((prevItems) => [...prevItems, ...data.data]);
        setPage((prevPage) => prevPage + 1);
        if (data.data.length < 4) setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  useEffect(() => {
    fetchMoreItems();
  }, [fetchMoreItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        fetchMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fetchMoreItems]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-10 py-5 bg-white dark:bg-black">
      <h2 className="text-xl font-semibold mb-4">Infinite Scroll</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((product, index) => (
          <div key={index} className="p-3 border rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-48 overflow-hidden">
              <Slider {...carouselSettings}>
  {product.images.map((image, imgIndex) => (
    <div key={imgIndex}>
      <Image
        src={image || '/images/placeholder.jpg'}
        alt={product.name}
        layout="responsive"
        width={150}
        height={200}
        className="object-cover cursor-pointer"
      />
    </div>
  ))}

    <div>
      <video
        src="/images/default.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        controls
      ></video>
    </div>

</Slider>

              </div>
              <Link href={`/product/${product.slug}`} target="_blank" rel="noopener noreferrer">
  <h3 className="font-bold mt-2">
    {product.name && product.name.length > 50 ? `${product.name.slice(0, 50)}...` : product.name || `Product ${index + 1}`}
  </h3>
</Link>
<p className="text-sm text-gray-600">
  {product.description && product.description.length > 80 ? `${product.description.slice(0, 80)}...` : product.description || 'Product description'}
</p>

              <div className="flex items-center justify-center mt-2">
                <span className="ml-1 text-sm text-gray-500">
                  {product.avgRating} ({product.numReviews} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      {!hasMore && <p className="text-center mt-4">No more products to load</p>}
    </div>
  );
};

export default InfiniteScroller;