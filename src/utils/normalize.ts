export const normalizePost = (p: any) => ({
  id: p.id,
  username: `User ${p.user_id}`,
  desc: p.content,
  created_at: p.created_at,
  likes: 0,
  comments: 0,
});

export const normalizeStory = (story: any, index: number) => ({
  id: story.id,
  name: `User ${story.user_id}`,
  image: story.image_url,
  isCreate: index === 0, // first story = "Your Story"
});
export const normalizeComment = (c: any) => ({
  id: c.id,
  text: c.content,
  username: `User ${c.user_id}`,
  created_at: c.created_at,
});

export const normalizeUser = (u: any) => ({
  id: u.id,
  name: u.username || `User ${u.id}`,
  email: u.email,
  avatar: null,
});
