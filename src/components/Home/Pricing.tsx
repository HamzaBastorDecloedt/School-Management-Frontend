import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className=" bg-black text-white px-4 flex flex-col items-center py-30">
      <h2 className="text-2xl md:text-3xl font-serif text-center mb-4">
        Pricing
      </h2>
      <h3 className="text-lg 2xl:text-2xl md:text-xl font-bold mb-6 self-start pl-2 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-22">
        <span className="underline">Flexible Plans for Every Mentor</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        <div className="bg-[#CCCCCC] p-12 text-center">
          <h4 className="text-2xl font-bold text-[#FA9730]">Free Trial:</h4>
          <p className="text-2xl font-semibold">
            Explore Wayo Academy for{" "}
            <span className="text-[#FA9730] font-bold">free</span> for 30 days!
          </p>
        </div>
        <div className="bg-[#CCCCCC] p-12 text-center">
          <h4 className="text-2xl font-bold text-[#FA9730]">Monthly Plan:</h4>
          <p className="text-2xl font-semibold">
            Start at just{" "}
            <span className="text-[#FA9730] font-bold">...AED/month</span> for
            full access to all features
          </p>
        </div>
        <div className="bg-[#CCCCCC] p-4 shadow-md text-center">
          <h4 className="text-2xl font-bold text-[#FA9730] mt-7">
            Yearly Plan:
          </h4>
          <p className="text-2xl font-semibold">
            Save ....% with an annual subscription at{" "}
            <span className="text-[#FA9730] font-bold">....AED/year</span> for
            full access to all features
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
