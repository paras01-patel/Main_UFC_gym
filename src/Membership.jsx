import { Link } from "react-router-dom";
import { useState } from "react";

function Membership() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="h-[50vh] bg-[url('https://images.unsplash.com/photo-1594737625785-cb0c45c3d43d')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/70 p-8 rounded text-center">
          <h1 className="text-5xl font-bold">
            MEMBERSHIP <span className="text-red-500">PLANS</span>
          </h1>
          <p className="text-gray-300 mt-4">
            Choose your plan and start your fitness journey
          </p>
        </div>
      </section>

      {/* TOGGLE */}
      <div className="text-center mt-10">
        <button
          onClick={() => setYearly(false)}
          className={`px-6 py-2 mx-2 rounded ${!yearly ? "bg-red-500" : "bg-gray-700"}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setYearly(true)}
          className={`px-6 py-2 mx-2 rounded ${yearly ? "bg-red-500" : "bg-gray-700"}`}
        >
          Yearly (Save 20%)
        </button>
      </div>

      {/* PLANS */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Plans</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* BASIC */}
          <div className="bg-gray-900 p-8 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold text-red-500 mb-4">
              ₹{yearly ? "7999" : "999"}
              <span className="text-sm">/{yearly ? "yr" : "mo"}</span>
            </p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✔ Gym Access</li>
              <li>✔ Basic Equipment</li>
              <li>❌ Personal Trainer</li>
            </ul>
            <Link to="/AA" className="bg-red-500 px-6 py-2 rounded hover:bg-red-600">
              Join Now
            </Link>
          </div>

          {/* STANDARD */}
          <div className="bg-red-500 text-black p-8 rounded-lg shadow-lg scale-105 relative">
            <span className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-sm rounded">
              Most Popular
            </span>
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <p className="text-4xl font-bold mb-4">
              ₹{yearly ? "15999" : "1999"}
              <span className="text-sm">/{yearly ? "yr" : "mo"}</span>
            </p>
            <ul className="space-y-2 mb-6">
              <li>✔ Gym Access</li>
              <li>✔ MMA & Boxing</li>
              <li>✔ Group Training</li>
            </ul>
            <Link to="/AA" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Join Now
            </Link>
          </div>

          {/* PREMIUM */}
          <div className="bg-gray-900 p-8 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold text-red-500 mb-4">
              ₹{yearly ? "23999" : "2999"}
              <span className="text-sm">/{yearly ? "yr" : "mo"}</span>
            </p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✔ All Access</li>
              <li>✔ Personal Trainer</li>
              <li>✔ Diet Plan</li>
            </ul>
            <Link to="/AA" className="bg-red-500 px-6 py-2 rounded hover:bg-red-600">
              Join Now
            </Link>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>🏋️ Modern Equipment</div>
          <div>🥊 MMA & Boxing Training</div>
          <div>👨‍🏫 Expert Trainers</div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">What Our Members Say</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          "Best gym experience ever! Trainers are amazing and environment is motivating."
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-900 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">FAQ</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-black p-4 rounded">
            <summary>Can I cancel anytime?</summary>
            <p className="text-gray-400 mt-2">Yes, you can cancel anytime.</p>
          </details>

          <details className="bg-black p-4 rounded">
            <summary>Do you provide personal trainers?</summary>
            <p className="text-gray-400 mt-2">Only in Premium plan.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-gray-400 mb-6">
          Transform your body with UFC Gym today
        </p>

        <Link to="/" className="bg-red-500 px-8 py-3 rounded hover:bg-red-600">
          Get Started
        </Link>
      </section>

    </div>
  );
}

export default Membership;