import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'; // Icons for contact info and social media

export function Contact() {
    // State for form fields (optional, if you want a functional form later)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend service
        // For a static portfolio, you might use a service like Formspree or Netlify Forms
        console.log('Form submitted:', formData);
        alert('Thank you for your message! (Form submission is simulated)');
        setFormData({ name: '', email: '', message: '' }); // Clear form
    };

    return (
        <section id="contact" className="min-h-screen relative py-32 overflow-hidden bg-black rounded-lg mb-8">
            {/* Background Effects - Consistent with Projects section */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-blue-400/5 to-blue-400/10 mix-blend-normal" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(0,0,0,0),rgba(0,0,0,0.8))]" />
            </div>

            <div className="container relative mx-auto px-4">
                <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative mb-20 text-center"
                    >
                        <motion.span
                            className="text-blue-400 text-sm font-medium mb-3 block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Get in Touch
                        </motion.span>
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
                            Contact Me
                        </h2>
                        <div className="mt-4 flex justify-center">
                            <div className="w-32 h-1 bg-gradient-to-r from-blue-400/40 via-blue-400 to-blue-400/40 rounded-full" />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-lg"
                        >
                            <h3 className="text-3xl font-bold mb-6 text-white">My Details</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Mail className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg font-medium">Email</p>
                                        <a href="mailto:naveensingh1212@gmail.com" className="text-blue-300 hover:underline">naveensingh1212@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg font-medium">Phone</p>
                                        <a href="tel:+916386810145" className="text-blue-300 hover:underline">+91 6386810145</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                    <div>
                                        <p className="text-lg font-medium">Location</p>
                                        <p>Kanpur, Uttar Pradesh, India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold mb-4 text-white">Connect with me</h3>
                                <div className="flex gap-6">
                                    <a href="https://github.com/naveensingh1212" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-8 h-8" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/naveen-singh12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                        <Linkedin className="w-8 h-8" />
                                    </a>
                                    {/* LeetCode Icon - Reusing the SVG from Navbar for consistency */}
                                    <a href="https://leetcode.com/u/naveensingh12/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-lg"
                        >
                            <h3 className="text-3xl font-bold mb-6 text-white">Send me a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 transition-all resize-y"
                                        placeholder="Your message..."
                                        required
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-md"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
