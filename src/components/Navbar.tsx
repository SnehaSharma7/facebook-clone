import { useState } from "react";
import {
  FaFacebook,
  FaSearch,
  FaHome,
  FaUserFriends,
  FaVideo,
  FaStore,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import MobileSidebar from "./MobileSidebar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const navItem = (key, Icon) => (
    <button
      onClick={() => setActive(key)}
      className={`flex items-center justify-center w-28 h-12 border-b-4
        ${
          active === key
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:bg-gray-100"
        }`}
    >
      <Icon className="text-xl" />
    </button>
  );

  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-white shadow z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full px-4">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
          <MobileSidebar open={open} onClose={() => setOpen(false)} />

          <FaFacebook className="text-blue-600 text-3xl" />

          <div className="hidden sm:flex items-center bg-gray-100 px-3 py-2 rounded-full">
            <FaSearch className="text-gray-500 text-sm" />
            <input
              placeholder="Search Facebook"
              className="bg-transparent outline-none ml-2 text-sm w-40"
            />
          </div>
        </div>

        {/* CENTER */}
        <nav className="hidden md:flex items-center">
          {navItem("home", FaHome)}
          {navItem("friends", FaUserFriends)}
          {navItem("watch", FaVideo)}
          {navItem("marketplace", FaStore)}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="icon-btn">
            <FaFacebookMessenger />
          </div>
          <div className="icon-btn">
            <FaBell />
          </div>
          <div className="icon-btn">
            <FaCaretDown />
          </div>
          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm">
                  Log in
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
