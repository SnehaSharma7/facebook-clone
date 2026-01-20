import Comment from "./Comment";
import { useEffect, useState } from "react";
import { getComments, addComment } from "../services/posts";
import { normalizeComment } from "../utils/normalize";

export default function CommentSection({ postId }: { postId: number }) {
  const [text, setText] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    getComments(postId).then((res) => setComments(res.data));
  }, [postId]);

  const CURRENT_USER_ID = 1;

  const submit = async () => {
    if (!text.trim()) return;

    try {
      const res = await addComment(postId, {
        user_id: CURRENT_USER_ID,
        post_id: postId,
        content: text,
      });

      console.log("CREATED COMMENT:", res.data);

      setComments((prev) => [...prev, normalizeComment(res.data)]);
      setText("");
    } catch (err) {
      console.error("Add comment failed:", err);
    }
  };

  return (
    <div className="p-4">
      {/* Input */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 bg-gray-100 rounded-full px-3 py-2 text-sm outline-none"
        />
        <button onClick={submit} className="text-blue-600 text-sm font-medium">
          Post
        </button>
      </div>

      {/* Comments */}
      {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
}
