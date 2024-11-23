import React from 'react';

const pets = [
  {
    id: 1,
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    type: 'Dog',
    breed: 'Husky Mix',
    price: '€850'
  },
  {
    id: 2,
    name: 'Oliver',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    type: 'Cat',
    breed: 'Tabby',
    price: '€350'
  },
  {
    id: 3,
    name: 'Max',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
    type: 'Dog',
    breed: 'Golden Retriever',
    price: '€950'
  },
  {
    id: 4,
    name: 'Bella',
    image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5',
    type: 'Cat',
    breed: 'Siamese',
    price: '€450'
  },
  {
    id: 5,
    name: 'Charlie',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    type: 'Dog',
    breed: 'French Bulldog',
    price: '€1,200'
  },
  {
    id: 6,
    name: 'Milo',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
    type: 'Cat',
    breed: 'Persian',
    price: '€550'
  },
  {
    id: 7,
    name: 'Rocky',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
    type: 'Dog',
    breed: 'German Shepherd',
    price: '€900'
  },
  {
    id: 8,
    name: 'Lucy',
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d',
    type: 'Cat',
    breed: 'British Shorthair',
    price: '€400'
  }
];

export default function PetGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {pets.map((pet) => (
        <div key={pet.id} className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
          <img
            src={pet.image}
            alt={pet.name}
            className="h-64 w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{pet.name}</h3>
            <p className="text-sm text-gray-200">{pet.breed}</p>
            <p className="text-sm font-semibold text-purple-300">{pet.price}</p>
          </div>
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
            <button className="bg-white px-4 py-2 rounded-full text-gray-800 font-semibold transform -translate-y-2 transition-transform group-hover:translate-y-0">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}