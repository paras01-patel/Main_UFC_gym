import { Link } from "react-router-dom";

function Fitness() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[70vh] bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f')] bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            FITNESS <span className="text-red-500">TRAINING</span>
          </h1>
          <p className="text-gray-300 mt-4 max-w-xl mx-auto">
            Transform your body, build confidence & unlock your true strength
          </p>

          <div className="mt-6 flex gap-4 justify-center">
            <Link to="/membership" className="bg-red-500 px-6 py-3 rounded hover:bg-red-600">
              Join Now
            </Link>
            <Link to="/contact" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black">
              Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">What is Fitness Training?</h2>
          <p className="text-gray-400 mb-4">
            Fitness training is not just about lifting weights — it’s about building
            a stronger, healthier, and more confident version of yourself.
          </p>
          <p className="text-gray-400 mb-6">
            At UFC Gym, we combine science-based workouts, modern equipment,
            and expert coaching to deliver real results.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Personalized workout plans</li>
            <li>✔ Certified trainers</li>
            <li>✔ Modern equipment</li>
            <li>✔ Diet & nutrition guidance</li>
          </ul>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
            alt="fitness"
            className="rounded-xl shadow-lg hover:scale-105 transition"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-900 py-16 text-center">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold text-red-500">500+</h3>
            <p className="text-gray-400">Active Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-500">50+</h3>
            <p className="text-gray-400">Expert Trainers</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-500">10+</h3>
            <p className="text-gray-400">Programs</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-red-500">5★</h3>
            <p className="text-gray-400">User Rating</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 text-black py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Benefits of Fitness Training</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">💪 Strength</h3>
            <p>Increase muscle power and endurance.</p>
          </div>

          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">🔥 Fat Loss</h3>
            <p>Burn calories and achieve lean physique.</p>
          </div>

          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">⚡ Energy</h3>
            <p>Boost stamina and daily productivity.</p>
          </div>

        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Fitness Programs</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-8 rounded hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Beginner</h3>
            <p className="text-gray-400 mb-4">Start your fitness journey</p>
            <p className="text-sm text-gray-500">Basic training + guidance</p>
          </div>

          <div className="bg-gray-900 p-8 rounded hover:scale-105 transition border border-red-500">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Intermediate</h3>
            <p className="text-gray-400 mb-4">Level up your strength</p>
            <p className="text-sm text-gray-500">Strength & conditioning</p>
          </div>

          <div className="bg-gray-900 p-8 rounded hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Advanced</h3>
            <p className="text-gray-400 mb-4">Transform your physique</p>
            <p className="text-sm text-gray-500">Intense pro workouts</p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Members Say</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-black p-6 rounded">
            <p className="text-gray-400">
              "Best gym experience ever. Trainers are amazing!"
            </p>
            <h4 className="mt-4 text-red-500">– Rahul</h4>
          </div>

          <div className="bg-black p-6 rounded">
            <p className="text-gray-400">
              "Lost 10kg in 3 months. Highly recommended!"
            </p>
            <h4 className="mt-4 text-red-500">– Aman</h4>
          </div>

          <div className="bg-black p-6 rounded">
            <p className="text-gray-400">
              "Great environment and modern equipment."
            </p>
            <h4 className="mt-4 text-red-500">– Sneha</h4>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Fitness Journey Today
        </h2>
        <p className="text-gray-400 mb-6">
          Join UFC Gym and achieve your dream physique
        </p>

        <Link
          to="/membership"
          className="bg-red-500 px-10 py-4 rounded text-lg hover:bg-red-600"
        >
          Join Now
        </Link>
      </section>

    </div>
  );
}

export default Fitness;