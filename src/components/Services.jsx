import {
  ShoppingCart,
  RotateCcw,
  BarChart3,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import TruckAnimation from './TruckAnimation';

import { Card, CardContent } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: RotateCcw,
      title: "Amazon Returns Handling & Processing",
      description:
        "Comprehensive Amazon returns management service that handles customer returns from inspection to refurbishment, reducing your workload by 90% and improving seller metrics.",
      keywords: [
        "Amazon returns handling",
        "returns processing",
        "seller metrics improvement",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Processing and Refurbishing Services",
      description:
        "Professional product refurbishment and reconditioning services that restore returned items to sellable condition, maximizing recovery value and minimizing losses.",
      keywords: [
        "product refurbishing",
        "reconditioning services",
        "recovery value maximization",
      ],
    },
    {
      icon: Shield,
      title: "Reducing Amazon Storage and Disposal Fees",
      description:
        "Strategic inventory management solutions that eliminate costly Amazon storage fees and disposal charges through efficient returns processing and liquidation.",
      keywords: [
        "Amazon storage fees reduction",
        "disposal fees elimination",
        "inventory management",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description:
        "Real-time dashboards and comprehensive reporting tools that provide insights into return patterns, cost analysis, and ROI optimization for data-driven decisions.",
      keywords: ["returns analytics", "cost analysis", "ROI optimization"],
    },
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description:
        "Efficient Amazon returns management with 24-48 hour processing times, ensuring quick inventory turnover and improved cash flow for your business.",
      keywords: [
        "fast returns processing",
        "quick inventory turnover",
        "improved cash flow",
      ],
    },
    {
      icon: Users,
      title: "Customer Support Automation",
      description:
        "Automated customer communications and support systems that improve buyer satisfaction while reducing manual workload and operational costs.",
      keywords: [
        "customer support automation",
        "buyer satisfaction",
        "operational cost reduction",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <strong className="text-primary"> RTV Solutions </strong> offers a full-spectrum{" "}
            <strong className="text-primary">Amazon Returns Handling</strong> service designed to
            streamline your reverse logistics process. Our team specializes in{" "}
            <strong className="text-primary">processing and refurbishing</strong> returned products to
            restore them to sellable condition, helping you recover value and
            reduce losses. We also provide expert strategies for{" "}
            <strong className="text-primary">reducing Amazon storage and disposal fees</strong> through
            efficient inventory management and liquidation solutions. Let RTV
            Solutions help you minimize operational costs and maximize ROI
            through smart, scalable returns management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-effect hover:border-primary/50 transition-all duration-300 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <service.icon className="h-12 w-12 text-primary group-hover:text-secondary transition-colors duration-300 " />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary px-3 py-1 rounded-full border border-border transition-all duration-200"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

          ))}
        </div>
        <div className="mt-10 bg-gradient-to-b from-background to-muted/10" >
  <Card className="bg-gradient-to-b from-background to-muted/10 border-none shadow-none max-w-5xl mx-auto p-8 flex flex-col items-center animate-fadeInUp">
    <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
      Seamless Returns Logistics in Motion
    </h3>
    <div className="w-full max-w-3xl">
      <TruckAnimation />
    </div>
    <p className="text-muted-foreground text-center mt-2 max-w-xl">
      Our advanced truck logistics system ensures your Amazon returns are processed and moved with unmatched efficiency. See it in action.
    </p>
  </Card>
</div>

      </div>
    </section>
  );
};

export default Services;