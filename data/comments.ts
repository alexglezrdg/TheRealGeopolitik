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
  {
    id: "c3",
    postId: "p2",
    userId: "u5",
    body: "The FX angle is underappreciated. Good read.",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    isApproved: true,
  },
  {
    id: "c4",
    postId: "p3",
    userId: "u4",
    body: "Could you compare this to Suez dynamics?",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    isApproved: true,
  },
  {
    id: "c5",
    postId: "p3",
    userId: "u1",
    body: "Pending review comment (not approved).",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    isApproved: false,
  },
  {
    id: "c6",
    postId: "p4",
    userId: "u2",
    body: "Industrial policy tie-ins would be interesting here.",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    isApproved: true,
  },
  {
    id: "c7",
    postId: "p5",
    userId: "u3",
    body: "Great overview, thanks!",
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString(),
    isApproved: true,
  },
  {
    id: "c8",
    postId: "p6",
    userId: "u4",
    body: "This will reshape food trade flows.",
    createdAt: new Date(Date.now() - 86400000 * 9).toISOString(),
    isApproved: true,
  },
  {
    id: "c9",
    postId: "p7",
    userId: "u5",
    body: "Curious how SMEs are affected.",
    createdAt: new Date(Date.now() - 86400000 * 10).toISOString(),
    isApproved: true,
  },
  {
    id: "c10",
    postId: "p8",
    userId: "u1",
    body: "Nice video explanation embedded!",
    createdAt: new Date(Date.now() - 86400000 * 15).toISOString(),
    isApproved: true,
  },
  {
    id: "c11",
    postId: "p4",
    userId: "u2",
    body: "Please avoid personal attacks (moderated).",
    createdAt: new Date(Date.now() - 86400000 * 16).toISOString(),
    isApproved: false,
  },
  {
    id: "c12",
    postId: "p2",
    userId: "u3",
    body: "Can you elaborate on swap lines?",
    createdAt: new Date(Date.now() - 86400000 * 18).toISOString(),
    isApproved: true,
  },
];
