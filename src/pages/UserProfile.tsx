import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MobileNavbar from "../components/MobileNavbar";
import RightSidebar from "../components/RightSidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById, getFriends, sendFriendRequest } from "../services/users";
import { normalizeUser } from "../utils/normalize";

/* TEMP */
const CURRENT_USER_ID = 1;

export default function UserProfile() {
  const { id } = useParams();
  const userId = Number(id);

  const [user, setUser] = useState<any>(null);
  const [friends, setFriends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const userRes = await getUserById(userId);
        setUser(normalizeUser(userRes.data));

        const friendsRes = await getFriends(userId);
        setFriends(friendsRes.data.map(normalizeUser));
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [userId]);

  const sendRequest = async () => {
    await sendFriendRequest(CURRENT_USER_ID, userId);
    setRequestSent(true);
  };

  if (loading) return <p className="text-center">Loading profile...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <>
      <Navbar />

      <div className="pt-14 h-screen flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="max-w-xl mx-auto p-4">
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>

              {userId !== CURRENT_USER_ID && (
                <button
                  onClick={sendRequest}
                  disabled={requestSent}
                  className={`mt-3 px-4 py-1 rounded text-white ${
                    requestSent ? "bg-gray-400" : "bg-blue-600"
                  }`}
                >
                  {requestSent ? "Request Sent" : "Add Friend"}
                </button>
              )}
            </div>

            <div className="mt-4 bg-white rounded shadow p-4">
              <h3 className="font-medium mb-2">Friends</h3>

              {friends.length === 0 && (
                <p className="text-sm text-gray-500">No friends yet</p>
              )}

              {friends.map((f) => (
                <div key={f.id} className="text-sm py-1">
                  {f.name}
                </div>
              ))}
            </div>
          </div>
        </main>

        <RightSidebar />
      </div>

      <MobileNavbar />
    </>
  );
}
