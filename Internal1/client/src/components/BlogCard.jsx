import React from "react";

export default function BlogCard({ title, author, date, excerpt }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-3">
        By {author} • {date}
      </p>
      <p className="text-gray-300 mb-4">{excerpt}</p>
      <button className="text-blue-400 hover:underline">Read Article →</button>
    </div>
  );
}
