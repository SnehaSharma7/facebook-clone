import { useEffect, useState } from "react";
import {
  getPendingRequests,
  acceptFriendRequest,
  rejectFriendRequest,
} from "../services/users";

const CURRENT_USER_ID = 1;

export default function FriendRequests() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    getPendingRequests(CURRENT_USER_ID).then((res) => setRequests(res.data));
  }, []);

  const accept = async (id: number) => {
    await acceptFriendRequest(CURRENT_USER_ID, id);
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const reject = async (id: number) => {
    await rejectFriendRequest(CURRENT_USER_ID, id);
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="font-semibold mb-4">Friend Requests</h2>

      {requests.map((r) => (
        <div
          key={r.id}
          className="flex justify-between bg-white p-3 mb-2 rounded"
        >
          <span>User {r.id}</span>
          <div className="flex gap-2">
            <button onClick={() => accept(r.id)} className="text-green-600">
              Accept
            </button>
            <button onClick={() => reject(r.id)} className="text-red-600">
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
