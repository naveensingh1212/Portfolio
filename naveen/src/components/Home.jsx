import React, { useState, useEffect } from "react";
// import { Hand } from 'lucide-react'; // Uncomment if you want to use lucide-react for the hand emoji

const Home = () => {
  const roles = ["Frontend Development", "Backend Development"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 80; // Speed for typing (ms) - Made faster
  const deletingSpeed = 50; // Speed for deleting (ms) - Made faster
  const pauseBeforeDelete = 1000; // Pause after typing before deleting (ms) - Reduced
  const pauseBeforeType = 300; // Pause after deleting before typing next (ms) - Reduced

  useEffect(() => {
    let typer;
    const currentPhrase = roles[currentRoleIndex]; // Get the current phrase based on index

    const handleTyping = () => {
      if (isDeleting) {
        // Logic for deleting text
        if (displayedText.length > 0) { // Only delete if there are characters to remove
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          typer = setTimeout(handleTyping, deletingSpeed);
        } else {
          // Finished deleting, switch to the next role and prepare to type
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          typer = setTimeout(handleTyping, pauseBeforeType); // Pause before typing the new phrase
        }
      } else {
        // Logic for typing text
        if (displayedText.length < currentPhrase.length) { // Only type if not all characters are displayed
          setDisplayedText((prev) => prev + currentPhrase[displayedText.length]);
          typer = setTimeout(handleTyping, typingSpeed);
        } else {
          // Finished typing the current phrase, now pause and then start deleting
          typer = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      }
    };

    // Start the typing/deleting process when the component mounts or dependencies change
    // The initial delay ensures the effect doesn't run immediately on render
    typer = setTimeout(handleTyping, typingSpeed);

    // Cleanup function: Clear the timeout when the component unmounts or before the effect re-runs
    return () => clearTimeout(typer);
  }, [displayedText, isDeleting, currentRoleIndex, roles, deletingSpeed, typingSpeed, pauseBeforeDelete, pauseBeforeType]);

  return (
    <section
      id="home" // Ensure this ID matches the navbar link
      className="flex flex-col items-center justify-center min-h-screen-minus-navbar
                 bg-black rounded-lg mb-8 p-4 md:p-12 text-center" // Changed background to bg-black
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        {/* "Hi, I'm Naveen Singh" */}
        <div className="text-center text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm Naveen Singh
        </div>

        {/* Dynamic Role Text with Typing Effect and distinct color */}
        {/* Changed parent div color to white, and applied text-blue-400 only to the displayedText span */}
        <div className="text-center text-2xl md:text-4xl font-semibold text-white mb-6 min-h-[3rem]">
          I am into <span className="inline-block text-blue-400">{displayedText}</span>
          <span className="inline-block animate-pulse">|</span> {/* Typing cursor */}
        </div>

        {/* Descriptive Paragraph */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
          I specialize in crafting responsive, high-performance websites that prioritize clean, maintainable code and deliver seamless, intuitive user experiences. My approach combines strong design principles with a deep understanding of web development to build solutions that are both efficient and user-focused.
        </p>

        {/* "Get to know me" Button */}
        <a href="#about">
          <button className="bg-primary hover:bg-primary/90 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Get to know me
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
