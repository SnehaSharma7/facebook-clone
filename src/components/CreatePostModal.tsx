import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface CreatePostModalProps {
  onClose: () => void;
  onCreate: (text: string) => Promise<any>;
}

export default function CreatePostModal({
  onClose,
  onCreate,
}: CreatePostModalProps) {
  const [text, setText] = useState("");

  const handlePost = async () => {
    if (!text.trim()) return;

    console.log("Posting text:", text);

    try {
      await onCreate(text); // wait for API
      setText("");
      onClose();
    } catch {
      alert("Post failed");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-semibold text-lg">Create post</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <span className="font-medium">Facebook User</span>
          </div>

          <textarea
            rows="4"
            placeholder="What’s on your mind?"
            className="w-full resize-none outline-none text-lg"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* Footer */}
        <div className="p-4">
          <button
            onClick={handlePost}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
