import React from 'react';

export default function ServiceCard({ title, description }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-5 hover:border-neutral-600 transition">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-neutral-300">{description}</p>
    </div>
  );
}
