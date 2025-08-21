import React from "react";

function Overview() {
  return (
    <div className="relative w-[90%] text-white  border border-opacity-20  bg-transparent m-15">
      {/* Overlay */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[60%_40%] gap-4 p-8">
        
        {/* Box 1 */}
        <div className="border border-gray-500 bg-black/10 backdrop-blur-sm p-10 flex flex-col justify-center">
          <h3 className="text-2xl mb-2">Team Members</h3>
          <p className="text-9xl font-semibold">9
            <span className="text-orange-500">+</span>
            </p>
        </div>

        {/* Box 2 */}
        <div className="border border-gray-500 bg-black/10 backdrop-blur-sm p-10 flex flex-col justify-center">
          <h3 className="text-2xl mb-2">Repetitive Clients</h3>
          <p className="text-9xl font-semibold">50
            <span className="text-orange-500">+</span>
            </p>
        </div>

        {/* Box 3 */}
        <div className="border border-gray-500 bg-black/10 backdrop-blur-sm p-10 flex flex-col justify-center">
          <h3 className="text-2xl mb-2">Services</h3>
          <p className="text-9xl font-semibold ">13
            <span className="text-orange-500">+</span>
            </p>
        </div>

        {/* Box 4 */}
        <div className="border border-gray-500 bg-black/10 backdrop-blur-sm p-10 flex flex-col justify-center">
          <h3 className="text-2xl mb-2">Happy Clients Served</h3>
          <p className="text-9xl font-semibold">100
            <span className="text-orange-500">+</span>
            </p>
         </div>

      </div>
    </div>
  );
}

export default Overview;

