import { useLocation, Link, useNavigate } from "react-router-dom";

function YourMem() {
const location = useLocation();
const navigate = useNavigate();
const data = location.state;

  if (!data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1>No Membership Found ❌</h1>
      </div>
    );
  }

  function handleCancel() {
    alert("Membership Cancelled ");
    navigate("/membership");   
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-gray-900 p-8 rounded text-center">
        <h2 className="text-2xl mb-4">Your Membership</h2>

        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Plan: {data.plan}</p>

        <div className="mt-4 flex gap-4 justify-center">
        
        <Link
            to="/AA"
            className="bg-green-500 px-4 py-2 rounded"
        >
            Edit
        </Link>

        <button
            onClick={handleCancel}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-70"

        >
            
    Cancel Plan
        </button>

        </div>
      </div>

    </div>
  );
}

export default YourMem;