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
    <div id="services" className="min-h-screen bg-gradient-to-b from-background to-muted/20" >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-yellow-800 font-bold">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             <strong> RTV Solutions </strong> offers a full-spectrum{" "}
              <strong>Amazon Returns Handling</strong> service designed to
              streamline your reverse logistics process. Our team specializes in{" "}
              <strong>processing and refurbishing</strong> returned products to
              restore them to sellable condition, helping you recover value and
              reduce losses. We also provide expert strategies for{" "}
              <strong>reducing Amazon storage and disposal fees</strong> through
              efficient inventory management and liquidation solutions. Let RTV
              Solutions help you minimize operational costs and maximize ROI
              through smart, scalable returns management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-black backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group text-white"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/5 text-primary px-2 py-1 rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
