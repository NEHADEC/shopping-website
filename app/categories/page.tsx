// app/categories/page.tsx
// pages/products.js

import Image from "next/image";

// pages/products.js

export default function Products() {
  const products = [
    
    { id: 1, name: 'T-shirt', price: '$12.00', image: '/c-1.png', rating: 5 },
    { id: 2, name: 'Shoes', price: '$92.00', image: '/c-2.jpg', rating: 4 },
    { id: 3, name: 'Jacket', price: '$120.00', image: '/c-3.jpg', rating: 5 },
    { id: 4, name: 'Sneakers', price: '$85.00', image: '/c-4.jpeg', rating: 3 },
    { id: 5, name: 'Cap', price: '$15.00', image: '/c-5.jpeg', rating: 4 },
    { id: 6, name: 'Socks', price: '$8.00', image: '/c-6.jpg', rating: 5 },
    { id: 7, name: 'Watch', price: '$150.00', image: '/c-7.avif', rating: 5 },
    { id: 8, name: 'Backpack', price: '$65.00', image: '/c-8.webp', rating: 4 },
    { id: 9, name: 'Sunglasses', price: '$45.00', image: '/c-9.webp', rating: 5 },
    { id: 10, name: 'Belt', price: '$30.00', image: '/c=10.webp', rating: 3 },
    { id: 11, name: 'Coat', price: '$200.00', image: '/c-11.jpeg', rating: 4 },
    { id: 12, name: 'Scarf', price: '$25.00', image: '/c-12.avif', rating: 5 },
  ];
  

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8 hover:text-pink-600" >Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:bg-gray-400 transition-colors duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500} // adjust width as needed
              height={500} // adjust height as needed
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg font-bold text-gray-800">{product.price}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">
                  {'★'.repeat(product.rating)}
                  {'☆'.repeat(5 - product.rating)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}