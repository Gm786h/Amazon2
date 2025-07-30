import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  // Inline styles
  const styles = {
    section: {
      padding: '5rem 0',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 100%)',
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    title: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#1a1a1a'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#666',
      maxWidth: '48rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem'
    },
    gridLg: {
      '@media (min-width: 1024px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    contactInfoContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    contactCard: {
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    contactCardContent: {
      padding: '1.5rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '1rem'
    },
    iconContainer: {
      padding: '0.75rem',
      backgroundColor: 'rgba(102, 126, 234, 0.2)',
      borderRadius: '0.5rem',
      transition: 'background-color 0.3s ease'
    },
    icon: {
      width: '1.5rem',
      height: '1.5rem',
      color: '#667eea'
    },
    contactTitle: {
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '0.25rem',
      color: '#1a1a1a',
      transition: 'color 0.3s ease'
    },
    contactDetails: {
      color: '#1a1a1a',
      fontWeight: '500',
      marginBottom: '0.25rem'
    },
    contactSubtitle: {
      fontSize: '0.875rem',
      color: '#666'
    },
    formCard: {
      animation: 'fadeInUp 0.6s ease-out 0.3s both'
    },
    form: {
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },
    formGridMd: {
      '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      marginBottom: '0.5rem',
      color: '#1a1a1a'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      backgroundColor: 'rgba(255,255,255,0.5)',
      transition: 'border-color 0.2s ease',
      fontSize: '1rem',
      outline: 'none'
    },
    inputFocus: {
      borderColor: '#667eea',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.375rem',
      backgroundColor: 'rgba(255,255,255,0.5)',
      transition: 'border-color 0.2s ease',
      fontSize: '1rem',
      outline: 'none',
      resize: 'none',
      fontFamily: 'inherit'
    },
    button: {
      width: '100%',
      padding: '0.875rem 1.5rem',
      backgroundColor: '#667eea',
      color: 'white',
      border: 'none',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      animation: 'glow 2s ease-in-out infinite alternate'
    },
    buttonHover: {
      backgroundColor: '#5a67d8',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
    }
  };

  // CSS animations
  const cssAnimations = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes glow {
      from {
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
      }
      to {
        box-shadow: 0 0 30px rgba(102, 126, 234, 0.8);
      }
    }
    
    .contact-card:hover .icon-container {
      background-color: rgba(102, 126, 234, 0.3) !important;
    }
    
    .contact-card:hover .contact-title {
      color: #667eea !important;
    }
    
    .form-input:focus {
      border-color: #667eea !important;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
    }
    
    .submit-button:hover {
      background-color: #5a67d8 !important;
      transform: translateY(-1px) !important;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4) !important;
    }
    
    @media (min-width: 768px) {
      .form-grid-md {
        grid-template-columns: 1fr 1fr !important;
      }
    }
    
    @media (min-width: 1024px) {
      .grid-lg {
        grid-template-columns: 1fr 1fr !important;
      }
    }
  `;

  return (
    <>
      <style>{cssAnimations}</style>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h2 style={styles.title}>
              Get In <span style={styles.gradientText}>Touch</span>
            </h2>
            <p style={styles.subtitle}>
              Get in touch with the Amazon Returns Experts at RTV Solutions. Whether you need help managing returns or have questions about our services, we're here to assist you. Contact us today and start protecting your brand!
            </p>
          </div>

          <div style={styles.grid} className="grid-lg">
            {/* Contact Information */}
            <div style={styles.contactInfoContainer}>
              {contactInfo.map((info, index) => (
                <Card key={index} className="contact-card" style={styles.contactCard}>
                  <CardContent style={styles.contactCardContent}>
                    <div className="icon-container" style={styles.iconContainer}>
                      <info.icon style={styles.icon} />
                    </div>
                    <div>
                      <h3 className="contact-title" style={styles.contactTitle}>
                        {info.title}
                      </h3>
                      <p style={styles.contactDetails}>
                        {info.details}
                      </p>
                      <p style={styles.contactSubtitle}>
                        {info.subtitle}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card style={styles.formCard}>
              <CardContent>
                <div style={styles.form}>
                  <div style={styles.formGrid} className="form-grid-md">
                    <div>
                      <div style={styles.label}>
                        Full Name *
                      </div>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={styles.input}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <div style={styles.label}>
                        Email Address *
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={styles.input}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div style={styles.label}>
                      Company Name
                    </div>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={styles.input}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <div style={styles.label}>
                      Message *
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      style={styles.textarea}
                      className="form-input"
                      placeholder="Tell us about your business and how we can help..."
                    />
                  </div>

                  <div 
                    onClick={handleSubmit}
                    style={styles.button}
                    className="submit-button"
                  >
                    Send Message
                    <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;