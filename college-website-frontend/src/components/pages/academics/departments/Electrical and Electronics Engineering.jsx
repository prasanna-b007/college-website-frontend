import React, { useState } from "react";



const ElectricalAndElectronicsEngineering = () => {
    const [activeTab, setActiveTab] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Electrical & Electronics Engg. at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "Curriculum",
        "Placements - Key Companies",
        "Student Placements",
        "Newsletter & Magazine",
        "Alumni Corner",
        "Feedback",
    ];


    const renderContent = () => {
        switch (activeTab) {
            case "About the Department":
                return (
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-5">
                            <table className="w-[450px] m-0 border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                                <thead>
                                    <tr>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Courses Offered</th>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Intake</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.E - Electrical and Electronics Engineering</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">60</td>
                                    </tr>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">M.E - Embedded System Technologies</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">18</td>
                                    </tr>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td colSpan="2" className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">Ph.D - Anna University Recognised Research Center</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ABOUT THE DEPARTMENT
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            The Department of Electrical and Electronics Engineering is established in the year 2006 and it acts as a core
                            part of the institute. Our department offers One Bachelor Programme in the stream of Electrical and Electronics
                            Engineering and one Post graduate Programme in the stream of Embedded Systems Technologies respectively.
                        </p>
                    </div>
                );
            case "Why Electrical & Electronics Engg. at SIET":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            WHY ELECTRICAL & ELECTRONICS ENGG. AT SIET
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <div className="text-[#585a61] text-justify leading-relaxed space-y-3">
                            <p>1. Got Permanent Affiliation with ANNA UNIVERSITY</p>
                            <p>2. Accredited by NBA New Delhi</p>
                            <p>3. Has been recognized as Research Center by ANNA UNIVERSITY</p>
                            <p>4. Created strong industrial connection for the students through campus placement, Internships and Industrial visits, value added Courses, Seminars, Guest Lecture and international Conferences with the industrial leaders.</p>
                            <p>5. Eminent Professors with cumulative experience of 100 years in Academy, Research and Industry</p>
                            <p>6. Separate training wing to grab job opportunities in top notch IT, Core and Government Sectors.</p>
                            <p>7. Industry oriented rich curriculum, supported with subject wise industrial visits, exploration labs, skills development courses and internships</p>
                            <p>8. Electrical Engineering application oriented mathematics problems solving for better understanding.</p>
                            <p>9. More than 75 technical articles are published by the faculty members in the top ranked Scopus indexed Journals in the last five years.</p>
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
                            <p>1. Eminent Professors with cumulative experience of 100 years in Academy, Research and Industry</p>
                            <p>2. More than 75 technical articles are published by the faculty members in the top ranked Scopus indexed Journals in the last five years.</p>
                            <p>3. Won awards and honors from Industries such as TAFE, National Instruments, IE, Intel and NASA for innovative students projects</p>
                            <p>4. Industry oriented rich curriculum, supported with subject wise industrial visits, exploration labs, skills development courses and internships</p>
                            <p>5. Students get job opportunities in top notch IT, Core and Government Sectors</p>
                            <p>6. To get Career opportunities in Government organizations like Tamil Nadu Electricity Board (TNEB), Power Grid Corporation, Nuclear / National Thermal Power Corporation, BHEL and Airports Authority of India.</p>
                            <p>7. Funded research projects are carried out</p>
                            <p>8. Reputed industries based Internships is mandatory</p>
                            <p>9. Development of technical skills to make the Innovative Products with option of Patent.</p>
                        </div>
                    </div>
                );
            case "Achievements":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ACHIEVEMENTS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <div className="text-[#585a61] text-justify leading-relaxed space-y-3">
                            <p>1. Got Permanent Affiliation with ANNA UNIVERSITY</p>
                            <p>2. Accredited by NBA New Delhi</p>
                            <p>3. Has been recognized as Research Center by ANNA UNIVERSITY</p>
                            <p>4. 100% Placement achievements</p>
                            <p>5. Created strong industrial connection for the students through campus placement, Internships and Industrial visits, Centre of Excellences, value added Courses, Seminars and international Conferences with the industrial leaders such as ISRO, National Instruments, SIEMENS, Lennox International, ABB, General Electric, Solitron, MAK Controls, TCS, FANUC, FLsmidth, RV machines Tools, PRICOL, Kavin Engineering, ELGI equipments, CRI Pumps, Roots PVT Ltd, Kirloskar Brothers Ltd, Pactron, Skava, Think and Learn (Byju's), Macincons, Aspire Systems, and others</p>
                            <p>6. Our LabVIEW Academy (with Rs 1 Crore Investment) has been recognized as Best Graphical System Design Lab in India by Dr. James Threshod, President, CEO and Co-Founder, NI</p>
                            <p>7. PLC Automation Lab has been established in partnership with SIEMENS</p>
                            <p>8. Our students have secured lucrative Placement offers in CORE & IT Industries</p>
                            <p>9. The students are rightly mentored to CORE, IT, Energy and Government sectors</p>
                            <p>10. 300 KWp On-Grid Solar Power Plant (with Rs 2.5 Crore investment) has been installed to run the entire campus with Green Energy. Our efforts have made the campus to be recognized as the Green campus in the country by WWF</p>
                            <p>11. As an Autonomous Institution with Industry linked curriculum reviewed by the panel of the industrial experts and the eminent professors</p>
                            <p>12. Faculty have rich experience in the areas of power systems, control systems, Power Electronics, Renewable energy, industrial automation, embedded systems and Robotics. More than 100 technical articles and patents are published by the faculty members in the top ranked Scopus indexed and Web of Science and SCI Journals.</p>
                            <p>13. Faculty, research scholars and the students have completed Online Certification Courses offered by NPTEL and other leading MOOC platforms</p>
                            <p>14. Our industry linked students projects such as Railway Gate Automation System, eNano (Nano car was completely converted into Electrical green vehicle), electromagnetic shielding, Healthcare Integration Platform, and Portable Hearing Aid for congenital deaf fetched awards and recognition from Govt. of India, NASA, TAFE, Buoyanci, Intel, National Instruments and others.</p>
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
                                To become the center of excellence in the area of electrical and electronics engineering and technology, and the transmitter of moral values with focus on the development of society and rural masses.
                            </p>
                        </div>
                        <div className="text-center my-[30px] mb-5">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-3 uppercase relative inline-block group w-fit">
                                MISSION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <p className="text-[#585a61] text-justify leading-relaxed mb-4">
                            To achieve the vision, the department will:
                        </p>
                        <ul className="list-none p-0 space-y-4">
                            {[
                                { id: "M1", text: "Equip the students with advanced knowledge in the field of Electrical and Electronics Engineering as well as professional skills necessary to face the challenges of the future." },
                                { id: "M2", text: "Enable students to become responsible citizens of the country with a willingness to serve the society." },
                                { id: "M3", text: "Encourage the Students to engage in research activities leading to innovative applications of technology for the benefit of mankind." }
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
            case "Placements - Key Companies":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                PLACEMENTS - KEY COMPANIES VISITED
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-center uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">List of key companies visited so far for placement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Amazon", "Intel"], ["Byju's", "Rently"], ["Kaar Technologies", "Coding Mart"], ["Embed UR", "Eunimart"],
                                    ["IVTL Infoview", "Ducent IT Solutions"], ["IBM", "Admatic"], ["CTS", "TrueChips"], ["Capgemini", "Max Eye Technologies"],
                                    ["TCS", "Skava Technologies"], ["Aspire Systems", "Ducom Instruments"], ["Seoyon Electronics", "Payoda"],
                                    ["Technosphere India Pvt ltd", "Wipro"], ["Pactron", "Weg Industries"], ["Kalycito", "Mak Control"], ["CRI Pumps", "Zentron"]
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-3.5 px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">{row[0]}</td>
                                        <td className="border-b border-[#f9fafb] py-3.5 px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">{row[1]}</td>
                                    </tr>
                                ))}
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
                        ELECTRICAL AND ELECTRONICS ENGINEERING
                    </h2>
                    <div className="text-[#00854a] text-[0.9rem] font-semibold mt-1">
                        Home / Departments / Electrical and Electronics Engineering
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="w-full lg:w-[30%] lg:sticky lg:top-[100px] lg:border-r-2 lg:border-[#f9fafb] lg:pr-8 mb-8 lg:mb-0 border-b-2 lg:border-b-0 border-[#f9fafb] pb-8 lg:pb-0">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            className={`py-3.5 px-5 cursor-pointer font-bold text-[0.85rem] uppercase transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-xl mb-2.5 border flex items-center gap-3 ${activeTab === tab
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

export default ElectricalAndElectronicsEngineering;
