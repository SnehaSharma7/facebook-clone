import { useState } from "react";
import {
  FaHome,
  FaUserFriends,
  FaVideo,
  FaStore,
  FaBell,
} from "react-icons/fa";

export default function MobileNavbar() {
  const [active, setActive] = useState("home");

  const item = (key, Icon) => (
    <button
      onClick={() => setActive(key)}
      className={`flex-1 flex justify-center items-center ${
        active === key ? "text-blue-600" : "text-gray-500"
      }`}
    >
      <Icon className="text-xl" />
    </button>
  );

  return (
    <div className="fixed bottom-0 left-0 w-full h-14 bg-white border-t flex md:hidden z-50">
      {item("home", FaHome)}
      {item("friends", FaUserFriends)}
      {item("watch", FaVideo)}
      {item("marketplace", FaStore)}
      {item("notifications", FaBell)}
    </div>
  );
}
