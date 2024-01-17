import React from 'react';
import NavBar from '../components/NavBar';

const Gallery = () => {
  return (
    <>
      {/* Gallery Section */}
      <section className="container mx-auto my-16">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Image goes here */}
            <img
              src="https://via.placeholder.com/400"
              alt="Gallery Item 1"
              className="w-full h-48 object-cover mb-4"
            />
            <p>Description of Gallery Item 1.</p>
          </div>

          {/* Gallery Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Image goes here */}
            <img
              src="https://via.placeholder.com/400"
              alt="Gallery Item 2"
              className="w-full h-48 object-cover mb-4"
            />
            <p>Description of Gallery Item 2.</p>
          </div>

          {/* Gallery Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {/* Image goes here */}
            <img
              src="https://via.placeholder.com/400"
              alt="Gallery Item 3"
              className="w-full h-48 object-cover mb-4"
            />
            <p>Description of Gallery Item 3.</p>
          </div>
          {/* Add more gallery items as needed */}
        </div>
      </section>

    </>
  );
};

export default Gallery;
