import React from 'react';
import { ArrowRight, Upload, Cpu, CheckCircle, BarChart } from 'lucide-react';
const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Seamless Returns Processing',
      description: 'Our streamlined returns management system receives and processes your returned items efficiently, ensuring quick turnaround times and minimal handling costs.',
      link: '/returns-processing'
    },
    {
      icon: Cpu,
      title: 'Professional Refurbishment Services',
      description: 'Expert refurbishment and quality control processes restore your products to sellable condition while maintaining your brand standards and reputation.',
      link: '/refurbishment-services'
    },
    {
      icon: CheckCircle,
      title: 'Strategic Market Placement',
      description: 'We identify and connect with the right resale markets and channels to maximize your return on investment while protecting your brand integrity.',
      link: '/resale-markets'
    },
    {
      icon: BarChart,
      title: 'Cost Reduction & Analytics',
      description: 'Comprehensive analytics and reporting help you understand return patterns, reduce future returns, and optimize your overall cost structure.',
      link: '/cost-analytics'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="gradient-text text-yellow-600">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our process is designed to be <strong> seamless and effective</strong>. From receiving your returns to refurbishing and finding the right market for resale, we ensure every step is optimized to protect your brand and reduce costs.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-10 w-10 text-yellow-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-background font-bold text-sm">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full">
                     
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  <a href={step.link} className="hover:underline">
                    {step.title}
                  </a>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>
                
                <a 
                  href={step.link} 
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 text-sm font-medium"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">
              Optimize Your <span className="gradient-text">Returns Strategy</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Discover how our comprehensive approach to returns management, refurbishment services, and strategic resale partnerships can transform your reverse logistics into a profit center while maintaining brand integrity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/case-studies" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                View Case Studies
              </a>
              <a href="/contact" className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;