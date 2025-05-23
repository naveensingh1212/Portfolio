import React from "react";
// Import the anime-style image
import naveenAnimatedImage from '../assets/images/naveen animated.png'; // Adjust path if necessary

const About = () => {
    // Hardcoded data for about section (replace with actual data if you have a data source)
    const aboutData = {
        description: "Motivated Computer Science student with a passion for innovative technologies, seeking to contribute to impactful projects in a forward-thinking organization. I thrive on challenges and am constantly exploring new tech to expand my skills.",
        imageCaption: "A passionate developer always learning and building.",
        yearsOfExperience: "2+", // Based on your education timeline 2022-2026
        knownTechnologyCount: "14", // As per your provided structure
        projectsCompleted: "3+", // Based on your resume projects
    };

    const educationData = [
        {
            degree: "Bachelor of Technology (CSE)",
            institution: "Pranveer Singh Institute of Technology",
            years: "2022-2026",
            details: "CGPA: 7.64 (Till 5th Semester)",
        },
        {
            degree: "Intermediate",
            institution: "Guru Har Rai Academy",
            years: "2019-2021",
            details: "Percentage: 88%",
        },
    ];

    return (
        <section
            id="about" // Ensure this ID matches the navbar link
            className="mx-auto container px-4 pt-20 pb-8 font-sans bg-black rounded-lg mb-8" // Changed pt-40 to pt-20
        >
            <div className="flex flex-wrap lg:flex-row -mx-4 items-center"> {/* Changed items-stretch back to items-center */}
                {/* Left Column: About Me & Education */}
                <div className="order-2 flex w-full flex-col gap-5 sm:w-1/2 lg:order-none lg:w-1/4 px-4 py-8">
                    {/* About me section */}
                    <div className="flex flex-col items-center justify-center space-y-3 sm:items-start sm:justify-start">
                        <div className="flex flex-col items-center justify-center space-y-1 sm:items-start sm:justify-start">
                            <h2 className="font-bold text-2xl text-white">About me</h2>
                            <div className="h-1 w-20 rounded-full bg-yellow-400" />
                        </div>
                        <p className="text-justify text-gray-300 leading-relaxed">{aboutData.description}</p>
                        <div className="h-px w-full bg-gray-700 my-4" />
                    </div>

                    {/* Education section */}
                    <div className="flex flex-col items-center justify-center space-y-3 sm:items-start sm:justify-start">
                        <div className="flex flex-col items-center justify-center space-y-1 sm:items-start sm:justify-start">
                            <h2 className="font-bold text-2xl text-white">Education</h2>
                            <div className="h-1 w-20 rounded-full bg-yellow-400" />
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            {educationData.map((edu, index) => (
                                <div key={index} className="text-gray-300 text-left w-full">
                                    <p className="font-semibold text-white">{edu.degree}</p>
                                    <p className="text-sm">{edu.institution}</p>
                                    <p className="text-sm">{edu.years}</p>
                                    <p className="text-sm">{edu.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Middle Column: Profile Picture */}
                <div className="order-1 flex flex-col w-full items-center justify-center lg:order-none lg:w-2/4 px-4 py-8">
                    <img
                        className="h-[20rem] md:h-[25rem] w-80 rounded-full object-cover outline-dashed outline-2 outline-offset-[16px] outline-yellow-400"
                        src={naveenAnimatedImage} // Using the imported anime image
                        alt="Profile Picture"
                        // Removed onError as the imported image should be handled by the bundler
                    />
                    <div className="mt-10 text-center text-lg text-gray-400">
                        {aboutData.imageCaption}
                    </div>
                </div>

                {/* Right Column: Stats */}
                <div className="order-3 grid w-full grid-rows-3 pt-5 sm:w-1/2 md:pt-0 lg:order-none lg:w-1/4 px-4 py-8">
                    <div className="space-y-3 text-center sm:text-right">
                        <h2 className="text-xl font-bold text-purple-400">
                            Years of experiences
                        </h2>
                        <div className="text-6xl font-bold text-white">
                            {aboutData.yearsOfExperience}
                        </div>
                    </div>
                    <div className="space-y-3 text-center sm:text-right">
                        <h2 className="text-xl font-bold text-purple-400">
                            Known Technology
                        </h2>
                        <div className="text-6xl font-bold text-white">
                            {aboutData.knownTechnologyCount}
                        </div>
                    </div>
                    <div className="space-y-3 text-center sm:text-right">
                        <h2 className="text-xl font-bold text-purple-400">
                            Projects Completed
                        </h2>
                        <div className="text-6xl font-bold text-white">
                            {aboutData.projectsCompleted}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
