import React from "react";
import { Link, useLocation } from "react-router-dom";


const ArrowIcon = () => (
  <div className="flex-shrink-0">
    <div className="w-8 h-8 rounded-full bg-[#00854a]/10 flex items-center justify-center text-[#00854a] transition-all duration-300 group-hover:bg-[#00854a] group-hover:text-[#ffdc52] shadow-sm">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

const ProgramOutcomes = () => {
  const location = useLocation();

  const menu = [
    { id: "vision", label: "Vision and Mission", link: "/vision-mission" },
    { id: "outcomes", label: "Program Outcomes of the Institution", link: "/program-outcomes" },
    { id: "values", label: "Core Values of the Institution", link: "/core-values" },
    { id: "philosophy", label: "Philosophy", link: "/core-beliefs" },
  ];

  const outcomes = [
    {title: 'Engineering Knowledge', content: 'Apply the Knowledge of Mathematics science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.' },
    {title: 'Problem Analysis', content: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusion using first principles of mathematics, natural sciences, and engineering sciences.' },
    {title: 'Design / Development of Solutions', content: 'solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.' },
    {title: 'Conduct Investigations of Complex Problems', content: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of the information to provide valid conclusions.' },
    {title: 'Modern tool Usage', content: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.' },
    {title: 'The Engineer and Society', content: 'Apply reasoning informed by the contextual knowledge to access societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice' },
    {title: 'Environment and Sustainability', content: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.' },
    {title: 'Ethics', content: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.' },
    {title: 'Individual and team work', content: 'Function effectively as a individual, and as a member or leader in diverse teams and the multidisciplinary settings.' },
    {title: 'Communication', content: 'Communicate effectively on the complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.' },
    {title: 'Project Management and finance', content: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and multidisciplinary environments." },
    {title: 'Lifelong Learning', content: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 bg-white min-h-[calc(100vh-200px)]">
      <div className="mb-10 border-b-[3px] border-[#ffdc52] pb-4 flex justify-between items-center">
        <h2 className="text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent inline-block">Program Outcomes of the Institution</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <aside className="w-full lg:w-[320px] lg:min-w-[300px] shrink-0 static lg:sticky lg:top-[100px] border-b-2 lg:border-b-0 lg:border-r-2 border-[#f9fafb] pr-0 lg:pr-8 pb-8 lg:pb-0">
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
          <div>
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">
              Program Outcomes
            </h3>
            <div className="space-y-4 max-w-4xl">
              {outcomes.map((item, idx) => (
                <div key={idx} className="w-full transition-all duration-300 ease-in-out border border-[#ccc] bg-[#f9fafb] rounded-xl overflow-hidden hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] hover:border-[#00854a] hover:bg-white flex items-start text-left p-4 group">
                  <ArrowIcon />
                  <div className="ml-4">
                    <p className="text-gray-700 leading-relaxed text-sm text-justify">
                      <span className="font-bold text-[#00854a]">{item.title}:</span> {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProgramOutcomes;
