import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import CreatePostBox from "../components/CreatePostBox";
import PostCard from "../components/PostCard";
import MobileNavbar from "../components/MobileNavbar";
import RightSidebar from "../components/RightSidebar";
import CreatePostModal from "../components/CreatePostModal";
import { useState, useEffect } from "react";
import { getTimelinePosts, createPost } from "../services/posts";
import { normalizePost } from "../utils/normalize";

/* TEMP – replace with auth later */
const CURRENT_USER_ID = 1;

interface Post {
  id: number;
  username: string;
  desc: string;
  photo?: string;
  created_at?: string;
  likes?: number;
  comments?: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  /* CREATE POST */
  const handleCreatePost = async (text: string) => {
    const res = await createPost({
      user_id: CURRENT_USER_ID,
      content: text,
    });

    const newPost = normalizePost(res.data);

    setPosts((prev) => [newPost, ...prev]);

    console.log("CREATED POST:", res.data);
    return newPost;
  };

  /* FETCH FEED (TIMELINE) */
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await getTimelinePosts(CURRENT_USER_ID);
        setPosts(res.data.map(normalizePost));
      } catch (err) {
        console.warn("Timeline failed, using local posts");
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  /* DELETE POST (UI ONLY – API handled in PostCard) */
  const removePost = (id: number) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="pt-14 h-screen flex overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="max-w-2xl mx-auto p-4">
            <Stories />
            <CreatePostBox onOpen={() => setOpen(true)} />

            {loading && (
              <p className="text-center text-gray-500">Loading feed...</p>
            )}

            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && posts.length === 0 && (
              <p className="text-center text-gray-500">No posts available</p>
            )}

            {posts.map((post) => (
              <PostCard key={post.id} post={post} onDelete={removePost} />
            ))}
          </div>
        </main>

        <RightSidebar />
      </div>

      {open && (
        <CreatePostModal
          onClose={() => setOpen(false)}
          onCreate={handleCreatePost}
        />
      )}

      <MobileNavbar />
    </>
  );
}
