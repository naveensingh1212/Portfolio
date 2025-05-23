import React, { useState } from "react";
// Using Lucide React icons for categories
import { Laptop, Server, Wrench, Code } from "lucide-react"; // Changed 'Tool' to 'Wrench'

import SkillCard from "./SkillCard"; // Import the SkillCard component

const tabIcons = {
  frontend: <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />, // Styled with primary color
  backend: <Server className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />,
  tools: <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />, // Changed 'Tool' to 'Wrench'
  languages: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />, // Added icon for Languages
};

// Added default empty array for skills prop
const SkillTab = ({ skills = [] }) => {
  // Extract unique categories from skills data
  const skillCategories = [...new Set(skills.map(skill => skill.category))];
  const [activeCategory, setActiveCategory] = useState(skillCategories[0] || ""); // Set initial active category

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* Custom Tabs implementation */}
      <div className="flex space-x-2 md:space-x-4 p-1 rounded-full border border-yellow-400/50 bg-gray-900/50 backdrop-blur-sm"> {/* Mimicking Tabs styling */}
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center gap-1 sm:gap-2 px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-200
              ${activeCategory === category
                ? "bg-yellow-400 text-black shadow-md" // Active tab styling
                : "text-gray-300 hover:text-white hover:bg-gray-700/50" // Inactive tab styling
              }`}
          >
            {/* Ensure category.toLowerCase() is used to match tabIcons keys */}
            {tabIcons[category.toLowerCase()]}
            <span>{category}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="my-8 md:px-12 flex flex-wrap gap-4 justify-center items-center w-full">
        {skills
          .filter((skill) => skill.category === activeCategory)
          .map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
      </div>
    </div>
  );
};

export default SkillTab;
