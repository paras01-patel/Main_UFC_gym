import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [sign, setSign] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setSign({ ...sign, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (sign.password !== sign.confirm_password) {
      alert("Password does not match ❌");
      return;
    }

    localStorage.setItem(
      "userdata",
      JSON.stringify({
        name: sign.name,
        email: sign.email,
        password: sign.password,
      })
    );

    alert("Signup Successful ");
    navigate("/login");
  }

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded w-96">
        <h2 className="text-2xl mb-4 text-center">Signup</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 bg-black border" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 bg-black border" />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} className="w-full p-2 bg-black border" />
          <input name="confirm_password" placeholder="Confirm Password" type="password" onChange={handleChange} className="w-full p-2 bg-black border" />

          <button className="w-full bg-red-500 p-2">Signup</button>
        </form>

        <p className="text-center mt-3">
          Already have account? <Link to="/login" className="text-red-500">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;