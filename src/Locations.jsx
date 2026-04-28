import { useState } from "react";

function Locations() {
  const [search, setSearch] = useState("");

  const gyms = [
    { city: "Mumbai", area: "Andheri West", phone: "+91 9876543210", rating: "4.8" },
    { city: "Delhi", area: "Connaught Place", phone: "+91 9876543211", rating: "4.7" },
    { city: "Bangalore", area: "Indiranagar", phone: "+91 9876543212", rating: "4.9" },
    { city: "Hyderabad", area: "Banjara Hills", phone: "+91 9876543213", rating: "4.6" },
    { city: "Pune", area: "Koregaon Park", phone: "+91 9876543214", rating: "4.5" },
    { city: "Indore", area: "Vijay Nagar", phone: "+91 9876543215", rating: "4.7" },
  ];

  const filteredGyms = gyms.filter((gym) =>
    gym.city.toLowerCase().includes(search.toLowerCase())
  );

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

      {/* SEARCH */}
      <div className="text-center py-10">
        <input
          type="text"
          placeholder="Search city..."
          className="px-4 py-2 rounded text-black w-72"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="ml-3 bg-red-500 px-4 py-2 rounded hover:bg-red-600">
          📍 Near Me
        </button>
      </div>

      {/* LOCATIONS */}
      <section className="pb-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">India Locations</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {filteredGyms.map((gym, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-red-500 mb-2">
                {gym.city}
              </h3>

              <p className="text-gray-400">{gym.area}</p>

              <p className="text-gray-400">📞 {gym.phone}</p>

              <p className="text-yellow-400 mt-2">
                ⭐ {gym.rating} Rating
              </p>

              <p className="text-green-400 text-sm mt-1">
                Open Now
              </p>

              <button className="mt-4 w-full bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                View Details
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* MAP */}
      <section className="py-16 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Find Us on Map</h2>

        <div className="max-w-4xl mx-auto rounded overflow-hidden">
          <iframe
            title="map"
            className="w-full h-[400px]"
            src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
          ></iframe>
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