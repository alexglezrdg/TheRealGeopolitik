export type User = {
  id: string;
  name: string;
  image?: string;
  role: "ADMIN" | "EDITOR" | "READER";
};

export const users: User[] = [
  {
    id: "u1",
    name: "Alex Chen",
    role: "ADMIN",
    image: "https://placehold.co/80x80",
  },
  {
    id: "u2",
    name: "Maya Singh",
    role: "EDITOR",
    image: "https://placehold.co/80x80",
  },
  { id: "u3", name: "Diego Alvarez", role: "READER" },
  { id: "u4", name: "Sofia Petrova", role: "EDITOR", image: "https://placehold.co/80x80" },
  { id: "u5", name: "Liam O'Connor", role: "READER" },
];
