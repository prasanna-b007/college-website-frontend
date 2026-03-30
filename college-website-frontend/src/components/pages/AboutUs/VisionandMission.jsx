import React from "react";
import { Link, useLocation } from "react-router-dom";


const ArrowIcon = () => (
  <div className="flex-shrink-0 mt-1">
    <div className="w-5 h-5 bg-[#00854a] rounded-full flex items-center justify-center text-[#ffdc52] text-[10px]">
      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

const VisionandMission = () => {
  const location = useLocation();

  const menu = [
    { id: "vision", label: "Vision and Mission", link: "/vision-mission" },
    { id: "outcomes", label: "Program Outcomes of the Institution", link: "/program-outcomes" },
    { id: "values", label: "Core Values of the Institution", link: "/core-values" },
    { id: "philosophy", label: "Philosophy", link: "/core-beliefs" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-white min-h-[calc(100vh-200px)]">
      <div id="about" className="mb-10 border-b-[3px] border-[#ffdc52] pb-4 flex justify-between items-center">
        <h2 className="text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent inline-block">Vision and Mission</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <aside className="w-full lg:w-[320px] lg:min-w-[300px] shrink-0 static lg:sticky lg:top-[120px] border-b-2 lg:border-b-0 lg:border-r-2 border-[#f9fafb] pr-0 lg:pr-8 pb-8 lg:pb-0">
          {menu.map((item) => (
            <Link
               key={item.id}
               to={item.link}
               className={`px-5 py-[14px] cursor-pointer text-[#00854a] font-bold text-sm uppercase transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-xl mb-2.5 border border-transparent flex items-center gap-3 no-underline relative overflow-hidden hover:bg-[#00854a]/[0.04] hover:text-[#06864B] hover:translate-x-2 hover:border-[#00854a]/10 [&.active]:bg-[#00854a] [&.active]:text-[#ffdc52] [&.active]:border-[#00854a] [&.active]:shadow-[0_8px_20px_-6px_rgba(0,133,74,0.4)] [&.active]:scale-105 [&.active]:translate-x-1 ${location.pathname === item.link ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </aside>

        <main className="flex-1 w-full lg:w-3/4 min-w-0 space-y-6">
          <div className="scroll-mt-32">
            <h3 id="vision" className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Vision</h3>
            <p className="text-gray-700 leading-relaxed text-base text-justify bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm italic mb-12">
              To make the institution one of our nation's great engineering schools, recognized nationally and internationally for excellence in teaching, research and public service. We seek to be the preferred destination for students, practitioners seeking an engineering education, employers hiring engineering graduates and organizations seeking engineering knowledge.
            </p>

            <h3 id="mission" className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Mission</h3>
            <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm mb-12">
              <ArrowIcon />
              <p className="ml-4 text-gray-700 leading-relaxed text-base text-justify">
                To Provide an encouraging environment to develop the intellectual capacity, critical thinking, creativity and problem solving ability of the students.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VisionandMission;
