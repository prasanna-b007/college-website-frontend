import React, { useState } from "react";

const CyberSecurity = () => {
    const [activeTab, setActiveTab] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Cyber Security at SIET",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Unique Facilities",
        "PAC Members",
        "Faculty Profile",
        "Placements",
        "Feedback",
    ];

    const psos = [
        { id: "PSO1", text: "Ethically demonstrate the capability to use standard tools, practices, and technologies to analyze, design, develop, and implement Cybersecurity solutions that are innovative and optimal without compromising privacy needs." },
        { id: "PSO2", text: "Use entrepreneurial skills to combat security risks and software and hardware threats in the computing sector." },
        { id: "PSO3", text: "Ability to do research and development in contemporary issues through cutting edge technologies and bring awareness to the society in the field of cyber security." }
    ];

    const peos = [
        { id: "PEO1", text: "To develop disciplined, high profile, value-added cyber security specialists for lucrative professions in their linked industries that give them international renown." },
        { id: "PEO2", text: "To systematically educate the necessity to understand the impact of cyber crimes and threats with solutions in a global and societal context." },
        { id: "PEO3", text: "To select suitable ethical principles and commit to professional responsibilities and human values and contribute value and wealth for the benefit of the society." }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "About the Department":
                return (
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-5">
                            <table className="w-[350px] m-0 border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                                <thead>
                                    <tr>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Courses Offered</th>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Intake</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.E - Cyber Security</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">120</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ABOUT THE DEPARTMENT
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            Established in 2022, the Computer Science and Engineering (Cyber Security) Department is dedicated to
                            equipping students with specialized knowledge in the rapidly evolving field of cybersecurity. We offer a comprehensive 4-year
                            B.E. Computer Science and Engineering (Cyber Security) program designed to provide both theoretical and practical expertise.
                            Our department boasts a passionate team of faculty members with extensive experience across various cybersecurity
                            domains and features state-of-the-art facilities for hands-on learning and smart classroom experiences.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            As the global demand for cybersecurity professionals continues to soar, our graduates are well-positioned to take
                            advantage of a thriving job market. The intersection of cybersecurity with fields like AI and data science further enhances
                            career prospects, providing students with numerous opportunities for rewarding and dynamic career growth.
                        </p>
                    </div>
                );
            case "Why Cyber Security at SIET":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            WHY CYBER SECURITY AT SIET
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <div className="text-[#585a61] text-justify leading-relaxed space-y-3">
                            <p>1. 100% Placement every year.</p>
                            <p>2. Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships.</p>
                        </div>
                    </div>
                );
            case "Unique Facilities":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            UNIQUE FACILITIES
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <div className="text-[#585a61] text-justify leading-relaxed space-y-3">
                            <p>1. Using online platform for Programming Practice.</p>
                            <p>2. Industry Training for faculty members.</p>
                            <p>3. Certification Courses with industry Collaboration - Software Testing with Virtusa and Data Analytics with Duccen.</p>
                        </div>
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
                            <p className="text-[#585a61] text-justify leading-relaxed">
                                To be a globally recognized center of excellence in cybersecurity education and research, empowered to provide cutting-edge solutions for the digital world.
                            </p>
                        </div>
                        <div className="text-center my-[30px] mb-5">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-3 uppercase relative inline-block group w-fit">
                                MISSION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <ul className="list-none p-0 space-y-4">
                            {[
                                { id: "M1", text: "To provide state-of-the-art infrastructure and resources for excellence in cybersecurity education." },
                                { id: "M2", text: "To foster industry-academic collaborations for practical training and research." },
                                { id: "M3", text: "To impart ethical values and professionalism in safeguarding the digital ecosystem." }
                            ].map((mission) => (
                                <li key={mission.id} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem]">{mission.id}</span>
                                    <p className="m-0 text-[#585a61] leading-relaxed">{mission.text}</p>
                                </li>
                            ))}
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
                        <ul className="list-none p-0 space-y-4">
                            {peos.map((peo) => (
                                <li key={peo.id} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem] transition-transform hover:scale-110">{peo.id}</span>
                                    <p className="m-0 text-[#585a61] text-[0.9rem] leading-relaxed"><strong>{peo.id}:</strong> {peo.text}</p>
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
                                    <p className="m-0 text-[#585a61] text-[0.9rem] leading-relaxed"><strong>{pso.id}:</strong> {pso.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "PAC Members":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                PAC MEMBERS
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th scope="col" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-center uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">S.No</th>
                                    <th scope="col" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Name</th>
                                    <th scope="col" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Designation</th>
                                    <th scope="col" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                    <td colSpan="4" className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">Member details will be updated soon.</td>
                                </tr>
                            </tbody>
                        </table>
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
                <div className="flex flex-col">
                    <h2 className="text-[#00854a] text-[1.8rem] font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent">
                        CYBER SECURITY
                    </h2>
                    <div className="text-[#00854a] text-[0.9rem] font-semibold mt-1">
                        Home / Departments / Cyber Security
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="w-full lg:w-[30%] lg:sticky lg:top-[100px] lg:border-r-2 lg:border-[#f9fafb] lg:pr-8 mb-8 lg:mb-0 border-b-2 lg:border-b-0 border-[#f9fafb] pb-8 lg:pb-0">
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

                <div className="flex-1 w-full lg:w-[70%]">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default CyberSecurity;
