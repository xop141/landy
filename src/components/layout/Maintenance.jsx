"use client";

const Maintenance = () => {
  return (
    <div className="w-full h-screen text-white font-mono flex flex-col justify-center items-center relative">
      {/* Spinning Cogs */}
      <div className="flex mb-8 items-center">
        {/* Left cog (small, clockwise) */}
        <i className="fas fa-cog text-2xl animate-spin-slow" style={{ transform: "translateY(-0.5rem)" }}></i>
        {/* Center cog (big, counter-clockwise) */}
        <i className="fas fa-cog text-5xl animate-spin-reverse"></i>
        {/* Right cog (medium, clockwise) */}
        <i className="fas fa-cog text-3xl animate-spin-slower" style={{ transform: "translateY(0.5rem)" }}></i>
      </div>

      {/* Titles */}
      <h1 className="text-4xl uppercase mb-4">Under Maintenance</h1>
      

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow { animation: spin-slow 2s linear infinite; }
        .animate-spin-slower { animation: spin-slower 3s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 1.5s linear infinite; }
      `}</style>
    </div>
  );
};

export default Maintenance;
