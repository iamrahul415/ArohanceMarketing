function Overview() {
  return (
    <div className="h-screen flex items-center justify-center text-white mt-20">

      {/* Main container */}
      <div className="w-[90%] max-w-6xl grid grid-cols-1 sm:grid-cols-[50%_50%] gap-6 p-6">
        
        {/* Box 1 */}
        <div className="border border-gray-500/30 bg-white/10 backdrop-blur-md p-10 flex flex-col justify-center items-center text-center rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/30">
          <h3 className="text-2xl mb-2">Team Members</h3>
          <div className="w-40 h-0.5 border-b-4 mt-2 border-gray-200"></div>
          <p className="text-9xl font-semibold">
            9<span className="text-orange-500">+</span>
          </p>
        </div>

        {/* Box 2 */}
        <div className="border border-gray-500/30 bg-white/10 backdrop-blur-md p-10 flex flex-col justify-center items-center text-center rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/30">
          <h3 className="text-2xl mb-2">Repetitive Clients</h3>
          <div className="w-45 h-0.5 border-b-4 mt-2 border-gray-200"></div>
          <p className="text-9xl font-semibold">
            50<span className="text-orange-500">+</span>
          </p>
        </div>
      </div>

      {/* Second row */}
      <div className="w-[90%] max-w-6xl grid grid-cols-1 sm:grid-cols-[50%_50%] gap-6 p-6">
        {/* Box 3 */}
        <div className="border border-gray-500/30 bg-white/10 backdrop-blur-md p-10 flex flex-col justify-center items-center text-center rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/30">
          <h3 className="text-2xl mb-2">Services</h3>
          <div className="w-25 h-0.5 border-b-4 mt-2 border-gray-200"></div>
          <p className="text-9xl font-semibold">
            13<span className="text-orange-500">+</span>
          </p>
        </div>

        {/* Box 4 */}
        <div className="border border-gray-500/30 bg-white/10 backdrop-blur-md p-10 flex flex-col justify-center items-center text-center rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-orange-500/30">
          <h3 className="text-2xl mb-2">Happy Clients Served</h3>
          <div className="w-55 h-0.5 border-b-4 mt-2 border-gray-200"></div>
          <p className="text-9xl font-semibold">
            100<span className="text-orange-500">+</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
