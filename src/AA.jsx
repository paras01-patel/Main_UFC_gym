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

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/yourmem", { state: form });
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded w-[300px]">
        <h2 className="text-2xl mb-4">Gym Form</h2>

        <input name="name" placeholder="Name"
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border" />

        <input name="email" placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border" />

        <input name="phone" placeholder="Phone"
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-black border" />

        <select name="plan" onChange={handleChange}
          className="w-full mb-4 p-2 bg-black border">
          <option>Select Plan</option>
          <option>Basic</option>
          <option>Standard</option>
          <option>Premium</option>
        </select>

        <button className="bg-red-500 w-full p-2">Submit</button>
      </form>

    </div>
  );
}

export default AA;