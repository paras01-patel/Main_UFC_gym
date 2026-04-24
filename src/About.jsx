function About() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[70vh] bg-[url('https://images.unsplash.com/photo-1571019613914-85f342c55f8b')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-10 rounded-xl text-center backdrop-blur">
          <h1 className="text-5xl md:text-6xl font-bold">
            ABOUT <span className="text-red-500">UFC GYM</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Train Different. Train Better.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-400 mb-4">
            UFC Gym is a world-class fitness destination combining mixed martial arts,
            boxing, and strength training programs under one roof.
          </p>
          <p className="text-gray-400">
            Our mission is to transform lives through fitness, discipline, and
            professional coaching using world-class equipment.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
            alt="gym"
            className="rounded-xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Certified Trainers",
            "Modern Equipment",
            "Flexible Timings",
            "Personal Coaching",
          ].map((item, i) => (
            <div key={i} className="bg-black p-6 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-lg font-semibold text-red-500">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-100 text-black py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">MMA Training</h3>
            <p>Professional mixed martial arts coaching.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Boxing Classes</h3>
            <p>Improve stamina, power, and agility.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Fitness Programs</h3>
            <p>Strength & conditioning workouts.</p>
          </div>

        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Meet Our Trainers</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {["Trainer 1", "Trainer 2", "Trainer 3"].map((name, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
              <img
                src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                alt="trainer"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-gray-400 text-sm">Professional Coach</p>
            </div>
          ))}

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Members Say</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            "Amazing gym with great trainers!",
            "Best fitness experience ever.",
            "Highly recommend for beginners & pros.",
          ].map((text, i) => (
            <div key={i} className="bg-black p-6 rounded-xl shadow">
              <p className="text-gray-300">"{text}"</p>
            </div>
          ))}

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 text-center">
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

      {/* CTA */}
      <section className="bg-red-500 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Start Your Fitness Journey Today</h2>
        <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
          Join Now
        </button>
      </section>

    </div>
  );
}

export default About;