function Train() {
  const programs = [
    {
      title: "Weight Training",
      desc: "Build muscle strength with expert guidance",
      img: "https://images.unsplash.com/photo-1594737625785-cb0c45c3d43d",
    },
    {
      title: "Cardio Training",
      desc: "Improve stamina and burn fat fast",
      img: "https://images.unsplash.com/photo-1558611848-73f7eb4001ab",
    },
    {
      title: "Personal Training",
      desc: "1-on-1 coaching for best results",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    },
    {
      title: "CrossFit",
      desc: "High intensity functional workouts",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="h-[60vh] bg-[url('https://images.unsplash.com/photo-1517960413843-0aee8e2b3285')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold">
            TRAINING <span className="text-yellow-400">PROGRAMS</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Transform your body with our expert-designed workouts
          </p>
        </div>
      </section>

      {/* PROGRAM SECTION */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>

                <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-300">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-10 bg-yellow-400 text-black">
        <h2 className="text-3xl font-bold">Start Your Fitness Journey Today</h2>
        <button className="mt-4 bg-black text-white px-6 py-3 rounded font-bold hover:bg-gray-800">
          Get Membership
        </button>
      </section>

    </div>
  );
}

export default Train;