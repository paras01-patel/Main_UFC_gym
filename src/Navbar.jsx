import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const savedUser = localStorage.getItem("userdata");
  const user = savedUser ? JSON.parse(savedUser) : null;

  function logout() {
    localStorage.removeItem("userdata");
    navigate("/login");
    window.location.reload();
  }

  return (
    <nav className="bg-black text-white flex justify-between px-8 py-4">

      <h1 className="text-red-500 text-xl font-bold">UFC GYM</h1>

      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        <li className="relative group">
          <span>Train ▾</span>
          <ul className="absolute hidden group-hover:block bg-black p-2">
            <li><Link to="/mma">MMA</Link></li>
            <li><Link to="/boxing">Boxing</Link></li>
            <li><Link to="/fitness">Fitness</Link></li>
          </ul>
        </li>

        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/locations">Locations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div>
        {user ? (
          <>
            <span className="text-red-500 mr-3">Hello, {user.name}</span>
            <button onClick={logout} className="border px-2  bg-red-600 rounded-2xl">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-3">Login</Link>
            <Link to="/signup" className="bg-red-500 px-2">Join</Link>
          </>
        )}
      </div>

    </nav>
  );
}

export default Navbar;