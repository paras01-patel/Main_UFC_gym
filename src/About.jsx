function About() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[60vh] bg-[url('https://images.unsplash.com/photo-1571019613914-85f342c55f8b')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold">
            ABOUT <span className="text-red-500">UFC GYM</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Train Different. Train Better.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-400 mb-4">
            UFC Gym is a world-class fitness destination combining mixed martial arts,
            boxing, and strength training programs under one roof.
          </p>
          <p className="text-gray-400">
            Our mission is to help people achieve their fitness goals through
            professional coaching and modern equipment.
          </p>
        </div>

        <div>
          <img 
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e" 
            alt="gym" 
            className="rounded-lg shadow-lg"
          />
        </div>

      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 text-black py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">🥊 MMA Training</h3>
            <p>Professional mixed martial arts coaching.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">🥊 Boxing Classes</h3>
            <p>Improve stamina, power, and agility.</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">💪 Fitness Programs</h3>
            <p>Strength & conditioning workouts.</p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-10">Our Achievements</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          <div>
            <h3 className="text-4xl font-bold text-red-500">50+</h3>
            <p className="text-gray-400">Expert Trainers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-500">10K+</h3>
            <p className="text-gray-400">Happy Members</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-500">100+</h3>
            <p className="text-gray-400">Locations Worldwide</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;