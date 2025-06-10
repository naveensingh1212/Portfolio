// src/components/Navbar.jsx (or wherever your Navbar.jsx is)

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Menu, Github, Linkedin, FileText } from 'lucide-react';

function cn(...inputs) {
  const classNames = inputs.filter(Boolean).join(' ');
  return classNames;
}

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const desktopTabs = [
  { id: "Home", label: "Home", link: "#home" }, // Added Home tab
  { id: "About", label: "About", link: "#about" },
  { id: "TechStack", label: "Tech Stack", link: "#techstack" },
  { id: "Projects", label: "Projects", link: "#projects" },
  { id: "Contact", label: "Contact", link: "#contact" },
];

const mobileTabs = [
  { id: "Home", label: "Home", link: "#home" }, // Added Home tab for mobile
  { id: "About", label: "About", link: "#about" },
  { id: "Projects", label: "Projects", link: "#projects" },
  { id: "Contact", label: "Contact", link: "#contact" },
];

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [letterHovered, setLetterHovered] = useState(-1);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [activeTab, setActiveTab] = useState("");

  const portfolioText = "Naveen Singh";

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current?.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.1));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (windowWidth < 768) {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsNavbarVisible(false);
        } else if (window.scrollY < lastScrollY || window.scrollY < 50) {
          setIsNavbarVisible(true);
        }
      } else {
        setIsNavbarVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [windowWidth]);

  useEffect(() => {
    const updateActiveTab = () => {
      const currentHash = window.location.hash;
      const foundTab =
        desktopTabs.find((tab) => tab.link === currentHash) ||
        mobileTabs.find((tab) => tab.link === currentHash);
      if (foundTab) {
        setActiveTab(foundTab.id);
      } else {
        // Default to "Home" if no hash or hash doesn't match
        setActiveTab("Home");
      }
    };

    updateActiveTab();
    window.addEventListener("hashchange", updateActiveTab);
    return () => window.removeEventListener("hashchange", updateActiveTab);
  }, []);

  const handleNavLinkClick = (tabId) => {
    setActiveTab(tabId);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div
      className={cn(
        // Re-added fixed positioning and width/padding logic
        "fixed left-0 top-0 w-full z-50 flex justify-center pt-2 md:pt-0 transition-all duration-300",
        windowWidth < 768 && !isNavbarVisible && "opacity-0 translate-y-[-100%]",
        windowWidth < 768 && isNavbarVisible && "opacity-100 translate-y-0"
      )}
    >
      <div
        className="w-full px-4 flex justify-center"
        style={{
          paddingTop:
            windowWidth >= 768 ? `${8 + scrollProgress * 8}px` : "8px",
          paddingLeft:
            windowWidth >= 768 ? `${scrollProgress * 16}px` : "16px",
          paddingRight:
            windowWidth >= 768 ? `${scrollProgress * 16}px` : "16px",
        }}
      >
        <nav
          className={cn(
            "relative w-full rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10",
            "md:transition-all md:duration-300 transition-opacity duration-300 ease-in-out transform"
          )}
          style={
            windowWidth >= 768
              ? {
                  width: scrollProgress === 0 ? "100%" : `${100 - scrollProgress * 25}%`,
                  backgroundColor: `rgba(0, 0, 0, ${0.4 + scrollProgress * 0.4})`,
                  backdropFilter: `blur(${4 + scrollProgress * 8}px)`,
                  borderColor: `rgba(255, 255, 255, ${0.1 + scrollProgress * 0.1})`,
                }
              : {}
          }
        >
          <div className="h-16 flex items-center justify-between px-6">
            {/* Logo/Name: Naveen Singh */}
            <a
              href="#home" // Link to the new Home section
              className="text-white hover:text-white/80 transition-colors flex items-center gap-2 shrink-0 relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setLetterHovered(-1);
              }}
            >
              <div className="relative">
                <div className="flex items-center">
                  {portfolioText.split("").map((letter, index) => (
                    <span
                      key={index}
                      className={cn(
                        "text-lg font-semibold transition-all duration-300 hover:scale-125 cursor-default",
                        activeTab === "Home" ? "text-primary" : "text-white",
                        letterHovered === index ? "text-primary animate-bounce" : "",
                        isHovered ? "hover:text-primary" : "",
                        isHovered && letterHovered === -1 ? "animate-pulse" : ""
                      )}
                      style={{
                        opacity: Math.max(0, 1 - scrollProgress * 2),
                        textShadow:
                          letterHovered === index
                            ? "0 0 20px rgba(255, 255, 0, 0.5)"
                            : "none",
                        transform: `translateY(${letterHovered === index ? "-2px" : "0"})`,
                      }}
                      onMouseEnter={() => setLetterHovered(index)}
                      onMouseLeave={() => setLetterHovered(-1)}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                {isHovered && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      opacity: Math.max(0, 1 - scrollProgress * 2),
                    }}
                  />
                )}
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="flex-1 flex items-center justify-center">
              <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                {desktopTabs.map((tab) => (
                  <motion.div
                    key={tab.id}
                    className="relative rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={tab.link}
                      className={cn(
                        "relative font-medium rounded-full px-3 py-1.5 text-sm transition-colors duration-300",
                        activeTab === tab.id
                          ? "text-white"
                          : "text-[#989898] hover:text-white"
                      )}
                      onClick={() => handleNavLinkClick(tab.id)}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.span
                          layoutId="bubble"
                          className="absolute inset-0 z-10 bg-white/10 rounded-full pointer-events-none"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links and Resume Button (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1">
                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/naveensingh12/"
                  target="_blank"
                  className="group relative p-2 transition-all duration-300"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#FFA116] via-[#B3B3B3] to-[#FFA116] rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur" />
                  <div className="relative flex items-center text-[#989898] group-hover:text-[#FFA116] transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                    >
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/naveensingh1212"
                  target="_blank"
                  className="group relative p-2 transition-all duration-300"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#6e5494] via-[#B3B3B3] to-[#6e5494] rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur" />
                  <div className="relative flex items-center text-[#989898] group-hover:text-white transition-colors">
                    <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/naveen-singh12"
                  target="_blank"
                  className="group relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#0A66C2] via-[#B3B3B3] to-[#0A66C2] rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur" />
                  <div className="relative flex items-center text-[#989898] group-hover:text-[#0A66C2] transition-colors">
                    <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </div>
                </a>
              </div>

              <div className="w-px h-6 bg-white/10 mx-2" />

              {/* Resume Button */}
              <a href="https://drive.google.com/file/d/1HfNcWnp_H3Wp480s9_njhhd7WxlCBoN8/view?usp=sharing" target="_blank">
                <Button className="bg-primary hover:bg-primary/90 text-black transition-all relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-0 group-hover:opacity-100 animate-gradient-xy transition-opacity" />
                  <FileText className="w-4 h-4 mr-2 relative z-10" />
                  <span className="relative z-10">Resume</span>
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors",
                mobileMenuOpen && "bg-white/5"
              )}
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              ref={mobileMenuRef}
              className="absolute left-0 right-0 top-14 z-50 md:hidden border-t border-white/10 bg-black/90 backdrop-blur-xl rounded-b-2xl shadow-lg animate-mobile-menu-open"
            >
              <div className="px-6 py-4 space-y-4">
                {mobileTabs.map((tab) => (
                  <a
                    key={tab.id}
                    href={tab.link}
                    className={cn(
                      "block text-sm transition-colors",
                      activeTab === tab.id
                        ? "text-white font-medium"
                        : "text-[#989898] hover:text-white"
                    )}
                    onClick={() => handleNavLinkClick(tab.id)}
                  >
                    {tab.label}
                  </a>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    {/* LeetCode Mobile */}
                    <a
                      href="https://leetcode.com/u/naveensingh12/"
                      target="_blank"
                      className="group relative"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#FFA116] via-[#B3B3B3] to-[#FFA116] rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur" />
                      <div className="relative flex items-center text-[#989898] group-hover:text-[#FFA116] transition-colors">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 transition-transform group-hover:scale-110"
                        >
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                        </svg>
                      </div>
                    </a>

                    {/* GitHub Mobile */}
                    <a
                      href="https://github.com/naveensingh1212"
                      target="_blank"
                      className="group relative"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#6e5494] via-[#B3B3B3] to-[#6e5494] rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur" />
                      <div className="relative flex items-center text-[#989898] group-hover:text-white transition-colors">
                        <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
                      </div>
                    </a>

                    {/* LinkedIn Mobile */}
                    <a
                      href="https://www.linkedin.com/in/naveen-singh12"
                      target="_blank"
                      className="group relative"
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#0A66C2] via-[#B3B3B3] to-[#0A66C2] rounded-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur" />
                      <div className="relative flex items-center text-[#989898] group-hover:text-[#0A66C2] transition-colors">
                        <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
                      </div>
                    </a>
                  </div>
                  {/* Resume Button Mobile */}
                  <a href="https://drive.google.com/file/d/1_i2B_y7hY-Iu7vJidsz9dVVNfw3X4jHt/view?usp=drive_link" target="_blank" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-black transition-all relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary opacity-0 group-hover:opacity-100 animate-gradient-xy transition-opacity" />
                      <FileText className="w-4 h-4 mr-2 relative z-10" />
                      <span className="relative z-10">Resume</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}