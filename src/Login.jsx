import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const savedUser = localStorage.getItem("userdata");
    const user = savedUser ? JSON.parse(savedUser) : null;

    if (user && user.email === login.email && user.password === login.password) {
      alert("Login Success ✅");
      navigate("/");
      window.location.reload(); // 🔥 important for navbar update
    } else {
      alert("Invalid Credentials ❌");
    }
  }

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded w-96">
        <h2 className="text-2xl mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 bg-black border" />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 bg-black border" />

          <button className="w-full bg-red-500 p-2">Login</button>
        </form>

        <p className="text-center mt-3">
          Don't have account? <Link to="/signup" className="text-red-500">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;