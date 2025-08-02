const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
       
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white mt-20">
            Streamline Your{' '}
            <span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">Amazon Returns</span>{' '}
            & Reduce Fees  Protect Your Brand, Maximize Value
          </h1>
           
          <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto">
            At RTV Solutions, we understand how crucial it is to control your brand's returns. 
            Our dedicated facilities and expert team ensure that your <strong>Amazon Returns Management </strong> 
             is handled efficiently, preventing market disruption and reducing your <strong>Amazon Fees</strong>. 
            We craft tailored solutions to quietly sell, buy, or recycle your returns, 
            keeping your brand's integrity intact.
          </p>
           
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our state-of-the-art facility provides professional <strong>Seller Returns Processing</strong> 
            services, ensuring faster processing, improved seller metrics, and significant cost savings 
            for your Amazon business while protecting your brand reputation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-yellow-600 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-medium rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started with Professional Amazon Returns Management
            </button>
             
            <button className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg font-medium rounded-md transition-all duration-300">
           Protect Your Brand Today
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600">Processing Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-gray-600">Automated Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent mb-2">50%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;