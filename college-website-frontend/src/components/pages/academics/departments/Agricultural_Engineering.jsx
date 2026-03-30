import React, { useState } from "react";

const AgriculturalEngineering = () => {
    const [activeTab, setActiveTab ] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Agricultural Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "Curriculum",
        "Feedback"
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "About the Department":
                return (
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-5">
                            <table className="w-[300px] m-0 border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                                <thead>
                                    <tr>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Courses Offered</th>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Intake</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.E - Agricultural Engineering</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">60</td>
                                    </tr>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">M.Tech - Farm Machinery</td>
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">18</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            About the Department
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="mb-4 text-[#585a61]">
                            The department of Agricultural Engineering was started in Sri Shakthi Institute of Engineering and Technology (SSIET), Coimbatore, in 2015. The Chairman, Dr. S Thangavelu, is himself an Agricultural Engineer and a Ph. D. degree holder in Bio Energy from Tamil Nadu Agricultural University (TNAU), Coimbatore, and worked as a faculty for 28 years in TNAU. During the past years, the department has been in the journey with SSIET to fulfil the motto, 'Powering the Youth, Empowering the Nation'. 
                        </p>
                        <p className="mb-4 text-[#585a61]">
                            The department offers B. E. Agriculture Engineering, focussing on widening the practical knowledge of the students thus encouraging them to solve different practical difficulties in small-landholdings. Well-qualified faculty members are the strength of the department. The department constitutes experienced and dedicated faculty and supporting staff members with excellent academic research and industrial work experience to promote research and intervention in the existing methods. 
                        </p>
                        <p className="mb-4 text-[#585a61]">
                            Presently, the faculty consists of experts from farm machinery and power, soil and water conservation engineering, agricultural processing, civil engineering, mechanical engineering, food technology and agriculture. Further, the practical knowledge gained by them during practical field works and industrial visits has been added advantage for new technology and innovations. 
                        </p>
                        <p className="mb-4 text-[#585a61]">
                            The department is new in offering the degree program in the institute. Despite, about 30 students have been graduated during 2019 from the department and are well placed. At present there are 375 students are admitted in the degree program, and the department is envisage more students in the future.
                        </p>
                    </div>
                );
            case "Why Agricultural Engineering at SIET":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            Why Agricultural Engineering at SIET
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <ol className="list-decimal ml-6 space-y-2 text-[#585a61]">
                            <li>The students of all the departments are sent for industrial trainings and also for industrial visits in engineering based companies.</li>
                            <li>The graduates get placements in these industries during their final year.</li>
                            <li>The Department organizes a number of events to build the employability and entrepreneurial traits in our students. "Velan Thiruvizha" – Agri Fest is conducted every year in the campus.</li>
                            <li>MoUs for industrial visit and training with the following reputed organizations for the Department of Agriculture Engineering.</li>
                        </ol>
                    </div>
                );
            case "Unique Facilities":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            Unique Facilities
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <ol className="list-decimal ml-6 space-y-2 text-[#585a61]">
                            <li>The students of all the departments are sent for industrial trainings and also for industrial visits in engineering based companies.</li>
                            <li>The graduates get placements in these industries during their final year.</li>
                            <li>MoUs for industrial visit and training with the following reputed organizations for the Department of Agriculture Engineering.</li>
                            <li>Eminent Professors with more than 30 years of teaching experience.</li>
                            <li>Development of technical skills to make the Innovative Products with option of Patent.</li>
                            <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships.</li>
                        </ol>
                    </div>
                );
            case "Achievements":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            Achievements
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <ol className="list-decimal ml-6 space-y-2 text-[#585a61]">
                            <li>During the past years, the department has organised a number of events to build the employability and entrepreneurial traits in our students.</li>
                            <li>"VelanThiruvizha" – Agri Fest is conducted every year in the campus. Every Year, more than 100 stalls were arranged for the Agri Fest and around 3000 visitors visited the festival.</li>
                            <li>The students are given relevant trainings in national level institutes/ industries. A few of them includes Farm Machinery Testing and Training Institute at Ananthapur and Hisar, The Dhan Foundation at Madurai, Soil and Water Conservation Research Institute at Ooty, Farms of National Seeds Corporation at Raichur, Suratgarh and Hisar, Escorts Training and Development Center at Bengaluru and JCB Training Center at Kovai Road.</li>
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
                            <p className="mt-[10px] italic max-w-[800px] mx-auto text-[#585a61]">
                                Educating and empowering the students to become successful agricultural engineers and entrepreneurs to elicit research capability that applies science and technology to enhance agricultural productivity, farm mechanization, irrigation engineering, conservation of water, energy and post-harvest handling and value addition with a sound knowledge of agricultural principles.
                            </p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-5 mb-[10px] uppercase relative inline-block group w-fit">
                                MISSION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <ul className="list-none p-0">
                            <li className="flex items-start gap-[15px] mb-[15px]">
                                <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.8rem]">M1</span>
                                <p className="m-0 text-[#585a61]">To train and prepare the students with general knowledge and expertise in the fields of agricultural sciences, soil and water conservation, post-harvest technology and agro energy.</p>
                            </li>
                            <li className="flex items-start gap-[15px] mb-[15px]">
                                <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.8rem]">M2</span>
                                <p className="m-0 text-[#585a61]">To set up the required facilities in the laboratories to satisfy the needs of industry and R&D.</p>
                            </li>
                            <li className="flex items-start gap-[15px] mb-[15px]">
                                <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.8rem]">M3</span>
                                <p className="m-0 text-[#585a61]">To build expertise on the different facets of agricultural engineering to make graduates grow as entrepreneurs, scientists, educators and sustainable food production technologists which meet the food needs of the ever-increasing population of our country.</p>
                            </li>
                        </ul>
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
                        <ul className="list-none p-0">
                            {[
                                { id: "PEO1", text: "Acquire basic knowledge required for the industries connected with micro irrigation, tractor manufacture, agricultural machinery manufacture, food processing and water management." },
                                { id: "PEO2", text: "Attain and practice technical skills to pursue higher studies in India and abroad in different disciplines of Agricultural Engineering." },
                                { id: "PEO3", text: "Imbibe practical skills and real time problem solving capabilities to enable them to become entrepreneurs." },
                                { id: "PEO4", text: "Gain sound knowledge in the emerging trends such as IT, IoT, ICT so as to enable them to apply their knowledge in robotics, automation and smart farming systems to achieve higher crop productivity." },
                                { id: "PEO5", text: "Develop confidence for appearing in various competitive examinations such as UPSC, TNPSC and banks examinations so that the students become technocrats and administrators." }
                            ].map((peo) => (
                                <li key={peo.id} className="flex items-start gap-[15px] mb-[15px]">
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem]">{peo.id}</span>
                                    <p className="m-0 text-[#585a61] text-[0.9rem]"><strong>{peo.id}:</strong> {peo.text}</p>
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
                        <ul className="list-none p-0">
                            {[
                                { id: "PSO1", title: "Professional skills", text: "To ensure education necessary to understand agriculture engineering solutions in global and social context to improve agriculture." },
                                { id: "PSO2", title: "Problem solving skills", text: "To have the ability to solve complex problems related to farm mechanization, soil and water conservation, post harvest technology, renewable and non-renewable resource technologies, landscape architecture and modern irrigation techniques." }
                            ].map((pso) => (
                                <li key={pso.id} className="flex items-start gap-[15px] mb-[15px]">
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem]">{pso.id}</span>
                                    <p className="m-0 text-[#585a61] text-[0.9rem]"><strong>{pso.id}:</strong> <strong>{pso.title} :</strong> {pso.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "Curriculum":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                CURRICULUM
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                            <h4 className="text-[#00854a] mt-5">2019 - REGULATION: CURRICULUM & SYLLABI</h4>
                        </div>
                        <div className="flex items-center gap-[15px] cursor-pointer group">
                            <span className="bg-[#00854a] text-white rounded-full w-[30px] h-[30px] flex justify-center items-center transition-transform group-hover:scale-110">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </span>
                            <span className="text-[#585a61] font-bold text-[0.85rem]">REGULATIONS 2019</span>
                        </div>
                    </div>
                );
            case "Feedback":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                FEEDBACK
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <div className="text-[#585a61] text-[0.95rem] space-y-4">
                            <div>
                                <p><strong>• Feedback on Department Vision and Mission</strong></p>
                                <ul className="list-[circle] ml-10 mb-5">
                                    <li>Alumni feedback</li>
                                    <li>Employer feedback</li>
                                    <li>Student Feedback</li>
                                    <li>Industry interaction feedback</li>
                                </ul>
                            </div>
                            <div>
                                <p><strong>• Feedback on Curriculum</strong></p>
                                <ul className="list-[circle] ml-10 mb-5">
                                    <li>Faculty Feedback</li>
                                    <li>Student Feedback</li>
                                    <li>Alumni Feedback</li>
                                    <li>Employer Feedback</li>
                                </ul>
                            </div>
                            <div>
                                <p><strong>• Feedback on POs, PSO Attainment</strong></p>
                                <ul className="list-[circle] ml-10 mb-5">
                                    <li>Alumni Survey</li>
                                    <li>Employer Survey</li>
                                    <li>Exit Feedback</li>
                                </ul>
                            </div>
                        </div>
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
                    AGRICULTURAL ENGINEERING
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

export default AgriculturalEngineering;

