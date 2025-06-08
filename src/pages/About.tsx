
import { Link } from "react-router-dom";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating exceptional digital experiences that make a difference.
            Our journey began with a simple mission: to build beautiful, functional applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We believe in the power of technology to transform businesses and improve lives.
              Our team is dedicated to delivering innovative solutions that exceed expectations.
            </p>
            <p className="text-gray-600 mb-6">
              With years of experience in the industry, we've helped countless organizations
              achieve their digital goals through thoughtful design and robust development.
            </p>
            <Link
              to="/services"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 inline-block"
            >
              Our Services
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="text-green-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Skilled professionals with diverse expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Target className="text-green-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Focused Approach</h4>
                  <p className="text-gray-600 text-sm">Goal-oriented solutions tailored to your needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-green-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Results</h4>
                  <p className="text-gray-600 text-sm">Track record of successful project delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and creative solutions to stay ahead of the curve.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                Every project is crafted with attention to detail and commitment to excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">
                We work closely with our clients to ensure their vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
