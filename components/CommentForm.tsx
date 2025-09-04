"use client";
import { useState } from "react";

export function CommentForm() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [showToast, setShowToast] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  return (
    <div className="relative">
      <form className="space-y-2" onSubmit={onSubmit}>
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full border rounded p-2"
          rows={4}
          placeholder="Write a comment (mock, not saved)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="border rounded px-3 py-1 text-sm" type="submit">
          Submit
        </button>
      </form>
      {showToast ? (
        <div className="fixed bottom-6 right-6 z-50 rounded-md bg-black text-white px-3 py-2 text-sm shadow-lg">
          Not implemented yet
        </div>
      ) : null}
    </div>
  );
}
