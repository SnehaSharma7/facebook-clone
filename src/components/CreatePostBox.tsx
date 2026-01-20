import { FaVideo, FaImages, FaSmile } from "react-icons/fa";

interface CreatePostBoxProps {
  onOpen: () => void;
}
export default function CreatePostBox({ onOpen }: CreatePostBoxProps) {
  return (
    <div
      onClick={onOpen}
      className="bg-white rounded-xl shadow p-4 mb-4 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-300" />
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-gray-500">
          What’s on your mind?
        </div>
      </div>

      <hr className="my-3" />

      <div className="flex justify-around text-sm text-gray-600 gap-4">
        <div className="flex items-center gap-2">
          <FaVideo className="text-red-500" />
          Live video
        </div>
        <div className="flex items-center gap-2">
          <FaImages className="text-green-500" />
          Photo/video
        </div>
        <div className="flex items-center gap-2">
          <FaSmile className="text-yellow-500" />
          Feeling/activity
        </div>
      </div>
    </div>
  );
}
