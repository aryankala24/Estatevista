import { useState } from "react";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedBedrooms, setSelectedBedrooms] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");

  const properties = [
    {
      title: "DLF Crest",
      location: "Gurugram, Haryana",
      price: "₹3.5 Cr",
      city: "Gurugram",
      address: "DLF Crest, Gurugram, Haryana, India",
      image: "https://www.kenrealty.in/wp-content/uploads/2020/10/dlf-crest-highlights.jpg",
      status: "Available",
      type: "Apartment",
      bedrooms: 4,
    },
    {
      title: "Godrej Garden City",
      location: "Ahmedabad, Gujarat",
      price: "₹85 L",
      city: "Ahmedabad",
      address: "Godrej Garden City, Ahmedabad, Gujarat, India",
      image: "https://tljproperty.in/images/Godrej%20Garden%20City%20Brochure-03.jpg",
      status: "Sold Out",
      type: "Studio",
      bedrooms: 2,
    },
    {
      title: "Brigade Orchards",
      location: "Devanahalli, Bangalore",
      price: "₹1.2 Cr",
      city: "Bangalore",
      address: "Brigade Orchards, Devanahalli, Bangalore, Karnataka, India",
      image: "https://d1di04ifehjy6m.cloudfront.net/media/filer_public/4a/a3/4aa3a590-9c9f-4932-9407-3c079d8c963a/cedar20092022.jpg",
      status: "Available",
      type: "Villa",
      bedrooms: 3,
    },
    {
      title: "Raheja Revanta",
      location: "Sector 78, Gurugram",
      price: "₹2.7 Cr",
      city: "Gurugram",
      address: "Raheja Revanta, Sector 78, Gurugram, Haryana, India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VUJS77bLtV6CXjFdAifO9V5fQkMgdtH4Hw&s",
      status: "Available",
      type: "Studio",
      bedrooms: 3,
    },
    {
      title: "Prestige Lakeside Habitat",
      location: "Whitefield, Bangalore",
      price: "₹1.8 Cr",
      city: "Bangalore",
      address: "Prestige Lakeside Habitat, Whitefield, Bangalore, Karnataka, India",
      image: "https://cdn-projects.gharpe.com/prestige-lakeside-habitat-bangalore/image/prestige-lakeside-habitat-bangalore-1.jpeg",
      status: "Sold Out",
      type: "Villa",
      bedrooms: 4,
    },
    {
      title: "Lodha Palava",
      location: "Dombivli, Mumbai",
      price: "₹70 L",
      city: "Mumbai",
      address: "Lodha Palava, Dombivli, Mumbai, Maharashtra, India",
      image: "https://www.lodhagroup.com/sites/default/files/2024-06/USP1_Lodha-Serenity_M.jpg",
      status: "Available",
      type: "Apartment",
      bedrooms: 2,
    },
    {
      title: "Sobha Dream Acres",
      location: "Balagere, Bangalore",
      price: "₹95 L",
      city: "Bangalore",
      address: "Sobha Dream Acres, Balagere, Bangalore, Karnataka, India",
      image: "https://www.sobha.com/wp-content/uploads/2021/10/SDS_SDA-782-X782-16.webp",
      status: "Sold Out",
      type: "Apartment",
      bedrooms: 2,
    },
    {
      title: "Puravankara BluNex",
      location: "Chennai, Tamil Nadu",
      price: "₹1.1 Cr",
      city: "Chennai",
      address: "Puravankara BluNex, Chennai, Tamil Nadu, India",
      image: "https://www.puravankara.com/img/Banner-2.jpg",
      status: "Available",
      type: "Apartment",
      bedrooms: 3,
    },
    {
      title: "Tata New Haven",
      location: "Bahadurgarh, Haryana",
      price: "₹58 L",
      city: "Gurugram",
      address: "Tata New Haven, Bahadurgarh, Haryana, India",
      image: "https://media.tatahousing.com/galleries/February2020/d4f2960674c978370296.webp",
      status: "Available",
      type: "Villa",
      bedrooms: 2,
    },
    {
      title: "Mahindra Happinest",
      location: "Tathawade, Pune",
      price: "₹76 L",
      city: "Pune",
      address: "Mahindra Happinest, Tathawade, Pune, Maharashtra, India",
      image: "https://www.mahindratathawade.com/img/slider4.png",
      status: "Sold Out",
      type: "Studio",
      bedrooms: 1,
    },
    {
      title: "Shapoorji Joyville",
      location: "Howrah, Kolkata",
      price: "₹68 L",
      city: "Kolkata",
      address: "Shapoorji Joyville, Howrah, Kolkata, West Bengal, India",
      image: "https://images.moneycontrol.com/static-mcnews/2019/06/Shapoorji-770x385.jpg?impolicy=website&width=1600&height=900",
      status: "Available",
      type: "Villa",
      bedrooms: 2,
    },
    {
      title: "Aparna Serene Park",
      location: "Gachibowli, Hyderabad",
      price: "₹1.4 Cr",
      city: "Hyderabad",
      address: "Aparna Serene Park, Gachibowli, Hyderabad, Telangana, India",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKIewTAvsLHyWzixUbMniSIKNWbUMFHXm8Q&s",
      status: "Sold Out",
      type: "Apartment",
      bedrooms: 3,
    },

  ];


  function parsePriceToCr(price) {
    if (!price) return 0;
    const cleaned = price.replace(/[₹, ]/g, "").toLowerCase();
    if (cleaned.includes("cr")) {
      return parseFloat(cleaned.replace("cr", ""));
    } else if (cleaned.includes("l")) {
      return parseFloat(cleaned.replace("l", "")) * 0.01;
    }
    return 0;
  }

  const filteredProperties = properties.filter((prop) => {
    const matchesCity = selectedCity ? prop.city === selectedCity : true;

    const priceInCr = parsePriceToCr(prop.price);
    let matchesPrice = true;
    if (selectedPriceRange === "<1") {
      matchesPrice = priceInCr < 1;
    } else if (selectedPriceRange === "1-2") {
      matchesPrice = priceInCr >= 1 && priceInCr <= 2;
    } else if (selectedPriceRange === ">2") {
      matchesPrice = priceInCr > 2;
    }

    const matchesType = selectedType ? prop.type === selectedType : true;
    const matchesBedrooms = selectedBedrooms
      ? prop.bedrooms === parseInt(selectedBedrooms)
      : true;
    const matchesStatus = selectedAvailability
      ? prop.status === selectedAvailability
      : true;

    return (
      matchesCity &&
      matchesPrice &&
      matchesType &&
      matchesBedrooms &&
      matchesStatus
    );
  });

  const getGoogleMapUrl = (address) => {
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBTi6ESop1kSHV30Pl4Uxjwb0NG_2GLsZA&q=${encodeURIComponent(
      address
    )}`;
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex h-[100vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/b9/e6/f1/b9e6f1cffd568d4cd806e2e8ea14d0e2.gif')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 w-full max-w-xl text-white p-6">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Let’s Find Your Property
          </h1>
          <p className="mb-6 text-lg">
            Welcome to EstateVista.com - one of India’s top real estate platforms
            where you can easily search, buy, sell, or rent your next property.
          </p>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="mx-auto my-16 max-w-6xl px-4">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h2 className="text-2xl font-bold">Featured Properties</h2>

          <div className="flex gap-3 items-center flex-wrap">
            {/* City Filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="rounded border px-3 py-1 text-sm text-gray-700"
            >
              <option value="">CITIES</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Gurugram">Gurugram</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Kolkata">Kolkata</option>
            </select>

            {/* Price Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="rounded border px-3 py-1 text-sm text-gray-700"
            >
              <option value="">PRICES</option>
              <option value="<1">Less than ₹1 Cr</option>
              <option value="1-2">₹1 Cr - ₹2 Cr</option>
              <option value=">2">More than ₹2 Cr</option>
            </select>

            {/* Property Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="rounded border px-3 py-1 text-sm text-gray-700"
            >
              <option value="">TYPES</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Studio">Studio</option>
            </select>

            {/* Bedrooms Filter */}
            <select
              value={selectedBedrooms}
              onChange={(e) => setSelectedBedrooms(e.target.value)}
              className="rounded border px-3 py-1 text-sm text-gray-700"
            >
              <option value="">BEDROOMS</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4+ BHK</option>
            </select>

            {/* Availability Filter */}
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="rounded border px-3 py-1 text-sm text-gray-700"
            >
              <option value="">STATUS</option>
              <option value="Available">Available</option>
              <option value="Sold Out">Sold Out</option>
            </select>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <div
                key={index}
                className="rounded overflow-hidden shadow-md bg-white flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2 text-center font-medium flex-grow">
                  <h3 className="text-base font-semibold">{property.title}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                  <p className="text-sm text-green-700 font-semibold">
                    {property.price}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProperty(property)}
                  className="bg-purple-600 hover:bg-purple-700 text-white py-2 mt-auto"
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No properties found matching your filters.
            </p>
          )}
        </div>
      </section>

      {/* Property Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
            >
              &times;
            </button>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2">
                {selectedProperty.title}
              </h2>
              <p className="text-gray-700 mb-1">
                {selectedProperty.location}
              </p>
              <p className="text-green-700 font-semibold mb-4">
                {selectedProperty.price}
              </p>
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="mb-4 w-full h-64 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Location on Map:</h3>
              <div className="w-full h-64 rounded overflow-hidden shadow">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={getGoogleMapUrl(selectedProperty.address)}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

          {/* Logo with glow effect */}
          <div className="flex justify-center mb-8">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <img
                src="https://icones.pro/wp-content/uploads/2021/02/icone-de-la-maison-bleue.png"
                alt="EstateVista Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
            About <span className="text-blue-300">EstateVista</span>
          </h2>

          <p className="max-w-3xl mx-auto mb-12 text-lg md:text-xl leading-relaxed text-blue-100">
            EstateVista is India’s trusted real estate platform—helping you find your dream home or investment with ease, transparency, and confidence. Our goal is to make homeownership and renting simple and stress-free.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-md">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-semibold text-xl text-white mb-2">Verified Listings</h3>
              <p className="text-blue-100">
                Every listing is thoroughly verified for accuracy, so you can browse with peace of mind.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-md">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-semibold text-xl text-white mb-2">Trusted Support</h3>
              <p className="text-blue-100">
                Personalized support every step of the way—from browsing to closing the deal.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:scale-105 transition-transform duration-300 shadow-md">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-semibold text-xl text-white mb-2">Smart & Easy Search</h3>
              <p className="text-blue-100">
                Find properties effortlessly using powerful filters and user-friendly tools.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
