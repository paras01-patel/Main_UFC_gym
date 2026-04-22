import { Link } from "react-router-dom";

function Fitness() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[60vh] bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold">
            FITNESS <span className="text-red-500">TRAINING</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Build strength, stamina & transform your body
          </p>
        </div>
      </section>

      {/* ABOUT FITNESS */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">What is Fitness Training?</h2>
          <p className="text-gray-400 mb-4">
            Fitness training focuses on improving strength, endurance,
            flexibility, and overall health through structured workouts.
          </p>
          <p className="text-gray-400">
            At UFC Gym, we provide modern equipment, expert trainers,
            and customized workout plans for all fitness levels.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
            alt="fitness"
            className="rounded-lg shadow-lg"
          />
        </div>

      </section>

      <section className="bg-gray-100 text-black py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Benefits of Fitness Training</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">Strength Building</h3>
            <p>Increase muscle strength and endurance.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Weight Loss</h3>
            <p>Burn calories and stay fit.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Energy Boost</h3>
            <p>Improve stamina and daily performance.</p>
          </div>

        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Fitness Programs</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Beginner</h3>
            <p className="text-gray-400">Basic workouts & guidance.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Intermediate</h3>
            <p className="text-gray-400">Strength & conditioning plans.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Advanced</h3>
            <p className="text-gray-400">Intense training & transformation.</p>
          </div>

        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Fitness Journey Today
        </h2>
        <p className="text-gray-400 mb-6">
          Join UFC Gym and achieve your dream physique
        </p>

        <Link to="/membership" className="bg-red-500 px-8 py-3 rounded hover:bg-red-600">
          Join Now
        </Link>
      </section>

    </div>
  );
}

export default Fitness;