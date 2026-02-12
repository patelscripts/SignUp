import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <div className="p-6 border rounded">
        <h2 className="text-2xl mb-4">Your Details</h2>

        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <p>Email: {data.email}</p>
        <p>Password: {data.password}</p>
      </div>
    </div>
  );
}

export default Details;
