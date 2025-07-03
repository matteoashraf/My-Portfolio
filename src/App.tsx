import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, ChevronDown, Code, Database, Globe, User, Quote, Bookmark } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Saad Ashraf</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Saad Ashraf
                <span className="text-blue-600 block">Frontend Developer</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Computer Science student passionate about creating beautiful and responsive user interfaces. 
                Specializing in modern frontend technologies with a background in backend development 
                and continuously learning new skills.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Get In Touch
                  <Mail size={18} />
                </button>
                <a 
                  href="https://github.com/matteoashraf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  View GitHub
                  <Github size={18} />
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gray-100">
                  <img 
                    src="/profile(1).jpg" 
                    alt="Saad Ashraf - Frontend Developer" 
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: 'contrast(1.1) brightness(1.05)',
                      objectPosition: 'center top'
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Code size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate Computer Science student specializing in frontend development 
              with a background in backend technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Currently pursuing a Bachelor's degree in Computer Science at The Egyptian E-Learning University 
                (Alexandria University), I'm passionate about creating beautiful and intuitive user interfaces. 
                My focus is on frontend development using modern frameworks like React and Angular, with a solid 
                background in backend technologies that I'm still learning.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe in continuous learning and staying updated with the latest frontend technologies. 
                My projects demonstrate my ability to create responsive, user-friendly applications with clean, 
                maintainable code and excellent user experience.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Frontend Development</li>
                    <li>• UI/UX Design</li>
                    <li>• Responsive Design</li>
                    <li>• Modern Frameworks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Currently Learning</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Advanced React Patterns</li>
                    <li>• Backend Technologies</li>
                    <li>• Cloud Technologies</li>
                    <li>• System Design</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Responsive Design Expert</h4>
                    <p className="text-gray-600">Created seamless cross-device experiences with modern CSS frameworks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frontend Specialist</h4>
                    <p className="text-gray-600">Proficient in React, JavaScript, and modern frontend technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Problem Solver</h4>
                    <p className="text-gray-600">Strong foundation in algorithms, data structures, and software engineering principles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600">Academic background and relevant coursework</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor's Degree in Computer Science</h3>
                  <p className="text-blue-600 font-medium text-lg mb-2">The Egyptian E-Learning University - Alexandria University</p>
                  <p className="text-gray-500 mb-4">Sep 2022 – Jun 2025 | Alexandria, Egypt</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-4">Relevant Coursework:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      'Data Structures',
                      'Programming Languages and Compilers',
                      'Artificial Intelligence',
                      'Database Management',
                      'Software Engineering',
                      'Algorithms Analysis',
                      'Object-Oriented Programming'
                    ].map((course, index) => (
                      <div key={index} className="bg-gray-50 px-4 py-2 rounded-lg">
                        <span className="text-gray-700 font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing my development skills and problem-solving abilities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fokir Personal Portfolio */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <User size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fokir Personal Portfolio Website</h3>
                <p className="text-gray-500 text-sm mb-3">Jan 2024</p>
                <p className="text-gray-600 mb-4">
                  Modern personal portfolio website featuring responsive design, interactive elements, 
                  and a sleek UI to showcase professional skills and projects.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Font Awesome</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• Fully responsive layout using CSS Flexbox/Grid</p>
                  <p>• Interactive portfolio gallery with hover effects</p>
                  <p>• Animated typography for dynamic text effects</p>
                  <p>• Contact form with styled inputs</p>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://matteoashraf.github.io/Fokir/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a 
                    href="https://github.com/matteoashraf/Fokir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-700"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* DevFolio */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                <Code size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">DevFolio - Professional Developer Portfolio</h3>
                <p className="text-gray-500 text-sm mb-3">May 2024</p>
                <p className="text-gray-600 mb-4">
                  Modern responsive portfolio template for developers featuring clean design, 
                  interactive components, and comprehensive project showcase sections.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Font Awesome</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• Multi-level dropdown navigation with CSS-only implementation</p>
                  <p>• Animated skill progress bars for visual proficiency display</p>
                  <p>• Project portfolio grid with hover effects</p>
                  <p>• Dual-panel contact layout (form + information)</p>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://matteoashraf.github.io/DevFolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a 
                    href="https://github.com/matteoashraf/DevFolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-700"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Random Quote Generator */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <Quote size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Random Quote Generator</h3>
                <p className="text-gray-500 text-sm mb-3">Jun 2024</p>
                <p className="text-gray-600 mb-4">
                  Lightweight web application that displays inspirational quotes with a clean, 
                  responsive interface and intelligent quote rotation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• Non-repeating random selection ensures consecutive quotes are different</p>
                  <p>• Minimalist UI with Bootstrap-powered responsive design</p>
                  <p>• One-click interaction for instant quote generation</p>
                  <p>• Author attribution with proper formatting</p>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://matteoashraf.github.io/Quote-generator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a 
                    href="https://github.com/matteoashraf/Quote-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-700"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bookmarker */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <Bookmark size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bookmarker - Web Bookmark Manager</h3>
                <p className="text-gray-500 text-sm mb-3">Jun 2024</p>
                <p className="text-gray-600 mb-4">
                  Web application for saving and managing bookmarks with local storage persistence 
                  and input validation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• Input validation with real-time feedback for site name and URL</p>
                  <p>• Local storage integration for persistent bookmark storage</p>
                  <p>• Interactive table with visit and delete functionality</p>
                  <p>• Custom modal for validation error explanations</p>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://matteoashraf.github.io/Bookmark/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a 
                    href="https://github.com/matteoashraf/Bookmark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-700"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* BookingLuxe Project */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Globe size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">BookingLuxe Website</h3>
                <p className="text-gray-500 text-sm mb-3">Jul 2023</p>
                <p className="text-gray-600 mb-4">
                  Responsive travel booking platform with seamless cross-device compatibility 
                  and interactive UI components for enhanced user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• Bootstrap 5 for responsive layout</p>
                  <p>• Modal-based login system</p>
                  <p>• Dynamic image carousel</p>
                  <p>• Cross-device compatibility</p>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="https://matteoashraf.github.io/Booking-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a 
                    href="https://github.com/matteoashraf/Booking-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-700"
                  >
                    GitHub <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Employee Management System */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Database size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Employee Management System</h3>
                <p className="text-gray-500 text-sm mb-3">Apr 2024</p>
                <p className="text-gray-600 mb-4">
                  Java desktop application with full CRUD functionality for managing employee records, 
                  featuring MySQL database integration and normalized schema design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Java</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">JDBC</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">NetBeans</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Java Swing GUI interface</p>
                  <p>• MySQL database with JDBC</p>
                  <p>• Normalized relational schema</p>
                  <p>• XAMPP local server environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Core Languages */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Languages</h3>
              <div className="space-y-6">
                {[
                  { name: 'JavaScript', level: 80 },
                  { name: 'Java', level: 80 },
                  { name: 'HTML/CSS', level: 95 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Frameworks & Libraries</h3>
              <div className="space-y-6">
                {[
                  { name: 'React', level: 80 },
                  { name: 'Angular', level: 70 },
                  { name: 'Bootstrap', level: 90 },
                  { name: 'Tailwind CSS', level: 85 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Development */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Development</h3>
              <div className="space-y-6">
                {[
                  { name: 'VS Code', level: 95 },
                  { name: 'Cursor', level: 85 },
                  { name: 'NetBeans', level: 80 },
                  { name: 'Postman', level: 75 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Currently Learning Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Currently Learning</h3>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'Python',
                  'SQL',
                  'Cloud Technologies',
                  'DevOps',
                  'System Design'
                ].map((tech, index) => (
                  <div key={index} className="bg-yellow-50 border border-yellow-200 px-4 py-3 rounded-lg text-center">
                    <span className="text-yellow-800 font-medium">{tech}</span>
                    <p className="text-yellow-600 text-sm mt-1">Learning</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Code size={24} />, title: 'Frontend Development' },
                { icon: <Globe size={24} />, title: 'Responsive Design' },
                { icon: <ExternalLink size={24} />, title: 'UI/UX Implementation' },
                { icon: <Database size={24} />, title: 'Backend Learning' }
              ].map((competency, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center hover:bg-blue-50 transition-colors duration-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-white">
                    {competency.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900">{competency.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss opportunities and collaborations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:matteoashraf4@gmail.com" className="text-gray-600 hover:text-blue-600">
                      matteoashraf4@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+201211676698" className="text-gray-600 hover:text-blue-600">
                      +20 121 167 6698
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Alexandria, Egypt</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/saad-ashraf-208425321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/matteoashraf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Saad Ashraf Saad Zaki</h3>
            <p className="text-gray-400 mb-6">
              Frontend Developer | Computer Science Student | Continuous Learner
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a 
                href="https://linkedin.com/in/saad-ashraf-208425321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/matteoashraf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:matteoashraf4@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Saad Ashraf. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;