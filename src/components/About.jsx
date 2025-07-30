import { Award, Users, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '10+' },
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Globe, label: 'Returns Processed', value: '1M+' },
    { icon: Lightbulb, label: 'AI Accuracy', value: '99.2%' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUP">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text text-yellow-600">Story</span>
            </h2>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Background</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Born from a deep understanding of the challenges Amazon sellers face, RTV Solutions 
                has become a leader in <strong>Returns Management</strong>. With years of expertise in 
                <strong>Amazon Seller Support</strong>, we specialize in preventing market disruption 
                and enhancing the value of returned products through our comprehensive 
                <strong>Returns Management Expertise</strong>.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Commitment</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're committed to your success. Our focus on <strong>Improving Returns Processes</strong> 
                means you can trust RTV Solutions to handle your brand with care, ensuring that your 
                returns do not impact your market presence or brand reputation. We are dedicated to 
                <strong>Amazon Seller Success</strong>, providing the tools and expertise needed to 
                transform returns from a burden into an opportunity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our advanced AI-powered platform processes millions of returns annually, helping 
                businesses save time, money, and resources while maintaining the highest standards 
                of customer satisfaction and brand integrity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg hover:border-blue-500/50 transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;