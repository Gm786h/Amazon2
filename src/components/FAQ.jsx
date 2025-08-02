import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = React.useState(null);

  const faqs = [
    {
      question: 'How quickly can I get started with RTV Solutions?',
      answer: 'You can be up and running in under 15 minutes. Simply connect your Amazon seller account, configure your preferences, and our AI will start processing returns immediately.'
    },
    {
      question: 'Is my data secure with RTV Solutions?',
      answer: 'Absolutely. We use enterprise-grade encryption, comply with all major security standards (SOC 2, GDPR), and never share your data with third parties. Your business information is completely secure.'
    },
    {
      question: 'How much can I save with automated returns processing?',
      answer: 'Most clients see 50-70% reduction in returns processing costs and save 15-20 hours per week. The exact savings depend on your current volume and processes.'
    },
    {
      question: 'How can you ensure my returns won\'t disrupt the market?',
      answer: 'RTV Solutions creates customized plans to control the flow of returns, ensuring they are resold, recycled, or disposed of in a way that protects your brand and market values to update returns efficiently, reduce fees, and maintain brand integrity.'
    },
    {
      question: 'Do you integrate with other e-commerce platforms?',
      answer: 'Currently, we specialize in Amazon marketplace integration. We\'re expanding to Shopify, eBay, and Walmart in Q2 2024. Contact us for early access.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 chat support, phone support during business hours, dedicated account managers for enterprise clients, and comprehensive onboarding assistance.'
    },
    {
      question: 'Can I customize the automation rules for Amazon returns management?',
      answer: 'Yes! Our platform allows you to create custom rules based on product categories, return reasons, customer history, and more. You have complete control over automation settings with our tailored solutions.'
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Schema markup for SEO */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked{' '}
            <span className="gradient-text">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions about Amazon returns management? Our FAQ covers everything from how 
            RTV Solutions handles returns to the specific benefits of our tailored solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-effect rounded-lg border border-border hover:border-primary/50 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 rounded-lg"
                  aria-expanded={openItem === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-card-foreground pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      openItem === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;