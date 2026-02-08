// src/pages/SmartTools.jsx

export default function SmartTools() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl space-y-6 text-center">
        <h1 className="text-5xl font-bold text-purple-400 mb-4">Smart Tools</h1>
        <p className="text-lg text-gray-300">
          Leverage EstateVista's advanced, AI-powered tools to make smarter real
          estate decisions. Explore interactive maps, price trend analytics, and
          personalized property recommendations.
        </p>
        <p className="text-gray-400">
          Our platform's intelligent filters and real-time data insights help you find
          the properties that best fit your needs with minimum effort and maximum
          accuracy.
        </p>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Smart Tools"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
