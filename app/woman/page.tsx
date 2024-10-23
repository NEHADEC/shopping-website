import Image from 'next/image';

export default function Women() {
  const womenProducts = [
    { id: 1, name: "Women's Dress", price: '$35.00', image: '/w-1.jpg', rating: 5 },
    { id: 2, name: "Heels", price: '$60.00', image: '/w-2.webp', rating: 4 },
    { id: 3, name: "Handbag", price: '$75.00', image: '/w-3.jpg', rating: 5 },
    { id: 4, name: "Sunglasses", price: '$25.00', image: '/w-4.jpg', rating: 4 },
    { id: 5, name: "Perfume", price: '$55.00', image: '/w-5.webp', rating: 5 },
    { id: 6, name: "Women's Jacket", price: '$100.00', image: '/w-6.webp', rating: 5 },
    { id: 7, name: "Scarf", price: '$20.00', image: '/w-7.avif', rating: 4 },
    { id: 8, name: "Boots", price: '$85.00', image: '/w-8.webp', rating: 5 },
    { id: 9, name: "Jewelry Set", price: '$150.00', image: '/w-9.webp', rating: 5 },
    { id: 10, name: "Watch", price: '$180.00', image: '/w-10.jpg', rating: 5 },
    { id: 11, name: "blacrat", price: '$40.00', image: '/w-11.webp', rating: 4 },
    { id: 12, name: "Ring", price: '$45.00', image: '/m-13.jpg', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Banner Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/originals/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl text-white font-bold">Women's Fashion</h1>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals for Women</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {womenProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-pink-400 transition-colors duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={500}
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

      {/* Promotion Section */}
      <div className="mt-16 bg-pink-600 py-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Spring Collection 2024!</h2>
        <p className="text-lg">Discover the latest trends in Women's Fashion - Up to 50% Off</p>
        <button className="mt-6 bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}
