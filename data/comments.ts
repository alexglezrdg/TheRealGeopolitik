export type Comment = {
  id: string;
  postId: string;
  userId: string;
  body: string;
  createdAt: string;
  isApproved: boolean;
};

export const comments: Comment[] = [
  {
    id: "c1",
    postId: "p1",
    userId: "u3",
    body: "Thought-provoking analysis. Curious about the transit risks.",
    createdAt: new Date().toISOString(),
    isApproved: true,
  },
  {
    id: "c2",
    postId: "p1",
    userId: "u2",
    body: "Would love a follow-up on financing models.",
    createdAt: new Date().toISOString(),
    isApproved: true,
  },
];
