"use client";

import Image from "next/image";
import { useState } from "react";

export default function Order() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "T-shirt", price: 20, quantity: 2, image: "/m-1.jpg" },
    { id: 2, name: "Sneakers", price: 75, quantity: 1, image: "/m-4.jpg" },
    { id: 3, name: "Handbag", price: 75, quantity: 3, image: "/w-3.jpg" },
    {
      id: 4,
      name: "Silver Bracelet",
      price: 85,
      quantity: 5,
      image: "/j-3.jpg",
    },
    { id: 5, name: "Janan", price: 95, quantity: 2, image: "/p-4.webp" },
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.state) newErrors.state = "State is required.";
    if (!formData.zipCode) newErrors.zipCode = "ZIP code is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if there are no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Order placed successfully!");
      // Clear form data after submission
      setFormData({
        fullName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
      });
      setErrors({}); // Clear errors
    }
    // Handle order submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Order Now</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shipping Details */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.address ? "border-red-500" : ""
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors.city ? "border-red-500" : ""
                }`}
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md ${
                    errors.state ? "border-red-500" : ""
                  }`}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state}</p>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md ${
                    errors.zipCode ? "border-red-500" : ""
                  }`}
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm">{errors.zipCode}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-black text-white py-2 rounded-md font-bold hover:bg-gray-700">
              Place Order
            </button>
          </form>
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className="ml-4 flex-1">
                <p className="font-semibold">{item.name}</p>
                <div className="flex items-center mt-1">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, -1)}>
                    −
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </div>
              <p className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="border-t pt-4 mt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
