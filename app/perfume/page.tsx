import Image from 'next/image';

export default function Perfume() {
  const perfumeProducts = [
    { id: 1, name: 'Chanel No. 5', price: '$120.00', image: '/p-1.jpg', rating: 5 },
    { id: 2, name: 'Dior Sauvage', price: '$85.00', image: '/p-2.jpeg', rating: 5 },
    { id: 3, name: 'Gucci Bloom', price: '$110.00', image: '/p-3.jpg', rating: 4 },
    { id: 4, name: 'Janan', price: '$95.00', image: '/p-4.webp', rating: 5 },
    { id: 5, name: 'Dirhum', price: '$150.00', image: '/p-5.jpg', rating: 4 },
    { id: 6, name: 'Armani Code', price: '$100.00', image: '/p-6.jpg', rating: 5 },
    { id: 7, name: 'YSL Black Opium', price: '$125.00', image: '/p-7.jpg', rating: 5 },
    { id: 8, name: 'Burberry Her', price: '$95.00', image: '/p-8.webp', rating: 4 },
    { id: 9, name: 'Hugo Boss Bottled', price: '$80.00', image: '/p-9.jpg', rating: 4 },
    { id: 10, name: 'Calvin Klein Eternity', price: '$70.00', image: '/p-10.jpg', rating: 5 },
    { id: 11, name: 'Prada Candy', price: '$115.00', image: '/p-11.jpg', rating: 4 },
    { id: 12, name: 'Lancôme La Vie Est Belle', price: '$135.00', image: '/p-12.jpg', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Banner Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/originals/8f/ce/3e/8fce3e6684d8251a23d2b0c1a055cd49.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl text-white font-bold">Exclusive Perfume Collection</h1>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals in Perfumes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {perfumeProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-300 transition-colors duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
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
      <div className="mt-16 bg-gray-600 py-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Luxury Scents for Every Occasion</h2>
        <p className="text-lg">Up to 40% Off on Premium Perfumes</p>
        <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}
