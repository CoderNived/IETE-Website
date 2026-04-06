import { CATEGORIES } from "@/data/projects";

export default function ProjectFilter({ active, onSelect }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {CATEGORIES.map(function(cat) {
        var isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={function() { onSelect(cat); }}
            style={{
              padding:       "0.5rem 1.25rem",
              borderRadius:  "999px",
              fontSize:      "0.875rem",
              fontWeight:    600,
              border:        "2px solid",
              borderColor:   isActive ? "#1A56DB" : "#E5E7EB",
              background:    isActive ? "#1A56DB" : "white",
              color:         isActive ? "white"   : "#6B7280",
              cursor:        "pointer",
              transition:    "all 0.2s ease",
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}