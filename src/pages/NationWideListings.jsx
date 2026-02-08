// src/pages/NationwideListings.jsx

export default function NationwideListings() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-4xl space-y-6 text-center">
        <h1 className="text-5xl font-bold text-purple-400 mb-4">Nationwide Listings</h1>
        <p className="text-lg text-gray-300">
          Discover thousands of properties across India, from bustling metro cities to
          tranquil countryside escapes. Our extensive database is updated daily to
          ensure you have access to the latest listings.
        </p>
        <p className="text-gray-400">
          Use our smart filters to narrow down your search by location, budget,
          property type, and amenities to find the perfect home or investment
          opportunity.
        </p>
        <img
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          alt="Nationwide Listings"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
