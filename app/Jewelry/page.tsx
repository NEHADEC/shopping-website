import Image from 'next/image';

export default function Jewelry() {
  const jewelryProducts = [
    { id: 1, name: 'Gold Necklace', price: '$250.00', image: '/j-1.jpg', rating: 5 },
    { id: 2, name: 'Diamond Ring', price: '$1,200.00', image: '/j-2.jpg', rating: 5 },
    { id: 3, name: 'Silver Bracelet', price: '$85.00', image: '/j-3.jpg', rating: 4 },
    { id: 4, name: 'Pearl Earrings', price: '$150.00', image: '/j-4.avif', rating: 5 },
    { id: 5, name: 'Gold Bracelet', price: '$300.00', image: '/j-5.webp', rating: 4 },
    { id: 6, name: 'Emerald Pendant', price: '$500.00', image: '/j-6.webp', rating: 5 },
    { id: 7, name: 'Sapphire Earrings', price: '$400.00', image: '/j-13.webp', rating: 5 },
    { id: 8, name: 'Ruby Necklace', price: '$750.00', image: '/j-8.jpg', rating: 5 },
    { id: 9, name: 'Platinum Ring', price: '$1,500.00', image: '/j-9.webp', rating: 5 },
    { id: 10, name: 'Diamond Bracelet', price: '$1,100.00', image: '/j-10.jpeg', rating: 5 },
    { id: 11, name: 'Gold Earrings', price: '$250.00', image: '/j-11.webp', rating: 4 },
    { id: 12, name: 'Crystal Brooch', price: '$95.00', image: '/j-12.avif', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Banner Section */}
      <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99bfd6152898429.632604445de58.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl text-white font-bold">Exquisite Jewelry Collection</h1>
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="container mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">New Arrivals in Jewelry</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {jewelryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:bg-yellow-400 transition-colors duration-300"
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
      <div className="mt-16 bg-yellow-600 py-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Exclusive Offers on Fine Jewelry</h2>
        <p className="text-lg">Up to 30% Off on Premium Jewelry Collections</p>
        <button className="mt-6 bg-white text-yellow-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
          Explore Now
        </button>
      </div>
    </div>
  );
}
