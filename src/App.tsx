import React from 'react';
import { Heart } from 'lucide-react';
import AdoptionForm from './components/AdoptionForm';
import PetGallery from './components/PetGallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to PetPal!
            <Heart className="inline-block ml-2 text-pink-400" />
          </h1>
          <p className="text-xl md:text-2xl mb-8">Find your perfect furry companion today!</p>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Browse through our adorable pet gallery and click on the pet that catches your eye.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Available Pets</h2>
        <PetGallery />
      </section>

      {/* Adoption Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to take the next step?</h2>
          <p className="text-lg text-gray-600">Fill out our easy adoption form below</p>
        </div>
        <AdoptionForm />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 PetPal. Making tails wag and hearts purr.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;