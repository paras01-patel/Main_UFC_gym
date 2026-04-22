import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="bg-black text-white">

      <section className="h-screen bg-[url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-10 rounded-lg text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">
            TRAIN LIKE A <span className="text-red-500">FIGHTER</span>
          </h1>
          <p className="text-gray-300 mb-6">
            MMA • Boxing • Fitness — All in one place
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/membership" className="bg-red-500 px-6 py-3 rounded hover:bg-red-600 transition">
              Join Now
            </Link>
            <Link to="/about" className="border px-6 py-3 rounded hover:bg-white hover:text-black transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>


      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Training Programs</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">MMA</h3>
            <p className="text-gray-400">Train like a professional fighter.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Boxing</h3>
            <p className="text-gray-400">Build strength and endurance.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Fitness</h3>
            <p className="text-gray-400">Complete body transformation.</p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 text-black py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Expert Trainers</h3>
            <p>Train with experienced professionals.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Modern Equipment</h3>
            <p>Top-class gym machines & facilities.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Flexible Plans</h3>
            <p>Affordable membership options.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Your Body?
        </h2>
        <p className="text-gray-400 mb-6">
          Join now and start your fitness journey
        </p>

        <Link to="/membership" className="bg-red-500 px-8 py-3 rounded hover:bg-red-600 transition">
          Get Membership
        </Link>
      </section>

    </div>
  );
}

export default Home;