import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-700 overflow-hidden">
      {/* Decorative Christmas Lights */}
      <div className="absolute top-0 left-0 w-full h-12 opacity-90">
        <svg className="w-full h-full" viewBox="0 0 1920 48">
          <path d="M0,24 Q48,8 96,24 T192,24 T288,24 T384,24 T480,24 T576,24 T672,24 T768,24 T864,24 T960,24 T1056,24 T1152,24 T1248,24 T1344,24 T1440,24 T1536,24 T1632,24 T1728,24 T1824,24 T1920,24" 
                stroke="#333" strokeWidth="2" fill="none"/>
          {[...Array(20)].map((_, i) => (
            <g key={i} transform={`translate(${i * 96 + 48}, 24)`}>
              <circle cx="0" cy="0" r="8" fill={['#ff3366', '#3366ff', '#ffff33', '#ffffff', '#33ff66'][i % 5]} opacity="0.9"/>
              <circle cx="0" cy="0" r="6" fill={['#ff6699', '#6699ff', '#ffff66', '#f0f0f0', '#66ff99'][i % 5]} opacity="0.7"/>
            </g>
          ))}
        </svg>
      </div>

      {/* Snowflakes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 8}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Stars */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2">
        <div className="text-yellow-400 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>⭐</div>
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-yellow-600 mx-auto"></div>
      </div>

      <div className="absolute right-[15%] top-1/2 -translate-y-1/2">
        <div className="text-yellow-400 text-6xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>⭐</div>
        <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-yellow-600 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-20 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white italic" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.3)' }}>
            Flipkart
          </h2>
          <div className="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center transform rotate-12">
            <span className="text-[#2874f0] text-4xl font-bold italic">f</span>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-2" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.4)' }}>
          CHRISTMAS
        </h1>
        <p className="text-2xl text-white font-semibold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          MEGA SALE
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;