import api from "./api";

/* USERS */
export const getUsers = () => api.get("/users/");

export const getUserById = (userId: number) => api.get(`/users/${userId}`);

export const searchUsers = (query: string) =>
  api.get(`/users/search`, {
    params: { q: query },
  });

/* FRIENDS */
export const getFriends = (userId: number) =>
  api.get(`/users/${userId}/friends`);

export const getPendingRequests = (userId: number) =>
  api.get(`/users/${userId}/friends/pending`);

export const sendFriendRequest = (userId: number, friendId: number) =>
  api.post(`/users/${userId}/friends/${friendId}`);

export const acceptFriendRequest = (userId: number, friendId: number) =>
  api.post(`/users/${userId}/friends/${friendId}/accept`);

export const rejectFriendRequest = (userId: number, friendId: number) =>
  api.post(`/users/${userId}/friends/${friendId}/reject`);

export const removeFriend = (userId: number, friendId: number) =>
  api.delete(`/users/${userId}/friends/${friendId}`);
