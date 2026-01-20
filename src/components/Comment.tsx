interface CommentProps {
  comment: {
    id: number;
    text: string;
    username: string;
    created_at?: string;
  };
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="ml-8 mb-3">
      <div className="flex gap-2">
        <div className="w-7 h-7 bg-gray-300 rounded-full" />
        <div className="bg-gray-100 rounded-xl px-3 py-2 text-sm">
          <p className="font-medium">{comment.username}</p>
          <p>{comment.text}</p>
        </div>
      </div>
    </div>
  );
}
