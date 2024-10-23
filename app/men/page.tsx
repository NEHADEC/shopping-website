import Image from 'next/image';

export default function Men() {
  const menProducts = [
    { id: 1, name: 'Men\'s T-shirt', price: '$22.00', image: '/m-1.jpg', rating: 5 },
    { id: 2, name: 'Men\'s Jacket', price: '$120.00', image: '/m-2.jpg', rating: 4 },
    { id: 3, name: 'Formal Shoes', price: '$95.00', image: '/m-.jpg', rating: 5 },
    { id: 4, name: 'Casual Sneakers', price: '$70.00', image: '/m-4.jpg', rating: 4 },
    { id: 5, name: 'Men\'s Watch', price: '$200.00', image: '/m-5.avif', rating: 5 },
    { id: 6, name: 'Sunglasses', price: '$50.00', image: '/m-6.jpg', rating: 5 },
    { id: 7, name: 'Men\'s Belt', price: '$30.00', image: '/m-7.jpg', rating: 4 },
    { id: 8, name: 'Men\'s Scarf', price: '$25.00', image: '/m-8.jpg', rating: 5 },
    { id: 9, name: 'Men\'s Cap', price: '$15.00', image: '/m-9.jpg', rating: 3 },
    { id: 10, name: 'Men\'s Wallet', price: '$40.00', image: '/m-10.jpeg', rating: 4 },
    { id: 11, name: 'Men\'s  Perfume', price: '$60.00', image: '/p-10.jpg', rating: 5 },
    { id: 12, name: 'Men\'s Shoes', price: '$90.00', image: '/c-2.jpg', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Banner Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.vectorstock.com/i/preview-1x/45/80/interior-background-of-modern-men-clothing-store-vector-22494580.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl text-white font-bold">Men's Fashion</h1>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals for Men</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-blue-900 hover:scale-105 transition-transform duration-300"
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
      <div className="mt-16 bg-blue-900 py-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Get Ready for Winter!</h2>
        <p className="text-lg">Exclusive Men's Winter Collection - Up to 50% Off</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}
