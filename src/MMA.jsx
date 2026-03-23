import { Link } from "react-router-dom";

function MMA() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[60vh] bg-[url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold">
            MMA <span className="text-red-500">TRAINING</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Train like a professional fighter
          </p>
        </div>
      </section>

      {/* ABOUT MMA */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">What is MMA?</h2>
          <p className="text-gray-400 mb-4">
            Mixed Martial Arts (MMA) combines techniques from boxing, wrestling,
            jiu-jitsu, and kickboxing. It’s one of the most effective full-body
            training systems.
          </p>
          <p className="text-gray-400">
            At UFC Gym, you’ll train with experienced coaches and learn real
            fight techniques while improving your strength and stamina.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
            alt="mma"
            className="rounded-lg shadow-lg"
          />
        </div>

      </section>

      {/* BENEFITS */}
      <section className="bg-gray-100 text-black py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Benefits of MMA Training</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Full Body Workout</h3>
            <p>Build strength, endurance, and flexibility.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Self Defense</h3>
            <p>Learn practical fighting and defense skills.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2"> Fat Loss</h3>
            <p>Burn calories and stay in peak shape.</p>
          </div>

        </div>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our MMA Program</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Beginner</h3>
            <p className="text-gray-400">Basics of striking & grappling.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Intermediate</h3>
            <p className="text-gray-400">Advanced combos & sparring.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold text-red-500 mb-2">Pro Level</h3>
            <p className="text-gray-400">Fight-level training & conditioning.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Train Like a Fighter?
        </h2>
        <p className="text-gray-400 mb-6">
          Join our MMA program and transform yourself
        </p>

        <Link to="/membership" className="bg-red-500 px-8 py-3 rounded hover:bg-red-600">
          Join Now
        </Link>
      </section>

    </div>
  );
}

export default MMA;