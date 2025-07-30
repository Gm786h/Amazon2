import { TrendingUp, Clock, DollarSign, Users, Shield, Zap, Target, Recycle, Settings, CheckCircle } from 'lucide-react';
import { Card,CardContent } from './ui/card';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Profitability',
      description: 'Reduce return processing costs by up to 60% and recover more value from returned items.',
      stat: '60% Cost Reduction'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automate 95% of return processing tasks and free up your team for growth activities.',
      stat: '95% Automation'
    },
    {
      icon: DollarSign,
      title: 'Recover More Revenue',
      description: 'Intelligent restocking and resale recommendations maximize the value of returned inventory.',
      stat: '40% More Recovery'
    },
    {
      icon: Users,
      title: 'Improve Customer Experience',
      description: 'Faster processing times and transparent communication lead to higher customer satisfaction.',
      stat: '98% Satisfaction'
    },
    {
      icon: Shield,
      title: 'Reduce Fraud',
      description: 'Advanced fraud detection prevents costly fraudulent returns and protects your business.',
      stat: '85% Fraud Reduction'
    },
    {
      icon: Zap,
      title: 'Scale Effortlessly',
      description: 'Handle thousands of returns without adding staff. Our system grows with your business.',
      stat: 'Unlimited Scale'
    }
  ];

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Minimize your expenses with our efficient returns management and cost-effective returns solutions.',
      keywords: ['cost-effective returns solutions', 'efficient returns management']
    },
    {
      icon: Target,
      title: 'Market Disruption Prevention',
      description: 'RTV Solutions helps you avoid market flooding by controlling how and where returns are resold.',
      keywords: ['market disruption prevention', 'controlled resale strategy']
    },
    {
      icon: Settings,
      title: 'Tailored Plans',
      description: 'Custom strategies to sell, buy, or recycle returns according to your specific business needs.',
      keywords: ['custom return strategies', 'tailored return plans']
    },
    {
      icon: Recycle,
      title: 'Efficient Amazon Returns Management',
      description: 'Specialized solutions for Amazon FBA returns, liquidation, and inventory recovery.',
      keywords: ['efficient Amazon returns management', 'Amazon FBA returns', 'inventory recovery']
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text text-yellow-600">RTV Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your returns from a cost center into a competitive advantage.
          </p>
        </div>
        
        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:border-blue-300/50 hover:shadow-xl transition-all duration-300 group overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-bl-full"></div>
                <div className="mb-4 relative z-10">
                  <benefit.icon className="h-12 w-12 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {benefit.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Additional Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 mb-3">
                      {benefit.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {benefit.keywords.map((keyword, keyIndex) => (
                        <span 
                          key={keyIndex}
                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO-Friendly Bullet Points */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Why Businesses Choose Our Returns Management Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Cost-effective returns solutions that reduce overhead</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Efficient Amazon returns management system</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Market disruption prevention strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Custom return processing workflows</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Automated inventory recovery solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Tailored plans for sell, buy, or recycle returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Professional returns liquidation services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Scalable return management platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default Benefits;