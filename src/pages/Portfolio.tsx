
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern online shopping platform with advanced features and seamless user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Stripe", "Node.js"],
      category: "Web Application",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Biometrics"],
      category: "Mobile App",
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management platform for teams of all sizes.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["React", "GraphQL", "PostgreSQL"],
      category: "SaaS Platform",
    },
    {
      title: "Healthcare Dashboard",
      description: "Analytics dashboard for healthcare providers with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["Vue.js", "D3.js", "Python"],
      category: "Dashboard",
    },
    {
      title: "Real Estate Platform",
      description: "Comprehensive real estate platform with virtual tours and advanced search.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tags: ["Next.js", "Mapbox", "AWS"],
      category: "Web Platform",
    },
    {
      title: "Food Delivery App",
      description: "Complete food delivery solution with real-time tracking and payments.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      tags: ["React Native", "Socket.io", "PayPal"],
      category: "Mobile App",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses across various
            industries achieve their digital transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors duration-200">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors duration-200">
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your project and discuss how we can help bring
            your ideas to life. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
