import {
  FaUserFriends,
  FaUsers,
  FaStore,
  FaVideo,
  FaClock,
  FaBookmark,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const items = [
  { icon: FaUser, label: "Users", path: "/users" },
  { icon: FaUserFriends, label: "Friends", path: "/friends" },
  { icon: FaUsers, label: "Groups", path: "/groups" },
  { icon: FaStore, label: "Marketplace", path: "/marketplace" },
  { icon: FaVideo, label: "Watch", path: "/watch" },
  { icon: FaClock, label: "Memories", path: "/memories" },
  { icon: FaBookmark, label: "Saved", path: "/saved" },
  { icon: FaCalendarAlt, label: "Events", path: "/events" },
];

export default function SidebarContent() {
  return (
    <ul className="space-y-2">
      {items.map(({ icon: Icon, label, path }) => (
        <li key={label}>
          <Link
            to={path}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
          >
            <Icon className="text-xl text-blue-600" />
            <span className="text-sm font-medium">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
