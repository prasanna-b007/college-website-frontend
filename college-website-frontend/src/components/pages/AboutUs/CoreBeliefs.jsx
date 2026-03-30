import React from "react";


const ArrowIcon = () => (
  <div className="flex-shrink-0">
    <div className="w-8 h-8 rounded-full bg-[#00854a]/10 flex items-center justify-center text-[#00854a] transition-all duration-300 group-hover:bg-[#00854a] group-hover:text-[#ffdc52] shadow-sm">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);


const CoreBeliefs = () => {
  const beliefs = [
    { text: "Achieving 100% academic success pass for our students is only the ", highlight: "GATEWAY", suffix: " to success" },
    { text: "Breeding 100% employable and entrepreneurial engineers is the first ", highlight: "MILESTONE", suffix: "" },
    { text: "Creating 100% confident citizens who will uphold the pride and cultural ethos of our great nation is our ", highlight: "DESTINATION", suffix: "" },
    { text: "Discipline is the bridge between goals and accomplishment as it provides all the necessary ", highlight: "WILLPOWER", suffix: "" },
    { text: "Education is the most powerful weapon to ", highlight: "CHANGE THE WORLD", suffix: "" }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-white min-h-[calc(100vh-200px)]">
      <div className="mb-10 border-b-[3px] border-[#ffdc52] pb-4 flex justify-between items-center">
        <h2 className="text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent inline-block">Core Beliefs</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <main className="flex-1 w-full min-w-0 space-y-6">
          <div>
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">
              Core Beliefs
            </h3>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="space-y-8 max-w-4xl">
                {beliefs.map((item, idx) => (
                  <div key={idx} className="w-full transition-all duration-300 ease-in-out border border-[#ccc] bg-[#f9fafb] rounded-xl overflow-hidden hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_24px_-8_rgba(0,0,0,0.1)] hover:border-[#00854a] hover:bg-white flex items-center gap-6 p-4 group">
                    <ArrowIcon />
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.text}
                      <span className="text-[#00854a] font-black uppercase tracking-wider underline decoration-[#ffdc52] decoration-4 underline-offset-4">
                        {item.highlight}
                      </span>
                      {item.suffix}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CoreBeliefs;
