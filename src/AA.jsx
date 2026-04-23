import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AA() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.phone || !form.plan) {
      setError("All fields are required!");
      return;
    }

    if (form.phone.length !== 10) {
      setError("Phone must be 10 digits");
      return;
    }

    setSuccess("Form Submitted Successfully ✅");

    setTimeout(() => {
      navigate("/yourmem", { state: form });
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white flex items-center justify-center px-4">

      <form 
        onSubmit={handleSubmit} 
        className="bg-gray-900 p-8 rounded-xl w-full max-w-sm shadow-lg border border-gray-700"
      >
        <h2 className="text-3xl font-bold mb-2 text-center text-red-500">
          Gym Membership
        </h2>

        <p className="text-sm text-gray-400 text-center mb-5">
          Join now and transform your body 💪
        </p>

        {/* ERROR */}
        {error && <p className="text-red-400 mb-3">{error}</p>}
        {success && <p className="text-green-400 mb-3">{success}</p>}

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500"
        />

        <input
          name="email"
          placeholder="Email Address"
          type="email"
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          type="number"
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500"
        />

        <select
          name="plan"
          onChange={handleChange}
          className="w-full mb-4 p-2 bg-black border border-gray-700 rounded focus:outline-none focus:border-red-500"
        >
          <option value="">Select Plan</option>
          <option value="Basic">Basic - ₹999/month</option>
          <option value="Standard">Standard - ₹1499/month</option>
          <option value="Premium">Premium - ₹1999/month</option>
        </select>

        {/* PLAN FEATURES */}
        {form.plan && (
          <div className="bg-black p-3 mb-4 rounded text-sm border border-gray-700">
            {form.plan === "Basic" && <p>✔ Gym Access</p>}
            {form.plan === "Standard" && <p>✔ Gym + Cardio + Trainer</p>}
            {form.plan === "Premium" && <p>✔ All Access + Personal Trainer + Diet Plan</p>}
          </div>
        )}

        <button className="bg-red-500 hover:bg-red-600 transition w-full p-2 rounded font-semibold">
          Submit
        </button>
      </form>

    </div>
  );
}

export default AA;