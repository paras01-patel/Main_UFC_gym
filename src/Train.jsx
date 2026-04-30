import { motion } from "framer-motion";

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

      {/* HERO */}
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

      {/* PROGRAMS */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>

                <button className="mt-4 w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-300">
                  Join Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="p-10 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-xl font-bold text-yellow-400">💪 Expert Trainers</h3>
            <p className="text-gray-400 mt-2">Certified professionals to guide you</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400">🔥 Fat Loss Programs</h3>
            <p className="text-gray-400 mt-2">Special plans to burn fat quickly</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-yellow-400">🏋️ Modern Equipment</h3>
            <p className="text-gray-400 mt-2">Train with latest machines</p>
          </div>
        </div>
      </section>

      {/* TIMING / SCHEDULE */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Training Schedule
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-xl">
          <div className="flex justify-between border-b py-2">
            <span>Morning Batch</span>
            <span>6:00 AM - 10:00 AM</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Evening Batch</span>
            <span>5:00 PM - 10:00 PM</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Personal Training</span>
            <span>Flexible</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="p-10 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Members Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black p-5 rounded-xl">
            <p className="text-gray-400">
              "Amazing trainers and great environment!"
            </p>
            <h4 className="mt-3 font-bold text-yellow-400">Rahul</h4>
          </div>

          <div className="bg-black p-5 rounded-xl">
            <p className="text-gray-400">
              "I lost 8kg in 2 months 🔥"
            </p>
            <h4 className="mt-3 font-bold text-yellow-400">Aman</h4>
          </div>

          <div className="bg-black p-5 rounded-xl">
            <p className="text-gray-400">
              "Best gym experience ever!"
            </p>
            <h4 className="mt-3 font-bold text-yellow-400">Sneha</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center p-10 bg-yellow-400 text-black">
        <h2 className="text-3xl font-bold">
          Start Your Fitness Journey Today
        </h2>
        <button className="mt-4 bg-black text-white px-6 py-3 rounded font-bold hover:bg-gray-800">
          Get Membership
        </button>
      </section>

    </div>
  );
}

export default Train;