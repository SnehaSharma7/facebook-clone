import { Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { PostProvider } from "./context/PostContext";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";

export default function App() {
  return (
    <PostProvider>
      <Routes>
        {/* Public */}
        <Route
          path="/"
          element={
            <>
              <SignedOut>
                <Login />
              </SignedOut>
              <SignedIn>
                <Home />
              </SignedIn>
            </>
          }
        />

        {/* Protected */}
        {/* <Route
          path="/home"
          element={
            <SignedIn>
              <Home />
            </SignedIn>
          }
        /> */}
        {/* Users list */}
        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<UserProfile />} />

        {/* Fallback */}
        <Route path="*" element={<RedirectToSignIn />} />
      </Routes>
    </PostProvider>
  );
}
