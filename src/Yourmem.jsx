import { useLocation, Link, useNavigate } from "react-router-dom";

function YourMem() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-xl">No Membership Found 😢</h1>
      </div>
    );
  }

  function handleCancel() {
    const confirmCancel = window.confirm("Are you sure you want to cancel?");
    if (confirmCancel) {
      alert("Membership Cancelled ❌");
      navigate("/membership");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex items-center justify-center p-4">

      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center hover:scale-105 transition">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">Your Membership</h2>

        {/* Status */}
        <span className="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm mb-4">
          Active Plan ✅
        </span>

        {/* User Info */}
        <div className="text-left space-y-2 mt-4">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Plan:</strong> <span className="text-yellow-400">{data.plan}</span></p>

          {/* Extra Fields */}
          <p><strong>Start Date:</strong> {data.startDate || "N/A"}</p>
          <p><strong>Expiry:</strong> {data.expiry || "N/A"}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center">

          <Link
            to="/AA"
            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            ✏️ Edit
          </Link>

          <button
            onClick={handleCancel}
            className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            ❌ Cancel Plan
          </button>

          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            ⬅️ Back
          </button>

        </div>
      </div>
    </div>
  );
}

export default YourMem;