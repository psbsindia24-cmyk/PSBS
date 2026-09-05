// src/components/InsightCard.jsx
import { Calendar, User } from "lucide-react";

export default function InsightCard({ insight }) {
  return (
    <div className="bg-neutral-800 rounded-xl p-5 shadow-md hover:shadow-lg transition w-full">
      <div className="flex items-center justify-between text-sm text-gray-400">
        <span className="px-2 py-1 rounded-md bg-neutral-700 text-xs font-semibold">
          {insight.type}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={14} /> {insight.date}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-100 mt-3">
        {insight.title}
      </h3>
      <p className="text-gray-400 text-sm mt-2">{insight.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span className="flex items-center gap-1">
          <User size={14} /> {insight.author}
        </span>
        <span>{insight.readTime}</span>
      </div>
    </div>
  );
}
