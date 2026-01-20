import { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (content) => {
    setPosts((prev) => [
      {
        id: Date.now(),
        user: "Facebook User",
        content,
        comments: [],
      },
      ...prev,
    ]);
  };

  const addComment = (postId, text) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [...p.comments, { id: Date.now(), text, replies: [] }],
            }
          : p
      )
    );
  };

  const addReply = (postId, commentId, text) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: p.comments.map((c) =>
                c.id === commentId
                  ? {
                      ...c,
                      replies: [...c.replies, { id: Date.now(), text }],
                    }
                  : c
              ),
            }
          : p
      )
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, addComment, addReply }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
