import api from "./api";

/* ===================== POSTS ===================== */

export const getTimelinePosts = (userId: number) =>
  api.get(`/posts/timeline/${userId}`);

export const createPost = (data: { user_id: number; content: string }) =>
  api.post("/posts/", data);

export const deletePost = (postId: number) => api.delete(`/posts/${postId}`);

/* ===================== COMMENTS ===================== */

export const getComments = (postId: number) =>
  api.get(`/posts/${postId}/comments`);

export const addComment = (
  postId: number,
  data: {
    user_id: number;
    post_id: number;
    content: string;
  }
) => api.post(`/posts/${postId}/comments/`, data);

/* ===================== STORIES ===================== */

export const getStories = (userId: number) =>
  api.get(`/stories/user/${userId}`);

export const createStory = (data: { user_id: number; image_url: string }) =>
  api.post("/stories/", data);

export const deleteComment = (commentId: number) =>
  api.delete(`/posts/comments/${commentId}`);
