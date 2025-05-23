import React, { useEffect, useState } from "react";
import { motion, Reorder } from "framer-motion";
import { useMediaQuery } from 'react-responsive';

// --- Image Imports ---
// IMPORTANT: Ensure these paths match the EXACT location and filenames in your 'src/assets/images' folder.
// Double-check the file extensions (.png, .jpg) and spelling, including spaces and parentheses.
import aventisImage from '../assets/images/20250523_1144_Aventis Home Interface_remix_01jvxwdgdvf2t8b5vqxjm8g39e (1).png';
import NoteHiveImage from '../assets/images/image.png'; // Assuming this is the screenshot for NoteHive
import VideoFlixImage from '../assets/images/Screenshot 2025-05-23 114932.png';

// Define project data. This array will be used to populate the projects section.
const initialProjectsData = [
    {
        id: 1,
        title: "NoteHive",
        subtitle: "Minimalist Note-Taking App",
        description: "Developed a minimalist web app for creating, editing, and deleting notes with real-time updates. Designed a clean, mobile-responsive interface.",
        tech: ["React", "Vite", "Tailwind CSS", "Axios", "Node.js", "Express", "MongoDB"],
        links: {
            website: "https://note-hive-ten.vercel.app/", // Live website link
            github: "https://github.com/naveensingh1212/NoteHive", // GitHub repository link
            video: null, // No specific demo video link for NoteHive
        },
        image: NoteHiveImage, // Static image for NoteHive (used as fallback or if preview is null)
        preview: "https://note-hive-ten.vercel.app/", // URL for the live iframe preview
        color: "from-red-500 to-red-700", // Color for styling elements related to this project
    },
    {
        id: 2,
        title: "VideoFlix",
        subtitle: "Full-Stack YouTube Clone",
        description: "Developed a full-stack YouTube clone with video search, uploads, streaming, JWT-based authentication, and real-time like/comment features with content filtering.",
        tech: ["React", "Vite", "Tailwind CSS", "Axios", "Node.js", "Express", "MongoDB"],
        links: {
            website: null, // Not deployed yet, so no live website link
            github: "https://github.com/naveensingh1212/Videoflix", // GitHub repository link
            video: null, // No specific demo video link for VideoFlix
        },
        image: VideoFlixImage, // This is the screenshot you want to show for VideoFlix
        preview: null, // Explicitly null, so it will NOT try to load an iframe for VideoFlix
        color: "from-green-500 to-green-700", // Color for styling elements related to this project
    },
    {
        id: 3,
        title: "Aventis",
        subtitle: "Dynamic Web Application",
        description: "Developed a dynamic web application offering a personalized and immersive experience, with features for task management, mood-based UI adaptation, study progress tracking, real-time chat, entertainment, and more.",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Socket.io", "JWT Authentication"],
        links: {
            website: null, // Not deployed yet, so no live website link
            github: "https://github.com/naveensingh1212/Aventis", // GitHub repository link
            video: null, // No specific demo video link for Aventis
        },
        image: aventisImage, // This is the screenshot you want to show for Aventis
        preview: null, // Explicitly null, so it will NOT try to load an iframe for Aventis
        color: "from-blue-500 to-blue-700", // Color for styling elements related to this project
    },
];

// Main Projects component
export function Projects() {
    // State to manage the order of projects (for drag-and-drop functionality)
    const [projects, setProjects] = useState(initialProjectsData);

    // Hook to determine if the screen is mobile size (for responsive behavior)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // useEffect to potentially handle client-side rendering specifics, though not strictly needed for this issue
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Function to handle reordering of projects (used by Reorder.Group)
    const handleReorder = (newOrder) => {
        setProjects(newOrder);
    };

    // Helper function to safely extract hostname from a URL for display in the browser bar simulation
    const getHostname = (url) => {
        try {
            return new URL(url).hostname;
        } catch (e) {
            return "Invalid URL"; // Return a default string for invalid URLs
        }
    };

    // State for floating orb positions (restored from previous versions)
    const [orbPositions] = useState(() =>
        Array(3).fill(0).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100
        }))
    );


    return (
        <section id="projects" className={`relative py-32 overflow-hidden bg-black rounded-lg mb-8`}>
            {/* Background Effects (Restored) */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 mix-blend-normal" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
            </div>

            {/* Floating Orbs (Restored) */}
            <div className="absolute inset-0 overflow-hidden">
                {orbPositions.map((pos, i) => (
                    <div
                        key={i}
                        className="absolute w-96 h-96 bg-yellow-400/5 rounded-full filter blur-3xl"
                        style={{
                            top: `${pos.top}%`,
                            left: `${pos.left}%`,
                            animation: `float ${10 + i * 2}s infinite ease-in-out`
                        }}
                    />
                ))}
            </div>

            <div className="container relative mx-auto px-4">
                <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
                    {/* Section Title with animation (Restored text gradients and draggable hint) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative mb-20 text-center"
                    >
                        <motion.span
                            className="text-yellow-400 text-sm font-medium mb-3 block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Featured Projects
                        </motion.span>
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                            My Recent Work
                        </h2>
                        <br />
                        <h3 className="text-gray-400 text-sm mb-2 transition-colors duration-500 group-hover:text-gray-300">
                            * Draggable and Live viewable projects (Works only on desktop)
                        </h3>
                        <div className="mt-4 flex justify-center">
                            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400/40 via-yellow-400 to-yellow-400/40 rounded-full" />
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    {/* Conditional check to ensure 'projects' is an array before mapping */}
                    {projects && projects.length > 0 ? (
                        !isMobile ? (
                            <Reorder.Group
                                axis="y"
                                values={projects}
                                onReorder={handleReorder}
                                className="grid grid-cols-1 gap-32 w-full"
                            >
                                {projects.map((project, index) => (
                                    <Reorder.Item
                                        key={project.id}
                                        value={project}
                                        className="relative cursor-move"
                                        whileDrag={{
                                            scale: 1.02,
                                            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                                            zIndex: 50
                                        }}
                                        transition={{
                                            duration: 0.2
                                        }}
                                    >
                                        <div className="relative group">
                                            {/* Drag Handle (Restored) */}
                                            <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm">
                                                    <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Curved Path (Restored) */}
                                            <div className="absolute left-0 right-0 top-0 bottom-0 hidden lg:block pointer-events-none">
                                                <svg
                                                    className="absolute inset-0 w-full h-full"
                                                    preserveAspectRatio="none"
                                                    viewBox="0 0 100 100"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d={index % 2 === 0
                                                            ? "M50,0 Q65,50 50,100"
                                                            : "M50,0 Q35,50 50,100"
                                                        }
                                                        stroke={`url(#gradient-path-${index})`} // Referencing defined gradients
                                                        strokeWidth="0.5"
                                                        vectorEffect="non-scaling-stroke"
                                                    />
                                                    {/* Define SVG Gradients for paths */}
                                                    <defs>
                                                        <linearGradient id={`gradient-path-${0}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.4)" />
                                                            <stop offset="50%" stopColor="rgba(239, 68, 68, 0.8)" />
                                                            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.4)" />
                                                        </linearGradient>
                                                        <linearGradient id={`gradient-path-${1}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.4)" />
                                                            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.8)" />
                                                            <stop offset="100%" stopColor="rgba(34, 197, 94, 0.4)" />
                                                        </linearGradient>
                                                        <linearGradient id={`gradient-path-${2}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                                                            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                                                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <motion.div
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    whileInView={{ scale: 1, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4, duration: 0.4 }}
                                                    className={`absolute top-1/2 ${index % 2 === 0 ? "right-1/2" : "left-1/2"} -translate-y-1/2 ${index % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"}`}
                                                >
                                                    <div className="relative">
                                                        <div className={`absolute h-6 w-6 -left-3 -top-3 rounded-full blur-[10px] bg-gradient-to-r ${project.color}`} />
                                                        <div
                                                            className={`h-5 w-5 rounded-full relative bg-gradient-to-r ${project.color}`}
                                                            style={{
                                                                // Tailwind doesn't directly support CSS variables in boxShadow, so hardcoding for now
                                                                boxShadow: `0 0 20px ${index === 0 ? 'rgba(239, 68, 68, 0.7)' : index === 1 ? 'rgba(34, 197, 94, 0.7)' : 'rgba(59, 130, 246, 0.7)'}, 0 0 40px ${index === 0 ? 'rgba(239, 68, 68, 0.5)' : index === 1 ? 'rgba(34, 197, 94, 0.5)' : 'rgba(59, 130, 246, 0.5)'}`
                                                            }}
                                                        />
                                                    </div>
                                                </motion.div>
                                            </div>

                                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                                                {/* Content */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                                    className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                                                >
                                                    <div className="group bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20">
                                                        <div
                                                            className={`text-xl font-medium mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-transparent bg-clip-text transform transition-transform duration-500 group-hover:scale-105`}
                                                        >
                                                            {project.subtitle}
                                                        </div>
                                                        <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 transform transition-transform duration-500 group-hover:translate-x-2">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-gray-400 text-lg mb-6 transition-colors duration-500 group-hover:text-gray-300">
                                                            {project.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-3 mb-8">
                                                            {project.tech.map((techItem) => (
                                                                <span
                                                                    key={techItem} // Use techItem as key if unique, otherwise index
                                                                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-yellow-400/50"
                                                                >
                                                                    {techItem}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <div className="flex flex-wrap gap-4">
                                                            {project.links.website && (
                                                                <a
                                                                    href={project.links.website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50`}
                                                                >
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                                    </svg>
                                                                    <span className="text-lg">Website</span>
                                                                </a>
                                                            )}
                                                            {project.links.github && (
                                                                <a
                                                                    href={project.links.github}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg"
                                                                >
                                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                                                    </svg>
                                                                    GitHub
                                                                </a>
                                                            )}
                                                            {project.links.video && ( // Render video link if available
                                                                <a
                                                                    href={project.links.video}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg"
                                                                >
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg>
                                                                    Watch Demo
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Interactive Preview / Screenshot Display */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                                                    className={`relative aspect-video rounded-2xl overflow-hidden border border-white/10 group ${index % 2 === 1 ? "lg:order-1" : ""}`}
                                                >
                                                    {/* Browser Window Controls (Restored) */}
                                                    <div className="absolute top-0 left-0 right-0 h-8 bg-[#2D2D2D] backdrop-blur-sm z-20 flex items-center px-3 gap-2 border-b border-white/10">
                                                        <div className="flex gap-1.5">
                                                            <div className="w-3 h-3 rounded-full bg-[#FF5F57] flex items-center justify-center">
                                                                <svg className="w-2 h-2 text-[#450d0d] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </div>
                                                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center">
                                                                <svg className="w-2 h-2 text-[#5c4813] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                                </svg>
                                                            </div>
                                                            <div className="w-3 h-3 rounded-full bg-[#28C840] flex items-center justify-center">
                                                                <svg className="w-2 h-2 text-[#1b5c24] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 flex items-center justify-center px-4">
                                                            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#1F1F1F] border border-white/10 max-w-[240px] w-full">
                                                                {isClient && project.preview && ( // Check for project.preview
                                                                    <>
                                                                        <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10z" />
                                                                        </svg>
                                                                        <span className="text-xs text-white/60 font-medium truncate">
                                                                            {getHostname(project.preview)}
                                                                        </span>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            {project.preview && ( // Only show reload/open if preview exists
                                                                <>
                                                                    <button
                                                                        className="p-1.5 rounded-md hover:bg-white/5 transition-colors"
                                                                        onClick={() => {
                                                                            const iframe = document.getElementById(`preview-${project.id}`);
                                                                            if (iframe) {
                                                                                // setLoadedIframes(prev => ({ ...prev, [project.id]: false })); // Removed as loadedIframes state is not used in this version
                                                                                iframe.src = iframe.src;
                                                                            }
                                                                        }}
                                                                    >
                                                                        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                                        </svg>
                                                                    </button>
                                                                    <a
                                                                        href={project.preview}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="p-1.5 rounded-md hover:bg-white/5 transition-colors"
                                                                    >
                                                                        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                        </svg>
                                                                    </a>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Preview Container */}
                                                    <div className="relative w-full h-full pt-8">
                                                        {/* Removed loading spinner as loadedIframes state is not used for that */}
                                                        {isClient && project.preview ? (
                                                            <div className="relative w-full h-full overflow-hidden bg-white">
                                                                <iframe
                                                                    id={`preview-${project.id}`}
                                                                    src={project.preview}
                                                                    className="absolute top-0 left-0 w-full h-full scale-[0.7] origin-top-left transition-all duration-500 group-hover:filter-none filter blur-[2px]"
                                                                    style={{
                                                                        width: '143%',
                                                                        height: '143%',
                                                                    }}
                                                                    // Removed onLoad as loadedIframes state is not used for that
                                                                    title={`${project.title} Preview`}
                                                                />
                                                            </div>
                                                        ) : project.image ? (
                                                            // Display screenshot if preview is null but image exists
                                                            <div className="relative w-full h-full overflow-hidden bg-white">
                                                                <img
                                                                    src={project.image}
                                                                    alt={`${project.title} Screenshot`}
                                                                    className="w-full h-full object-contain"
                                                                    style={{ background: 'black' }}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
                                                                <p className="text-gray-400 text-center p-4">Live preview/screenshot not available.</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Hover Overlay - Removed the blur effect (Restored) */}
                                                    <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </Reorder.Item>
                                ))}
                            </Reorder.Group>
                        ) : (
                            // Mobile view: non-draggable, static grid (Restored original mobile rendering)
                            <div className="grid grid-cols-1 gap-32 w-full">
                                {projects.map((project, index) => (
                                    <div key={project.id} className="relative">
                                        <div className="relative group">
                                            {/* Curved Path - Hidden on mobile, so remove the conditional class */}
                                            {/* (This block was already hidden on mobile by 'hidden lg:block' in desktop part) */}

                                            <div className={`grid grid-cols-1 gap-12 items-center`}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 50 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                                >
                                                    <div className="group bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-400/20">
                                                        <div
                                                            className={`text-xl font-medium mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-transparent bg-clip-text transform transition-transform duration-500 group-hover:scale-105`}
                                                        >
                                                            {project.subtitle}
                                                        </div>
                                                        <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 transform transition-transform duration-500 group-hover:translate-x-2">
                                                            {project.title}
                                                        </h3>
                                                        <p className="text-gray-400 text-lg mb-6 transition-colors duration-500 group-hover:text-gray-300">
                                                            {project.description}
                                                        </p>
                                                        <div className="flex flex-wrap gap-3 mb-8">
                                                            {project.tech.map((techItem) => (
                                                                <span
                                                                    key={techItem}
                                                                    className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 hover:scale-110 hover:border-yellow-400/50"
                                                                >
                                                                    {techItem}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <div className="flex flex-wrap gap-4">
                                                            {project.links.website && (
                                                                <a
                                                                    href={project.links.website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50`}
                                                                >
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                                    </svg>
                                                                    <span className="text-lg">Website</span>
                                                                </a>
                                                            )}
                                                            {project.links.github && (
                                                                <a
                                                                    href={project.links.github}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg"
                                                                >
                                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                                                    </svg>
                                                                    GitHub
                                                                </a>
                                                            )}
                                                            {project.links.video && ( // Render video link if available
                                                                <a
                                                                    href={project.links.video}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white transform transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-lg"
                                                                >
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg>
                                                                    Watch Demo
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Interactive Preview / Screenshot Display (Mobile) */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                    viewport={{ once: true, margin: "-100px" }}
                                                    transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                                                    className={`relative aspect-video rounded-2xl overflow-hidden border border-white/10 group`}
                                                >
                                                    {/* Browser Window Controls */}
                                                    <div className="absolute top-0 left-0 right-0 h-8 bg-[#2D2D2D] backdrop-blur-sm z-20 flex items-center px-3 gap-2 border-b border-white/10">
                                                        <div className="flex gap-1.5">
                                                            <div className="w-3 h-3 rounded-full bg-[#FF5F57] flex items-center justify-center">
                                                                <svg className="w-2 h-2 text-[#450d0d] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </div>
                                                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center">
                                                                <svg className="w-2 h-2 text-[#5c4813] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                                </svg>
                                                            </div>
                                                            <div className="w-3 h-3 rounded-full bg-[#28C840] flex items-center justify-center">
                                                                <svg className="w-2 h-2 text-[#1b5c24] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 flex items-center justify-center px-4">
                                                            <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#1F1F1F] border border-white/10 max-w-[240px] w-full">
                                                                {isClient && project.preview && ( // Check for project.preview
                                                                    <>
                                                                        <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12c0 5.524 4.477 10 10 10s10-4.476 10-10c0-5.523-4.477-10-10-10z" />
                                                                        </svg>
                                                                        <span className="text-xs text-white/60 font-medium truncate">
                                                                            {getHostname(project.preview)}
                                                                        </span>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            {project.preview && ( // Only show reload/open if preview exists
                                                                <>
                                                                    <button
                                                                        className="p-1.5 rounded-md hover:bg-white/5 transition-colors"
                                                                        onClick={() => {
                                                                            const iframe = document.getElementById(`preview-${project.id}`);
                                                                            if (iframe) {
                                                                                // setLoadedIframes(prev => ({ ...prev, [project.id]: false })); // Removed as loadedIframes state is not used in this version
                                                                                iframe.src = iframe.src;
                                                                            }
                                                                        }}
                                                                    >
                                                                        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                                        </svg>
                                                                    </button>
                                                                    <a
                                                                        href={project.preview}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="p-1.5 rounded-md hover:bg-white/5 transition-colors"
                                                                    >
                                                                        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                        </svg>
                                                                    </a>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Preview Container */}
                                                    <div className="relative w-full h-full pt-8">
                                                        {isClient && project.preview ? (
                                                            <div className="relative w-full h-full overflow-hidden bg-white">
                                                                <iframe
                                                                    id={`preview-${project.id}`}
                                                                    src={project.preview}
                                                                    className="absolute top-0 left-0 w-full h-full scale-[0.7] origin-top-left transition-all duration-500 group-hover:filter-none filter blur-[2px]"
                                                                    style={{
                                                                        width: '143%',
                                                                        height: '143%',
                                                                    }}
                                                                    title={`${project.title} Preview`}
                                                                />
                                                            </div>
                                                        ) : project.image ? (
                                                            // Display screenshot if preview is null but image exists
                                                            <div className="relative w-full h-full overflow-hidden bg-white">
                                                                <img
                                                                    src={project.image}
                                                                    alt={`${project.title} Screenshot`}
                                                                    className="w-full h-full object-contain"
                                                                    style={{ background: 'black' }}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div className="w-full h-full bg-gray-700 flex items-center justify-center rounded-lg">
                                                                <p className="text-gray-400 text-center p-4">Live preview/screenshot not available.</p>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Hover Overlay - Removed the blur effect (Restored) */}
                                                    <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    ) : (
                        // Message when no projects are available or loading
                        <p className="text-center text-gray-400 text-xl">No projects to display.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;
