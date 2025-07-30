import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // SEO optimization - set document title and meta description
  useEffect(() => {
    // Set page title
    document.title = "Contact Amazon Returns Service Experts | RTV Solutions";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Amazon Returns Experts at RTV Solutions. Contact our team for professional Amazon returns management, RTV services, and brand protection solutions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Get in touch with Amazon Returns Experts at RTV Solutions. Contact our team for professional Amazon returns management, RTV services, and brand protection solutions.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'contact amazon returns service, amazon returns experts, RTV solutions contact, amazon returns management, contact returns specialists');
    } else {
      const keywords = document.createElement('meta');
      keywords.name = 'keywords';
      keywords.content = 'contact amazon returns service, amazon returns experts, RTV solutions contact, amazon returns management, contact returns specialists';
      document.getElementsByTagName('head')[0].appendChild(keywords);
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "RTV Solutions",
      "description": "Amazon Returns Service Experts providing professional returns management and brand protection solutions",
      "url": "https://rtvsolutions.com/contact",
      "telephone": "+1-555-123-4567",
      "email": "hello@rtvsolutions.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "serviceArea": "United States",
      "priceRange": "$",
      "openingHours": "Mo-Fr 09:00-18:00"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.getElementsByTagName('head')[0].appendChild(script);

    // Cleanup function
    return () => {
      // Remove added elements when component unmounts
      const addedMeta = document.querySelector('meta[name="description"][content*="RTV Solutions"]');
      const addedKeywords = document.querySelector('meta[name="keywords"][content*="contact amazon returns service"]');
      const addedScript = document.querySelector('script[type="application/ld+json"]');
      
      if (addedMeta && addedMeta.content.includes('RTV Solutions')) addedMeta.remove();
      if (addedKeywords && addedKeywords.content.includes('contact amazon returns service')) addedKeywords.remove();
      if (addedScript) addedScript.remove();
    };
  }, []);

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@rtvsolutions.com',
      subtitle: 'We respond within 2 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      subtitle: 'Schedule a meeting'
    }
  ];

  return (
    <main role="main">
      {/* SEO-optimized header with structured headings */}
      <header className="sr-only">
        <h1>Contact Amazon Returns Service | Get In Touch with Amazon Returns Experts</h1>
      </header>
      
      <section id='contact' className="py-20 bg-gradient-to-b from-gray-50 to-gray-25 min-h-screen" itemScope itemType="https://schema.org/ContactPage">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Get In <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with the Amazon Returns Experts at RTV Solutions. Whether you need help managing returns or have questions about our services, we're here to assist you. Contact us today and start protecting your brand!
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <aside className="flex flex-col gap-8" itemScope itemType="https://schema.org/Organization">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group" itemScope itemType="https://schema.org/ContactPoint">
                <div className="p-6 flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1" itemProp={info.icon === Mail ? "email" : info.icon === Phone ? "telephone" : "address"}>
                      {info.details}
                    </p>
                    <p className="text-sm text-gray-600">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </aside>

          {/* Contact Form */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-100" itemScope itemType="https://schema.org/ContactPage">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white bg-opacity-50 transition-colors duration-200 text-base outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      required
                      aria-describedby="name-help"
                    />
                    <span id="name-help" className="sr-only">Enter your full name for contact</span>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white bg-opacity-50 transition-colors duration-200 text-base outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      required
                      aria-describedby="email-help"
                    />
                    <span id="email-help" className="sr-only">Provide your email address</span>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-900">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white bg-opacity-50 transition-colors duration-200 text-base outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    aria-describedby="company-help"
                  />
                  <span id="company-help" className="sr-only">Optional: Your company name</span>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white bg-opacity-50 transition-colors duration-200 text-base outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                    placeholder="Tell us about your business and how we can help..."
                    required
                    aria-describedby="message-help"
                  />
                  <span id="message-help" className="sr-only">Describe how we can help you</span>
                </div>

                <button 
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full px-6 py-4 bg-indigo-600 text-white border-none rounded-md text-base font-medium cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-400/40 active:translate-y-0"
                  aria-describedby="submit-help"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span id="submit-help" className="sr-only">Submit your message to contact us</span>
              </form>
            </div>
          </section>
        </div>
        
        {/* SEO Content Section */}
        <section className="mt-16 bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose RTV Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Amazon Returns Expertise</h3>
              <p>Our team specializes in Amazon returns management, helping brands reduce losses and optimize their return processes with proven strategies.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fast Response Time</h3>
              <p>We respond to all inquiries within 2 hours, ensuring you get the support you need when managing your Amazon returns.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Brand Protection Focus</h3>
              <p>Protect your brand reputation with our comprehensive Amazon returns solutions and dedicated customer service approach.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
    </main>
  );
};

export default Contact;