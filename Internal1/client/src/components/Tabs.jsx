// src/components/Tabs.jsx
export default function Tabs({ setFilter }) {
  const tabs = ["All", "Blogs", "Articles", "Update", "Legal"];

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab === "All" ? "All" : tab.slice(0, -1))}
          className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-sm"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
