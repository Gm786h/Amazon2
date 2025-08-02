import { TrendingUp, Clock, DollarSign, Users, Shield, Zap, Target, Recycle, Settings, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

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
    <section id="benefits" className="py-20 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="gradient-text">RTV Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your returns from a cost center into a competitive advantage.
          </p>
        </div>
        
        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full"></div>
                <div className="mb-4 relative z-10">
                  <benefit.icon className="h-12 w-12 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {benefit.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="bg-card rounded-2xl p-8 mb-12 border border-border">
          <h3 className="text-3xl font-bold text-center mb-8 text-card-foreground">
            Additional Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-muted/50 rounded-xl p-6 hover:bg-muted/70 transition-all duration-300 border border-border/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold mb-2 text-card-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground mb-3">
                      {benefit.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {benefit.keywords.map((keyword, keyIndex) => (
                        <span 
                          key={keyIndex}
                          className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full border border-primary/30"
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
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-6 text-card-foreground text-center">
            Why Businesses Choose Our Returns Management Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Cost-effective returns solutions that reduce overhead</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Efficient Amazon returns management system</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Market disruption prevention strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Custom return processing workflows</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Automated inventory recovery solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Tailored plans for sell, buy, or recycle returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Professional returns liquidation services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Scalable return management platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;