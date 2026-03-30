import React, { useState } from "react";

const ArtificialIntelligenceAndMachineLearning = () => {
    const [activeTab, setActiveTab ] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Artificial Intelligence and Machine Learning at SIET",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Programme Outcomes",
        "Faculty Profile",
        "PAC Members"
    ];

    const peos = [
        { id: "PEO1", title: "Foundation in Core Concepts", text: "Graduates will possess a strong foundation in mathematics, computer science, and artificial intelligence, enabling them to understand and solve complex technical problems." },
        { id: "PEO2", title: "Proficiency in AI & ML Techniques", text: "Graduates will be proficient in the application of AI and ML techniques and tools and create innovative solutions." },
        { id: "PEO3", title: "Research and Development", text: "Graduates will be prepared to engage in research and development activities, while understanding the ethical, societal, and environmental impacts of AI and ML technologies." },
        { id: "PEO4", title: "Lifelong Learning and Professional Growth", text: "Graduates will engage in lifelong learning through professional development, higher education, and participation in professional communities to stay abreast of emerging technologies and methodologies in AI and ML." },
        { id: "PEO5", title: "Leadership and Teamwork", text: "Graduates will develop leadership qualities and teamwork skills, will be equipped with entrepreneurial skills and knowledge, enabling them to create startups and contribute to the economic growth by leveraging AI and ML technologies." }
    ];

    const psos = [
        { id: "PSO1", title: "AI Problem Solvers", text: "Apply knowledge of mathematics, statistics, and domain-specific concepts in the design, development and evaluation of the machine learning models and algorithms that effectively solve future real world challenges" },
        { id: "PSO2", title: "AI System Developers", text: "Design and implement systems that act intelligently and learn from experience by leveraging a variety of programming languages, frameworks and modern Software tools by adhering to ethical and legal standards in AI development." },
        { id: "PSO3", title: "AI Innovators and Researchers", text: "Effectively communicate and collaborate with diverse teams and contribute to the transfer of AI research innovations into practical applications." }
    ];

    const pos = [
        { id: "PO1", title: "Engineering Knowledge", text: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
        { id: "PO2", title: "Problem Analysis", text: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
        { id: "PO3", title: "Design/Development of Solutions", text: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
        { id: "PO4", title: "Conduct Investigations of Complex Problems", text: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
        { id: "PO5", title: "Modern Tool Usage", text: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
        { id: "PO6", title: "The Engineer and Society", text: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
        { id: "PO7", title: "Environment and Sustainability", text: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
        { id: "PO8", title: "Ethics", text: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
        { id: "PO9", title: "Individual and Team Work", text: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
        { id: "PO10", title: "Communication", text: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
        { id: "PO11", title: "Project Management and Finance", text: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
        { id: "PO12", title: "Life-long Learning", text: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
    ];


    const renderContent = () => {
        switch (activeTab) {
            case "About the Department":
                return (
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-5">
                            <table className="w-[400px] m-0 border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                                <thead>
                                    <tr>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Courses Offered</th>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Intake</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.Tech - Artificial Intelligence and Machine Learning</td>
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">120</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ABOUT THE DEPARTMENT
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="mb-4 text-[#585a61] leading-relaxed">
                            Artificial Intelligence and Machine Learning was established in 2021 with the aim of enabling students to acquire specialized knowledge. This Department offers a 4 year B.Tech (Artificial Intelligence and Machine Learning) Programme. It has a heartfelt team of dedicated faculty members with a sound knowledge in various areas and has the state-of-art facilities for various laboratories and supports smart class learning.
                        </p>
                        <p className="mb-4 text-[#585a61] leading-relaxed">
                            Becoming an expert in AI will enable you to challenge current ways of working and change the way you perceive most things. Highlighting yourself as someone who strives for positive change, as well as an eagerness to learn the latest technologies could take you a long way in your career.
                        </p>
                    </div>
                );
            case "Why Artificial Intelligence and Machine Learning at SIET":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            WHY ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING AT SIET
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <ol className="list-decimal ml-6 space-y-3 text-[#585a61] leading-relaxed">
                            <li>100% Placement every year</li>
                            <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
                        </ol>
                    </div>
                );
            case "Vision & Mission":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                VISION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                            <p className="mt-[10px] italic max-w-[900px] mx-auto text-[#585a61] leading-relaxed text-center">
                                To be a distinguished engineering school renowned for its exceptional teaching, groundbreaking research, and impactful public service initiatives and be a sought-after hub of expertise in Artificial Intelligence and Machine Learning.
                            </p>
                        </div>
                        <div className="text-center mb-5">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-3 uppercase relative inline-block group w-fit">
                                MISSION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <p className="text-[#585a61] leading-relaxed text-justify">
                            To create an empowering environment where intellectual capacity, critical thinking, creativity, and problem-solving abilities of students are nurtured, ensuring their preparedness to thrive in the transformative fields of Artificial Intelligence and Machine Learning. Being committed to instilling these vital skills while upholding the highest ethical standards, enabling students to become innovative contributors to advancement of society.
                        </p>
                    </div>
                );
            case "Programme Educational Objectives":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                PROGRAMME EDUCATIONAL OBJECTIVES
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <ul className="list-none p-0 space-y-4">
                            {peos.map((peo) => (
                                <li key={peo.id} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem] transition-transform hover:scale-110">{peo.id}</span>
                                    <p className="m-0 text-[#585a61] text-[0.9rem] leading-relaxed"><strong>{peo.id}:{peo.title}:</strong> {peo.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "Programme Specific Outcomes":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                PROGRAMME SPECIFIC OUTCOMES
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <ul className="list-none p-0 space-y-4">
                            {psos.map((pso) => (
                                <li key={pso.id} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem] transition-transform hover:scale-110">{pso.id}</span>
                                    <p className="m-0 text-[#585a61] text-[0.9rem] leading-relaxed"><strong>{pso.id}:{pso.title}:</strong> {pso.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "Programme Outcomes":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                PROGRAMME OUTCOMES
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <ul className="list-none p-0 space-y-4">
                            {pos.map((po) => (
                                <li key={po.id} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem] transition-transform hover:scale-110">{po.id}</span>
                                    <p className="m-0 text-[#585a61] text-[0.9rem] leading-relaxed"><strong>{po.id}:{po.title}:</strong> {po.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            {activeTab}
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61]">Content for {activeTab} will be updated soon.</p>
                    </div>
                );
        }
    };

    return (
        <div className="max-w-[1280px] mx-auto py-12 px-6 bg-white min-h-[calc(100vh-200px)]">
            <div className="mb-10 border-b-[3px] border-[#ffdc52] pb-4 flex justify-between items-center">
                <h2 className="text-[#00854a] text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent">
                    ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="w-full lg:w-1/4 lg:sticky lg:top-[100px] lg:border-r-2 lg:border-[#f9fafb] lg:pr-8 mb-8 lg:mb-0 border-b-2 lg:border-b-0 border-[#f9fafb] pb-8 lg:pb-0">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            className={`py-3.5 px-5 cursor-pointer font-bold text-[0.85rem] uppercase transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-xl mb-2.5 border flex items-center gap-3 ${
                                activeTab === tab 
                                ? "bg-[#00854a] text-[#ffdc52] border-[#00854a] shadow-[0_8px_20px_-6px_rgba(0,133,74,0.4)] scale-105 translate-x-1" 
                                : "text-[#00854a] border-transparent hover:bg-[#00854a]/[0.04] hover:text-[#06864B] hover:translate-x-2 hover:border-[#00854a]/[0.1]"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                <div className="flex-1 w-full lg:w-3/4">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default ArtificialIntelligenceAndMachineLearning;

