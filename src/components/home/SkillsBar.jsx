import React from "react";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ padding: "0.5rem" }}>
      <span className="badge bg-dark lead" style={{ fontSize: "1.2rem", padding: "10px 20px", borderRadius: "20px" }}>
        {skill}
      </span>
    </div>
  );
}

export default SkillsBar;
