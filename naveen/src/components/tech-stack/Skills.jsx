import React from "react";
import SkillTab from "./SkillTab"; // Corrected path: removed 'tech-stack/'

// Hardcoded skill data (replace with your actual skill data)
const skillsData = [
  // Frontend - Updated placeholder images for a more "official" look
  { name: "React.js", image: "https://placehold.co/100x100/20232A/61DAFB?text=React", category: "Frontend" }, // Dark background, React blue text
  { name: "Vite", image: "https://placehold.co/100x100/646CFF/FFFFFF?text=Vite", category: "Frontend" }, // Vite purple, white text
  { name: "Tailwind CSS", image: "https://placehold.co/100x100/0F172A/06B6D4?text=Tailwind", category: "Frontend" }, // Tailwind dark blue, light blue text
  { name: "JavaScript", image: "https://placehold.co/100x100/F7DF1E/000000?text=JS", category: "Frontend" }, // JS yellow, black text
  { name: "HTML", image: "https://placehold.co/100x100/E34F26/FFFFFF?text=HTML5", category: "Frontend" }, // HTML orange, white text, added 5
  { name: "CSS", image: "https://placehold.co/100x100/1572B6/FFFFFF?text=CSS3", category: "Frontend" }, // CSS blue, white text, added 3
  // Backend - Updated placeholder images
  { name: "Node.js", image: "https://placehold.co/100x100/333333/6DA55F?text=Node.js", category: "Backend" }, // Dark gray, Node green text
  { name: "Express.js", image: "https://placehold.co/100x100/000000/FFFFFF?text=Express", category: "Backend" }, // Black, white text
  { name: "MongoDB", image: "https://placehold.co/100x100/47A248/FFFFFF?text=MongoDB", category: "Backend" }, // MongoDB green, white text
  { name: "MySQL", image: "https://placehold.co/100x100/00618A/FFFFFF?text=MySQL", category: "Backend" }, // MySQL blue, white text
  // Tools - Updated placeholder images
  { name: "GitHub", image: "https://placehold.co/100x100/181717/FFFFFF?text=GitHub", category: "Tools" }, // GitHub black, white text
  { name: "Postman", image: "https://placehold.co/100x100/FF6C37/FFFFFF?text=Postman", category: "Tools" }, // Postman orange, white text
  { name: "VS Code", image: "https://placehold.co/100x100/007ACC/FFFFFF?text=VSCode", category: "Tools" }, // VSCode blue, white text
  { name: "Cloudinary", image: "https://placehold.co/100x100/3448C5/FFFFFF?text=Cloudinary", category: "Tools" }, // Cloudinary blue, white text
  { name: "Multer", image: "https://placehold.co/100x100/333333/FFFFFF?text=Multer", category: "Tools" }, // Dark gray, white text
  { name: "C++", image: "https://placehold.co/100x100/00599C/FFFFFF?text=C++", category: "Languages" }, // C++ blue, white text
  { name: "Python", image: "https://placehold.co/100x100/3776AB/FFFFFF?text=Python", category: "Languages" }, // Python blue, white text
  
];


const Skills = () => {
  return (
    <section id="techstack" className="mx-auto container pt-20 pb-8 bg-black rounded-lg mb-8">
      <div className="flex flex-col items-center justify-center space-y-2 pt-10">
        <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
        <div className="h-1 w-20 rounded-full bg-yellow-400" />
      </div>

      <div className="flex items-center justify-center pt-10">
        <SkillTab skills={skillsData} /> {/* Pass hardcoded skills data */}
      </div>
    </section>
  );
};

export default Skills;
