import {
  FaRegCommentAlt,
  FaRegThumbsUp,
  FaShare,
  FaThumbsUp,
  FaTrash,
} from "react-icons/fa";
import { useState } from "react";
import CommentSection from "./CommentSection";
import { deletePost } from "../services/posts";

interface Post {
  id: number;
  username: string;
  desc: string;
  photo?: string;
  created_at?: string;
  likes?: number;
}

interface PostCardProps {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard = ({ post, onDelete }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes ?? 0);
  const [deleting, setDeleting] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleDelete = async () => {
    if (!confirm("Delete this post?")) return;

    try {
      setDeleting(true);
      await deletePost(post.id);
      onDelete(post.id); // update Home state
    } catch {
      alert("Failed to delete post");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow mb-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <p className="font-medium text-sm">{post.username}</p>
            <p className="text-xs text-gray-500">
              {post.created_at ?? "Just now"}
            </p>
          </div>
        </div>

        {/* Delete */}
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-gray-400 hover:text-red-500 disabled:opacity-50"
          title="Delete post"
        >
          <FaTrash />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3 text-sm text-gray-800">{post.desc}</div>

      {/* Image */}
      {post.photo && (
        <img
          src={post.photo}
          alt="post"
          className="w-full max-h-[450px] object-cover"
        />
      )}

      {/* Likes Count */}
      <div className="px-4 py-2 text-xs text-gray-500">👍 {likeCount}</div>

      {/* Actions */}
      <div className="flex justify-around text-sm text-gray-600 border-t py-2">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 ${
            liked ? "text-blue-600" : "hover:text-blue-600"
          }`}
        >
          {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
          Like
        </button>

        <button className="flex items-center gap-2 hover:text-blue-600">
          <FaRegCommentAlt />
          Comment
        </button>

        <button className="flex items-center gap-2 hover:text-blue-600">
          <FaShare />
          Share
        </button>
      </div>

      {/* Comments */}
      <CommentSection postId={post.id} />
    </div>
  );
};

export default PostCard;
