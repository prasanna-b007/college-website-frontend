import React, { useState } from "react";

const CivilEngineering = () => {
    const [activeTab, setActiveTab ] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Civil Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "Curriculum",
        "Placements",
    ];

    const peos = [
        { id: "PEO1", text: "To develop students for successful careers in reinforced concrete elements field that meets the needs of Indian and multinational companies." },
        { id: "PEO2", text: "To develop the confidence and ability among students to synthesize data and technical concepts and thereby apply it in real world problems." },
        { id: "PEO3", text: "To promote students to use modern techniques, skill and mathematical engineering tools for solving problems in reinforced concrete elements." },
        { id: "PEO4", text: "To achieve students with a sound foundation in mathematical , scientific and engineering fundamentals necessary to formulate, solve and analyse engineering problems and to prepare them for graduate studies." },
        { id: "PEO5", text: "To function students to work collaboratively on multi-disciplinary projects and make them engage in life-long learning process throughout their professional life." }
    ];

    const psos = [
        { id: "PSO1", text: "The board education is necessary to understand the civil engineering solution in global and social context to improve the construction industry." },
        { id: "PSO2", text: "An ability to solve complex survey related Civil Engineering using problem GPS, GIS." },
        { id: "PSO3", text: "Understanding of social awareness and environment necessity along with ethical responsibility to have a successful career and to zeal for real world application using optimum resource and to become an entrepreneur." }
    ];

    const studentAchievements = [
        { name: "Swathi", year: "1st year", type: "Sports", details: "4*100 Relay Gold / 200M Gold" },
        { name: "Rangaraj", year: "1st year", type: "Sports", details: "Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners" },
        { name: "Manikandan", year: "1st year", type: "Sports", details: "Karate - Open nationals gold / national gold" },
        { name: "Thirumoorthy", year: "1st year", type: "Sports", details: "Karate - Open nationals gold / national gold" },
        { name: "Prakash", year: "1st year", type: "Sports", details: "Volleyball - Zonal Winners / Centies Winners" },
        { name: "Dinakar Pandiyan.R", year: "2nd Year", type: "Sports", details: "Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners" },
        { name: "Mithun.M", year: "2nd Year", type: "Sports", details: "Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners" },
        { name: "Sanjay.A", year: "2nd Year", type: "Sports", details: "Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners" },
        { name: "Raja.G", year: "2nd Year", type: "Sports", details: "Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners" },
        { name: "Sethupathi.M", year: "2nd Year", type: "Sports", details: "Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners" },
        { name: "mohanapriya and team", year: "IV year", type: "co-curriculum", details: "won 2nd prize in cube contest conducted by VIT campus" }
    ];

    const placements2015 = [
        { name: "J.Aakash", org: "Serco/MP Integrated Roofing" },
        { name: "M.A.ABDULLAH", org: "MP Integrated Roofing" },
        { name: "S. Angelin Mary", org: "Purple Cryon Studios" },
        { name: "V.CHANDRU", org: "MP Integrated Roofing" },
        { name: "R DINESH KUMAAR", org: "MP Integrated Roofing" },
        { name: "P.DURGASHREE", org: "Purple Cryon Studios" },
        { name: "C.Govindaraj", org: "MP Integrated Roofing" },
        { name: "S.Gunasuresh", org: "MP Integrated Roofing" },
        { name: "R.HARIKRISHNAN", org: "MP Integrated Roofing" },
        { name: "C.Logeshkumar", org: "MP Integrated Roofing" },
        { name: "M.MOHANASUNDHARI", org: "Shanavaz Associates" },
        { name: "V.R.Naveen Kumar", org: "Serco/MP Integrated Roofing" },
        { name: "N.Naveena", org: "Kaaveen's" },
        { name: "N.Praveen", org: "MP Integrated Roofing" },
        { name: "J.SANGAMITHRA", org: "Shanavaz Associates" },
        { name: "R.VISHNU", org: "MP Integrated Roofing" },
        { name: "M.Anusuyadevi", org: "Shanavaz Associates" },
        { name: "G.Mukil Kumar", org: "MP Integrated Roofing" },
        { name: "J.Ramkumar", org: "DiCstello" },
        { name: "J.Seyon Raja", org: "MP Integrated Roofing" },
        { name: "J.Vivek", org: "MP Integrated Roofing" }
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
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.E - Civil Engineering</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">60</td>
                                    </tr>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">M.E - Structural Engineering</td>
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
                            The department of Civil Engineering graduates will have a mastery of fundamental knowledge, problem
                            solving skills, engineering experimental abilities, and design capabilities necessary for entering
                            civil engineering career and/or graduate school. To produce graduates that have the knowledge and
                            skills necessary for identifying and assessing design alternatives and the related social, economic,
                            environmental, and public safety impacts.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            Civil engineering includes the planning, design, construction, maintenance, and operation of large and
                            permanent engineering projects of our civilization. Civil engineers are in demand wherever there are
                            people. The major subdivisions of civil engineering are structural, geotechnical, environmental,
                            sanitary, water resources, and transportation engineering.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            The civil engineer is responsible for such projects as bridges and large buildings, dams, and other
                            river and harbor work, municipal water supply and sanitation facilities, streets, highways, and other
                            transportation facilities. On many projects, civil engineers work in close cooperation with engineers
                            and scientists from other fields.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            The department is organizing various Value added courses like Auto CAD, Ansys, Nastron, Staad. The
                            department has got regular industrial visits and In plant Training Program's.
                        </p>
                    </div>
                );
            case "Why Civil Engineering at SIET":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            WHY CIVIL ENGINEERING AT SIET
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61] text-justify leading-relaxed">
                            Sri Shakthi Institute of Engineering and Technology has been ranked one among the top most Engineering Colleges across India in terms of Placements and other remarkable achievements. Its been ranked TOP 10 Civil Engineering Institutions in India by Higher Education Review 2019. 100% Placement record since 2014.
                        </p>
                    </div>
                );
            case "Unique Facilities":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            UNIQUE FACILITIES
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61] text-justify leading-relaxed">
                            Wide range of employment opportunities for Civil Engineering students as like in PWD, highway divisions, TWAD board, Railway division, Pollution board, Housing Board, TANGEDCO, BHEL, Indian Oil, NTCP, BSNL, etc.,. Civil Engineers also have a vast opportunity in design sector for steel and concrete structures. More number of Civil Engineers are required in abroad also.
                        </p>
                    </div>
                );
            case "Achievements":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ACHIEVEMENTS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61] mb-6 text-justify leading-relaxed">
                            Two patents were filed in field of construction and building materials.
                        </p>
                        <h4 className="text-[#00854a] text-xl font-bold mb-4 uppercase">STUDENTS ACHIEVEMENTS</h4>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">STUDENT NAME</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">YEAR</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">ACADEMIC / SPORTS</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">DETAILS OF ACHIEVEMENT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentAchievements.map((ach, idx) => (
                                    <tr key={idx} className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">{ach.name}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">{ach.year}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">{ach.type}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-justify">{ach.details}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                            <p className="text-[#585a61] text-center italic max-w-[900px] mx-auto my-2.5 leading-relaxed">
                                The Civil Engineering Department will excel in undergraduate and graduate instruction, in research in all sub-areas of civil engineering, and in service to the public consistent with the land-grant mission of the college. The Department will make significant contributions to the economic development of the state, region and nation.
                            </p>
                        </div>
                        <div className="text-center mb-[30px] mt-6">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                MISSION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <p className="text-[#585a61] text-justify leading-relaxed mb-4">
                            The mission of the Department of Civil Engineering is to provide quality education to prepare nationally competitive undergraduate students for a successful career in civil engineering; to provide advanced skills and knowledge in state-of-the-art research and design in sub-areas of civil engineering for graduate students; and to provide service to the engineering profession, and the public.
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
            case "Placements":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                PLACEMENTS
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <h4 className="text-[#00854a] text-xl font-bold mb-4 uppercase text-center">2015 Batch</h4>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th width="50%" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Student Name</th>
                                    <th width="50%" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Organization</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placements2015.map((p, idx) => (
                                    <tr key={idx} className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">{p.name}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">{p.org}</td>
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
                <h2 className="text-[#00854a] text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent">
                   CIVIL ENGINEERING
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

export default CivilEngineering;
