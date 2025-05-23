import React from 'react';
import { Navbar } from './components/Navbar'; // Assuming Navbar.jsx is in the components directory
import About from './components/About'; // Corrected import path for About component
import Home from './components/Home'; // Corrected import path for Home component
import Skills from './components/tech-stack/Skills'; // Import the new Skills component
import { Projects } from './components/Projects'; // Import the Projects component
import Contact from './components/Contact';
function App() {
  return (
    <div className="min-h-screen text-white"> {/* Removed bg-gray-900 from here */}
      <Navbar />

      {/* Increased max-width to max-w-6xl for a wider layout */}
      <main className="pt-24 p-4 max-w-6xl mx-auto"> {/* Added pt-24 back */}
        {/* Home Section - Render the new Home component */}
        <Home />

        {/* About section will now have its own background defined in About.jsx */}
        <About />

        {/* Replace the placeholder Tech Stack section with your new Skills component */}
        <Skills />

        {/* Projects Section - Integrated here */}
        <Projects />

        {/* Contact Section */}
        <Contact/>
      </main>
    </div>
  );
}

export default App;
