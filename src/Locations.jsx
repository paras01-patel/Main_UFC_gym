function Locations() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[50vh] bg-[url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold">
            OUR <span className="text-red-500">LOCATIONS</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Find a UFC Gym near you
          </p>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">India Locations</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Location Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Mumbai</h3>
            <p className="text-gray-400">Andheri West, Mumbai</p>
            <p className="text-gray-400 mb-4">📞 +91 9876543210</p>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              View Details
            </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Delhi</h3>
            <p className="text-gray-400">Connaught Place, Delhi</p>
            <p className="text-gray-400 mb-4">📞 +91 9876543211</p>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              View Details
            </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Bangalore</h3>
            <p className="text-gray-400">Indiranagar, Bangalore</p>
            <p className="text-gray-400 mb-4">📞 +91 9876543212</p>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              View Details
            </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Hyderabad</h3>
            <p className="text-gray-400">Banjara Hills, Hyderabad</p>
            <p className="text-gray-400 mb-4">📞 +91 9876543213</p>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              View Details
            </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Pune</h3>
            <p className="text-gray-400">Koregaon Park, Pune</p>
            <p className="text-gray-400 mb-4">📞 +91 9876543214</p>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              View Details
            </button>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Indore</h3>
            <p className="text-gray-400">Vijay Nagar, Indore</p>
            <p className="text-gray-400 mb-4">📞 +91 9876543215</p>
            <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              View Details
            </button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Join Your Nearest Gym?
        </h2>
        <p className="text-gray-400 mb-6">
          Choose your location and start training today
        </p>

        <button className="bg-red-500 px-8 py-3 rounded hover:bg-red-600">
          Join Now
        </button>
      </section>

    </div>
  );
}

export default Locations;