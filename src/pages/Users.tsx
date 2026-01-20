import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MobileNavbar from "../components/MobileNavbar";
import RightSidebar from "../components/RightSidebar";
import { useEffect, useState } from "react";
import { getUsers } from "../services/users";
import { normalizeUser } from "../utils/normalize";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data.map(normalizeUser)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-14 h-screen flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="max-w-xl mx-auto p-4">
            <h2 className="font-semibold text-lg mb-4">All Users</h2>

            {loading && <p>Loading users...</p>}

            {users.map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between bg-white p-3 rounded shadow mb-2"
              >
                <span>{u.name}</span>
                <button
                  onClick={() => navigate(`/users/${u.id}`)}
                  className="text-blue-600 text-sm"
                >
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </main>

        <RightSidebar />
      </div>

      <MobileNavbar />
    </>
  );
}
