// src/pages/TrustedAgents.jsx

export default function TrustedAgents() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl space-y-6 text-center">
        <h1 className="text-5xl font-bold text-purple-400 mb-4">Trusted Agents</h1>
        <p className="text-lg text-gray-300">
          At EstateVista, we collaborate with only the most reliable and highly rated
          agents in the industry. Each agent goes through a meticulous verification
          and review process to ensure they meet our high standards of professionalism
          and expertise.
        </p>
        <p className="text-gray-400">
          Whether you are buying, selling, or renting, our trusted agents are here to
          guide you through every step, providing local expertise, market insights, and
          unmatched customer service.
        </p>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="EstateVista Trusted Agents"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
