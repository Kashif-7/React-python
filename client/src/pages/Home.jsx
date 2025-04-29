// // import './Home.css';

// // // src/pages/Home.jsx




// export default function Home() {
//   return (
//     <div className="container mx-auto p-4">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">Welcome to Khan Estates</h1>
//         <p className="text-lg text-gray-600">Your gateway to finding the perfect property</p>
//       </header>
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Listings</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="border rounded-lg shadow-md p-4">
//             <img className="w-full h-40 object-cover rounded-md mb-4" src="https://via.placeholder.com/150" alt="Property 1" />
//             <h3 className="text-xl font-semibold text-gray-800">Luxury Villa</h3>
//             <p className="text-gray-600">$1,200,000</p>
//           </div>
//           <div className="border rounded-lg shadow-md p-4">
//             <img className="w-full h-40 object-cover rounded-md mb-4" src="https://via.placeholder.com/150" alt="Property 2" />
//             <h3 className="text-xl font-semibold text-gray-800">Modern Apartment</h3>
//             <p className="text-gray-600">$850,000</p>
//           </div>
//           <div className="border rounded-lg shadow-md p-4">
//             <img className="w-full h-40 object-cover rounded-md mb-4" src="https://via.placeholder.com/150" alt="Property 3" />
//             <h3 className="text-xl font-semibold text-gray-800">Cozy Cottage</h3>
//             <p className="text-gray-600">$450,000</p>
//           </div>
//         </div>
//       </section>
//       <footer className="text-center text-gray-600 mt-8">
//         <p>© 2023 Dream Estates. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight"
        >
          Find Your <span className="text-blue-500">Dream Home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl"
        >
          Explore the best apartments, villas, and houses at the most affordable prices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8"
        >
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-full shadow-lg transition transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Featured Listings
          </motion.h2>

          {/* Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "Luxury Villa",
                description: "Located in the heart of the city with amazing amenities.",
                price: "$1,200,000",
                image: "https://cf.bstatic.com/xdata/images/hotel/max500/557377410.jpg?k=0f3f879cae07a9b4a0a3ba88f17288abbf5c110aad3de7ddff1a0e491c2a4d59&o=",
              },
              {
                id: 2,
                title: "Modern Apartment",
                description: "A stylish apartment with a beautiful view.",
                price: "$850,000",
                image: "https://i.ytimg.com/vi/L_UW5AtObwY/maxresdefault.jpg",
              },
              {
                id: 3,
                title: "Cozy Cottage",
                description: "A charming cottage surrounded by nature.",
                price: "$450,000",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RQdbjGWHsbaBc8ipbt8ZLfPGA1pUc54P86xMHljW-eO1g-VZNIQUmMmJSpmBnDSwMd0&usqp=CAU",
              },
              {
                id : 4,
                title: "Spacious Townhouse",
                description: "A modern ouse",
                price: "PKR 66,00000",
                image: "https://media.zameen.com/thumbnails/9337125-800x600.jpeg" ,
              }
            ].map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: property.id * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <span className="text-blue-500 font-bold">{property.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
