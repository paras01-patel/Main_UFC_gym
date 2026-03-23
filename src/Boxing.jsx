import { Link } from "react-router-dom";

function Boxing() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[60vh] bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold">
            BOXING <span className="text-red-500">TRAINING</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Build power, speed & endurance
          </p>
        </div>
      </section>

      {/* ABOUT BOXING */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">What is Boxing?</h2>
          <p className="text-gray-400 mb-4">
            Boxing is a high-intensity combat sport that improves strength,
            speed, and coordination. It’s one of the best workouts for
            cardiovascular fitness.
          </p>
          <p className="text-gray-400">
            At UFC Gym, our boxing program helps you develop powerful punches,
            quick reflexes, and strong endurance.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1517964603305-11c0f6f66012"
            alt="boxing"
            className="rounded-lg shadow-lg"
          />
        </div>

      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 text-black py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Benefits of Boxing</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Strength & Power</h3>
            <p>Increase punching power and muscle strength.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Speed & Reflex</h3>
            <p>Improve reaction time and agility.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Fat Burn</h3>
            <p>Burn calories and lose weight effectively.</p>
          </div>

        </div>
      </section>

      {/* PROGRAM LEVELS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Boxing Program</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Beginner</h3>
            <p className="text-gray-400">Basic punches & footwork.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Intermediate</h3>
            <p className="text-gray-400">Combinations & bag training.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Advanced</h3>
            <p className="text-gray-400">Sparring & pro-level drills.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Step Into the Ring?
        </h2>
        <p className="text-gray-400 mb-6">
          Join our boxing program and unleash your power
        </p>

        <Link to="/membership" className="bg-red-500 px-8 py-3 rounded hover:bg-red-600">
          Join Now
        </Link>
      </section>

    </div>
  );
}

export default Boxing;