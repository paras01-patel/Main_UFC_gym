import { Link } from "react-router-dom";

function Membership() {
  return (
    <div className="bg-black text-white">

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

      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Plans</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-900 p-8 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold text-red-500 mb-4">₹999/mo</p>
            <ul className="text-gray-400 space-y-2 mb-6">
              <li>✔ Gym Access</li>
              <li>✔ Basic Equipment</li>
              <li>❌ Personal Trainer</li>
            </ul>
            <Link to="/AA" className="bg-red-500 px-6 py-2 rounded hover:bg-red-600">
              Join Now
            </Link>
          </div>

          <div className="bg-red-500 text-black p-8 rounded-lg shadow-lg scale-105">
            <h3 className="text-2xl font-semibold mb-4">Standard</h3>
            <p className="text-4xl font-bold mb-4">₹1999/mo</p>
            <ul className="space-y-2 mb-6">
              <li>✔ Gym Access</li>
              <li>✔ MMA & Boxing</li>
              <li>✔ Group Training</li>
            </ul>
            <Link to="/AA" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Most Popular
            </Link>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold text-red-500 mb-4">₹2999/mo</p>
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

      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Join?
        </h2>
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