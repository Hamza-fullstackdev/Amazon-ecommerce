'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const InfiniteScroller = () => {
  const [items, setItems] = useState(Array.from({ length: 8 }));
  const [loading, setLoading] = useState(false);

  const fetchMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 4 })]);
      setLoading(false);
    }, 1500);
  };

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
  }, []);

  return (
    <div className="px-10 py-5 bg-white">
      <h2 className="text-xl font-semibold mb-4">Infinite Scroll</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((_, index) => (
          <div key={index} className="w-64 p-3 border rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
              <Image
                src={'/images/p11-1.jpg'}
                alt={'image'}
                width={150}
                height={200}
                className="object-contain"
              />
              <h3 className="font-bold mt-2">Product {index + 1}</h3>
              <p className="text-sm text-gray-600">Product description</p>
              <div className="flex items-center justify-center mt-2">
                <span className="ml-1 text-sm text-gray-500">Rating</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-4">Loading more items...</p>}
    </div>
  );
};

export default InfiniteScroller;
