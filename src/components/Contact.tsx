
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      gradient: "from-blue-500 to-purple-600",
      delay: "0s"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      gradient: "from-green-500 to-emerald-600",
      delay: "0.2s"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY",
      gradient: "from-purple-500 to-pink-600",
      delay: "0.4s"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 cursor-hover relative">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Touch
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg -z-10 animate-pulse" />
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have an amazing project in mind? Let's collaborate and create something extraordinary together.
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-8 space-x-4">
            <Star className="w-6 h-6 text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
            <MessageCircle className="w-6 h-6 text-purple-400 animate-bounce" />
            <Star className="w-6 h-6 text-pink-400 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white mb-8 cursor-hover">
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Conversation
              </span>
            </h3>
            
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center group hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: item.delay }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mr-6 group-hover:rotate-12 transition-all duration-300 shadow-lg cursor-hover`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1 cursor-hover">{item.title}</h4>
                    <p className="text-gray-300 text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced info box */}
            <div className="mt-12 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h4 className="text-white font-bold text-2xl mb-6 cursor-hover flex items-center">
                <Star className="w-6 h-6 text-yellow-400 mr-3 animate-pulse" />
                Why Choose Me?
              </h4>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-center cursor-hover">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 animate-pulse" />
                  Modern, responsive, and accessible designs
                </li>
                <li className="flex items-center cursor-hover">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  Lightning-fast development and delivery
                </li>
                <li className="flex items-center cursor-hover">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '1s' }} />
                  24/7 communication and support
                </li>
                <li className="flex items-center cursor-hover">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-4 animate-pulse" style={{ animationDelay: '1.5s' }} />
                  Post-launch maintenance and updates
                </li>
              </ul>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-10 border border-gray-700/50 backdrop-blur-lg relative overflow-hidden shadow-2xl">
              {/* Form background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
              
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="relative">
                  <label htmlFor="name" className="block text-white font-bold text-lg mb-3 cursor-hover">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:border-blue-500 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                  {focusedField === 'name' && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-sm -z-10 animate-pulse" />
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-white font-bold text-lg mb-3 cursor-hover">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                  {focusedField === 'email' && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-sm -z-10 animate-pulse" />
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-white font-bold text-lg mb-3 cursor-hover">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-700/50 border-2 border-gray-600 rounded-2xl text-white text-lg focus:outline-none focus:border-pink-500 transition-all duration-300 resize-none backdrop-blur-sm"
                    required
                  ></textarea>
                  {focusedField === 'message' && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 to-blue-500/30 rounded-2xl blur-sm -z-10 animate-pulse" />
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-xl rounded-2xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed cursor-hover"
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
