import React, { useState, useEffect } from "react";

const SeamlessReturnsLogistics = () => {
  const [truckPosition, setTruckPosition] = useState(-100);
  const [packageDropped, setPackageDropped] = useState(false);
  const [showProcessing, setShowProcessing] = useState(false);
  const [processingComplete, setProcessingComplete] = useState(false);
  const [pickupTruckPosition, setPickupTruckPosition] = useState(800);
  const [animationPhase, setAnimationPhase] = useState("delivery");
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
      // Phase 1: Amazon truck arrives
      setTimeout(() => {
        setTruckPosition(300);
      }, 1000);

      // Phase 2: Drop package
      setTimeout(() => {
        setPackageDropped(true);
      }, 3000);

      // Phase 3: Truck continues
      setTimeout(() => {
        setTruckPosition(-300);
      }, 4000);

      // Phase 4: Show processing
      setTimeout(() => {
        setShowProcessing(true);
        setAnimationPhase("processing");
      }, 5500);

      // Phase 5: Processing complete
      setTimeout(() => {
        setProcessingComplete(true);
      }, 8000);

      // Phase 6: Pickup truck arrives
      setTimeout(() => {
        setPickupTruckPosition(350);
        setAnimationPhase("pickup");
      }, 9000);
      // Phase 7: Show fireworks
      setTimeout(() => {
        setShowFireworks(true);
      }, 11000);

      // Phase 8: Hide fireworks and reset
      setTimeout(() => {
        setShowFireworks(false);
        resetAnimation();
      }, 13000);

      // Phase 9: Reset animation
      setTimeout(() => {
        resetAnimation();
      }, 12000);
    };

    const resetAnimation = () => {
      setPackageDropped(false);
      setShowProcessing(false);
      setProcessingComplete(false);
      setPickupTruckPosition(800);
      setAnimationPhase("delivery");
    };

    runAnimation();
    const interval = setInterval(runAnimation, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-background to-muted/10">
      {/* Main Animation Container */}
      <div className="relative w-full max-w-4xl h-80 bg-gradient-to-br from-slate-800 via-blue-900/30 to-slate-900 rounded-2xl border border-slate-600/50 shadow-2xl overflow-hidden pt-20">
          <div className="w-6 h-6 bg-yellow-50 rounded-full border-2 border-yellow-400  m-auto "></div>
        <div className="text-center  pt-10 gradient-text text-2xl ">RTV</div>
        {/* Road */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-700 to-gray-600">
          <div className="absolute top-4 left-0 right-0 h-1 bg-yellow-400/80 shadow-sm" />
          <div className="absolute top-6 left-0 right-0 h-px bg-gray-500/50" />
        </div>

        {/* Amazon Delivery Truck */}
        {/* Amazon Delivery Truck */}
        <div
          className="absolute bottom-16 transition-all duration-[2000ms] ease-out"
          style={{ left: `${truckPosition}px` }}
        >
          <div className="relative">
            {/* Truck Body */}
            <div className="flex items-end">
              {/* Cab */}

              <div className="w-16 h-12 bg-gradient-to-b from-blue-600 to-blue-700 rounded-tl-lg rounded-bl-sm relative">
                <div className="absolute top-1 left-1 w-6 h-4 bg-cyan-200/80 rounded-sm"></div>
                <div className="absolute top-1 right-1 w-4 h-4 bg-cyan-200/60 rounded-sm"></div>
                <div className="absolute top-6 right-0 w-px h-4 bg-blue-800"></div>
              </div>
              {/* Cargo */}
              <div className="w-20 h-10 bg-gradient-to-b from-gray-300 to-gray-400 relative">
                <div className="absolute top-1 right-1 w-px h-8 bg-gray-500"></div>
                <div className="absolute top-1 right-3 w-px h-8 bg-gray-500"></div>
                <div className="absolute top-2 left-2 w-4 h-2 bg-orange-400 rounded-sm flex items-center justify-center">
                  <div className="w-10 h-px bg-orange-600 rounded-full text-2xl text-yellow-700">
                    Amazon
                  </div>
                </div>
              </div>
            </div>

            {/* Wheels */}
            <div className="absolute -bottom-2 left-2">
              <div className="w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full m-1"></div>
              </div>
            </div>
            <div className="absolute -bottom-2 right-4">
              <div className="w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full m-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Dropped Package (separate from truck) */}
        {packageDropped && (
          <div
            className={`absolute bottom-20 transition-all duration-700 ${
              !showProcessing ? "translate-x-12 translate-y-8 opacity-100" : ""
            }`}
            style={{ left: "350px" }}
          >
            <div
              className={`relative ${processingComplete ? "z-10 text-yellow-900" : "z-0"} pb-2`}
            >
              <div className="w-7 h-7 bg-gradient-to-br from-amber-600 to-amber-700 border border-amber-800 rounded-sm relative shadow-lg">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-800/60"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-amber-800/60"></div>
              </div>

              {/* Motion Lines (optional) */}
              {!showProcessing && (
                <>
                  <div className="absolute top-1 -left-8 opacity-100">
                    <div className="flex space-x-1">
                      <div className="w-3 h-px bg-cyan-400/60"></div>
                      <div className="w-2 h-px bg-cyan-400/40"></div>
                      <div className="w-1 h-px bg-cyan-400/20"></div>
                    </div>
                  </div>
                  <div className="absolute top-3 -left-6 opacity-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-px bg-cyan-400/60"></div>
                      <div className="w-1 h-px bg-cyan-400/40"></div>
                    </div>
                  </div>
                  <div className="absolute top-5 -left-4 opacity-100">
                    <div className="w-1 h-px bg-cyan-400/60"></div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {showProcessing && (
          <div className="absolute bottom-16" style={{ left: "350px" }}>
            <div
              className={`flex flex-col items-center transition-all duration-500 ${
                processingComplete ? "scale-110" : "animate-bounce"
              }`}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center  shadow-lg border text-2xl pb-5">
                {processingComplete ? "👨‍🔧" : "👨‍🔧...."}
              </div>
              <div className="mt-1 text-xs text-white font-semibold text-center mb-3 ">
                {processingComplete ? "Complete!" : "Processing"}
              </div>
            </div>
          </div>
        )}

        {/* Processed Package */}
        {/* {processingComplete && (
          <div className="absolute bottom-20" style={{ left: '420px' }}>
            <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-emerald-700 border border-emerald-800 rounded-sm shadow-lg relative animate-pulse">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-emerald-900/60"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-emerald-900/60"></div>
              <div className="absolute -top-1 -right-1 text-xs">✨</div>
            </div>
          </div>
        )} */}

        {/* Pickup Truck */}
        <div
          className="absolute bottom-16 transition-all duration-[2000ms] ease-out scale-x-[-1]"
          style={{ left: `${pickupTruckPosition}px` }}
        >
          <div className="relative">
            <div className="flex items-end">
              <div className="w-14 h-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-l-lg border border-emerald-900 shadow-lg relative">
                <div className="absolute top-1 left-2 w-5 h-3 bg-cyan-200/90 rounded border border-cyan-400"></div>
              </div>
              <div className="w-20 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-r border border-emerald-800 shadow-lg relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs scale-x-[-1]">
                  PICKUP
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 left-2 w-5 h-5 bg-gray-800 rounded-full border border-gray-700 shadow-sm">
              <div className="w-2 h-2 bg-gray-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute -bottom-2 right-4 w-5 h-5 bg-gray-800 rounded-full border border-gray-700 shadow-sm">
              <div className="w-2 h-2 bg-gray-600 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        {/* Animation Phase Indicator */}
        <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 border border-slate-600/50">
          <div className="text-lg font-bold text-cyan-400 mb-1">
            Returns Logistics
          </div>
          <div className="text-sm text-emerald-400 mb-1 text-3xl">
            Phase:{" "}
            {animationPhase === "delivery"
              ? "Delivery"
              : animationPhase === "processing"
              ? "Processing"
              : "Pickup"}
          </div>
          <div className="text-xs text-gray-300 ">
            Process • Refurbish • Resell
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-64">
          <div className="text-white text-xs text-center mb-1 font-semibold ">
            Processing Progress
          </div>
          <div className="h-2 bg-slate-400/20 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 rounded-full transition-all duration-1000 ${
                processingComplete
                  ? "w-full"
                  : showProcessing
                  ? "w-3/4"
                  : packageDropped
                  ? "w-1/4"
                  : "w-0"
              }`}
            >
              <div className="h-full bg-stripes animate-stripes opacity-30" />
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        {showProcessing && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ping"
                style={{
                  left: `${30 + i * 8}%`,
                  top: `${40 + (i % 3) * 10}%`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: "2s",
                }}
              >
                <div className="w-2 h-2 bg-cyan-400/60 rounded-full" />
              </div>
            ))}
          </div>
        )}
        {showFireworks && (
          <div className="absolute inset-0 pointer-events-none z-50">
            {[...Array(5)].map((_, i) => {
              const left = Math.random() * 80 + 10; // avoid too close to edges
              const top = Math.random() * 50 + 10;
              const delay = i * 500;

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}ms`,
                  }}
                >
                  <div className="relative w-2 h-2">
                    {[...Array(12)].map((_, j) => {
                      const angle = (360 / 12) * j;
                      return (
                        <span
                          key={j}
                          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-pink-700 via-yellow-600 to-purple-700 animate-spark"
                          style={{
                            left: "50%",
                            top: "50%",
                            transform: `rotate(${angle}deg) translate(0, -20px)`,
                            transformOrigin: "center",
                            animationDelay: `${delay}ms`,
                          }}
                        />
                      );
                    })}
                    <div className="absolute w-10 h-10 rounded-full bg-white opacity-20 animate-pulse-burst" />
                  </div>
                </div>
              );
            })}

            {/* Fireworks animation CSS */}
            <style jsx>{`
              @keyframes spark {
                0% {
                  transform: scale(0.5) translate(0, 0);
                  opacity: 1;
                }
                100% {
                  transform: scale(1.5) translate(0, -30px);
                  opacity: 0;
                }
              }

              .animate-spark {
                animation: spark 1s ease-out forwards;
              }

              @keyframes pulse-burst {
                0% {
                  transform: scale(0.2);
                  opacity: 0.8;
                }
                100% {
                  transform: scale(1.5);
                  opacity: 0;
                }
              }

              .animate-pulse-burst {
                animation: pulse-burst 0.8s ease-out forwards;
              }
            `}</style>
          </div>
        )}

        <style jsx>{`
          .bg-stripes {
            background-image: repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.1) 0,
              rgba(255, 255, 255, 0.1) 8px,
              transparent 8px,
              transparent 16px
            );
          }

          .animate-stripes {
            animation: stripes 1s linear infinite;
          }

          @keyframes stripes {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 16px 16px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default SeamlessReturnsLogistics;
