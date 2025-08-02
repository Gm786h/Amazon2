import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechGadgets Pro",
      role: "CEO",
      title: "Amazon Returns Case Study: 90% Reduction in Processing Time",
      tags: ["Amazon FBA Returns", "Fraud Detection", "Cost Reduction"],
      content:
        "RTV Solutions transformed our Amazon returns process completely. We reduced returns processing time by 90% and eliminated unauthorized seller issues. The fraud detection system caught $30K in fraudulent returns in the first month alone. This Amazon returns case study shows how successful returns management can protect your bottom line.",
      rating: 5,
      savings: "$50K annually saved",
      metrics: {
        timeReduction: "90%",
        fraudPrevented: "$30K",
        processingTime: "2 hours/week",
      },
    },
    {
      name: "Michael Chen",
      company: "Fashion Forward",
      role: "Operations Manager",
      title: "Successful Returns Management: 95% Inventory Recovery Rate",
      tags: ["Inventory Recovery", "Supply Chain", "Amazon Seller Success"],
      content:
        "Managing Amazon returns was our biggest challenge before RTV Solutions. Now we have complete visibility into our return supply chain and have successfully recovered 95% of our returned inventory. This case study demonstrates how proper Amazon FBA returns management can transform your business operations and ROI.",
      rating: 5,
      savings: "95% inventory recovery",
      metrics: {
        recoveryRate: "95%",
        visibilityImprovement: "100%",
        roiImprovement: "Immediate",
      },
    },
    {
      name: "Emily Rodriguez",
      company: "Home Essentials",
      role: "Founder",
      title: "Amazon Seller Success Story: Streamlined Returns Process",
      tags: [
        "Brand Protection",
        "Process Optimization",
        "Small Business Growth",
      ],
      content:
        "As an Amazon seller, returns management was eating into our profits. RTV Solutions helped us streamline our entire returns process and maintain brand integrity. We can now focus on growing our business instead of chasing returns. This Amazon returns case study proves that efficient returns management is crucial for Amazon seller success.",
      rating: 5,
      savings: "3x faster processing",
      metrics: {
        speedIncrease: "3x",
        profitProtection: "Significant",
        brandIntegrity: "Maintained",
      },
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-background to-mutued/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-optimized content for Amazon returns case studies */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text text-yellow-600">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Discover how <strong>RTV Solutions</strong> helps brands streamline
            their <strong>Amazon returns management</strong> with expert
            solutions. Learn how our clients improved efficiency, protected
            their brand identity, and avoided costly{" "}
            <strong>Amazon return fees</strong> through our proven system.
          </p>

          <p className="text-lg text-y max-w-2xl mx-auto">
            Read our case studies to learn how <strong> RTV Solutions</strong> has helped sellers
            like you manage their returns efficiently, reduce fees, and maintain
            brand integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-effect hover:border-primary/50 transition-all duration-300 group-animation-fadeInUP"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <CardContent className="p-6 relative ">
                <Quote className="absolute top-4 right-4 h-8 w-8  text-yellow-600" />
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {testimonial.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate/50 text-yellow-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center mb-4 text-yellow-600">
                  {[...Array(testimonial.rating)].map((_ , i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 gradient-text fill-current"
                    />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Key metrics for SEO value */}
                <div className="bg-gray-400 rounded-lg p-3 mb-4">
                  <h4 className="text-sm font-semibold gradient-text">
                    Key Results:
                  </h4>
                  <div className="grid grid-cols-1 gap-1">
                    {Object.entries(testimonial.metrics).map(
                      ([key, value], metricIndex) => (
                        <div
                          key={metricIndex}
                          className="flex justify-between text-xs"
                        >
                          <span className="text-slate-600 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </span>
                          <span className=" font-semibold text-yellow-800">
                            {value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold bg-gradient text-yellow-600 bg-clip-text text-transparent">
                      {testimonial.savings}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional SEO content - hidden from users but valuable for search engines */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">
              Transform Your Amazon Returns Management Today
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Join hundreds of successful Amazon sellers who have streamlined
              their returns process, reduced costs, and protected their brand
              reputation with our comprehensive returns management platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold gradient-text mb-2">90%</div>
                <div className="text-sm text-slate-600">
                  Average reduction in returns processing time
                </div>
              </div>
              <div className="p-4 gradient-text">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  $50K+
                </div>
                <div className="text-sm text-yellow-600">
                  Average annual savings for our clients
                </div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold gradient-text mb-2">
                  95%
                </div>
                <div className="text-sm text-slate-600">
                  Average inventory recovery rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
