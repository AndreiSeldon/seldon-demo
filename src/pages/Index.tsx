
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Home Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              YourApp
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A beautiful React application with seamless navigation between multiple screens.
            Explore our different sections using the navigation bar above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Design</h3>
            <p className="text-gray-600">
              Clean and contemporary interface with smooth animations and responsive layout.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Navigation</h3>
            <p className="text-gray-600">
              Intuitive navigation system that works seamlessly across all devices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Performance</h3>
            <p className="text-gray-600">
              Optimized for speed and performance with modern React best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
