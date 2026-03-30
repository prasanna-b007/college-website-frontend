import React, { useState } from "react";

const FoodTechnology = () => {
    const [activeTab, setActiveTab ] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Food Technology at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Consultancy",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements",
    ];

    const peos = [
        { id: "PEO1", text: "Graduates will be able to identify, analyze and solve the problems in food product and process development." },
        { id: "PEO2", text: "Graduates will be able to identify and control hazards in food bioprocess industries." },
        { id: "PEO3", text: "Graduates will be able to apply modern computational, and analytical tools and TECHNIQUES to address challenges in Food industry." },
        { id: "PEO4", text: "Graduates will be able to pursue life-long learning as a means of enhancing the knowledge base and skills for professional advancements." },
        { id: "PEO5", text: "Graduates will be able to communicate effectively and demonstrate and impart entrepreneurial and leadership skills." }
    ];

    const psos = [
        { id: "PSO1", text: "Professional Skills: The ability to understand, analyze and formulate ways to process, preserve, package, or store food, according to industrial requirements." },
        { id: "PSO2", text: "Problem Solving Skills: The ability to apply standard practices and rules in developing the food and allied products." },
        { id: "PSO3", text: "Career and Entrepreneurship: The ability to employ modern technologies to produce new or value added products in the area of food process Engineering / Food Technology." }
    ];

    const studentAchievements = [
        { name: "KEERTHANA, HISHAM, MOHAMMED THANVEER, YASIR AHAMMED P.T", year: "2018-2019", type: "ACADEMIC", details: "FINALIST - DUPOINT NUTRI SCHOLAR AWARD 2018" },
        { name: "AAKASH", year: "2018-2019", type: "SPORTS", details: "THIRD PLACE IN ANNA UNIVERSITY ZONAL - BALL BADMINTON" },
        { name: "AAKASH", year: "2018-2019", type: "SPORTS", details: "SECOND PLACE KPR TROPHY - BALL BADMINTON" },
        { name: "GOKULA KRISHNAN M", year: "2018-2019", type: "SPORTS", details: "SECOND PLACE HINDUSTAN HOCKEY ALUMIN MEET" },
        { name: "GOKULA KRISHNAN M", year: "2018-2019", type: "SPORTS", details: "THIRD PLACE IN ANNA UNIVERSITY ZONAL - HOCKEY" },
        { name: "DEVANAND R", year: "2018-2019", type: "SPORTS", details: "RUNNERS THIRD PLACE IN ANNA UNIVERSITY ZONAL - BASKETBALL" },
        { name: "DEVANAND R", year: "2017-2018", type: "SPORTS", details: "RUNNERS THIRD PLACE IN ANNA UNIVERSITY ZONAL - BASKETBALL" },
        { name: "DEVANAND R", year: "2017-2018", type: "SPORTS", details: "RUNNERS THIRD PLACE IN CENTIES CHAMPIONSHIP 2019 - BASKETBALL" },
        { name: "RAJ S VIRANI", year: "2018-2019", type: "SPORTS", details: "THIRD PLACE IN CENTIES TOURNAMENT BASKETBALL" },
        { name: "PRIYADHARSHINI S R", year: "2018-2019", type: "SPORTS", details: "FIRST PLACE COVAI TIE SCHESS" },
        { name: "ALVIN K.J.", year: "2018-2019", type: "SPORTS", details: "THIRD PLACE IN ANNA UNIVERSITY ZONAL 9 VOLLEY BALL" },
        { name: "G.SOUNRARAJAN", year: "2018-2019", type: "SPORTS", details: "THIRD PLACE IN COVAI TIE SCHESS CHESS-MEN" }
    ];

    const consultancyData = [
        { sno: 1, param: "Moisture analysis", chargeStudents: "200/-", chargeOthers: "250/-" },
        { sno: 2, param: "Carbohydrate analysis", chargeStudents: "2000/-", chargeOthers: "2500/-" },
        { sno: 3, param: "Protein analysis", chargeStudents: "1000/-", chargeOthers: "1500/" },
        { sno: 4, param: "Fat analysis", chargeStudents: "500/-", chargeOthers: "700/-" },
        { sno: 5, param: "Fiber analysis", chargeStudents: "1500/-", chargeOthers: "2000/-" },
        { sno: 6, param: "Vitamin C analysis", chargeStudents: "800/-", chargeOthers: "1000/-" },
        { sno: 7, param: "Gluten", chargeStudents: "200/-", chargeOthers: "250/-" },
        { sno: 8, param: "Microbial analysis", chargeStudents: "1000/-", chargeOthers: "1500/-" },
        { sno: 9, param: "Enumeration, Isolation & Characterization", chargeStudents: "1000/-", chargeOthers: "2000/-" },
        { sno: 10, param: "Measuring Antioxidant activity", chargeStudents: "1000/-", chargeOthers: "1500/-" },
        { sno: 11, param: "Detection of adulterant (Color, Emulsifier, Stabilizer, MSG)", chargeStudents: "700/-", chargeOthers: "1000/-" },
        { sno: 12, param: "Detection of Preservatives (SO2)", chargeStudents: "200/-", chargeOthers: "300/-" },
        { sno: 13, param: "Acidity/Alkalinity analysis of samples", chargeStudents: "200/-", chargeOthers: "300/-" },
        { sno: 14, param: "TDS analysis of water samples", chargeStudents: "500/-", chargeOthers: "750/-" },
        { sno: 15, param: "Optical rotation", chargeStudents: "350/-", chargeOthers: "500/-" }
    ];

    const keyCompanies = [
        "Admatic", "VilFresh", "PULSUS", "ITC Foods Business Division", "Mayilmark", "Oror Flavours and Chenicals Pvt Ltd", "Accelor", "Aachi Masala", "Baladna Foods, Qatar, UAE"
    ];

    const whyPoints = [
        "Eminent teaching Faculty with experience in Academics, Research and Industry",
        "More than 10 technical articles are published by the faculty members in the top ranked scopus indexed Journals.",
        "Industry oriented rich curriculum, supported with subject wise industrial visits, exploration labs, skill development courses and internships",
        "Every year November an international conference is conducted providing a platform for the students and the faculty of the department to interact with the global researchers, which provides them an insight to the professional expertise and imbibe innovative research skills.",
        "Well equipped spacious laboratories to ideate, innovate and implement professional skills."
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
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.Tech - Food Technology</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">60</td>
                                    </tr>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">M.Tech - Food Technology</td>
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">18</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ABOUT THE DEPARTMENT
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            The Department of Food Technology was initiated in the year 2016 with a progressive initiative to raise the curtains of the world of foods and to impart professional knowledge in various areas of Food Processing, Preservation and sustainable availability of safe food globally. Food Technology has been identified as the sunrise industry due to its enormous impact & significance in the Indian economy. B.Tech in Food Technology is a 4-year professional course and an Engineering program which trains students in the technical concepts of Food Process Engineering, Food Analysis, Food Safety and regulations, Crop Processing Technology and Packaging. It is an industry-oriented course that trains students for handling roles in food manufacturing, food processing, food process equipment design as well as to conduct research in quality control laboratories.
                        </p>
                    </div>
                );
            case "Why Food Technology at SIET":
            case "Unique Facilities":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            {activeTab.toUpperCase()}
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <ul className="list-none p-0 space-y-4">
                            {whyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[25px] min-w-[25px] h-[25px] flex justify-center items-center font-bold text-[0.7rem]">{idx + 1}</span>
                                    <p className="m-0 text-[#585a61] text-justify leading-relaxed">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "Achievements":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ACHIEVEMENTS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">STUDENT NAME</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">ACADEMIC YEAR</th>
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
                            <p className="text-[#585a61] text-justify italic max-w-[900px] mx-auto my-2.5 leading-relaxed">
                                To facilitate transformation of students to morally sound, professionally outstanding technocrats, entrepreneurs and researchers involved in the improvement of quality and safety by processing and preserving foods and upgrading the nutritional and economic status of the countrymen by serving the rural community and the general public.
                            </p>
                        </div>
                        <div className="text-center mb-[30px] mt-6">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                MISSION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                            <p className="text-[#585a61] text-justify italic max-w-[900px] mx-auto my-2.5 leading-relaxed">
                                To provide leadership in areas of education, research, innovations and solutions in Food Technology to direct overall activity towards economic growth of the country.
                            </p>
                        </div>
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
            case "Consultancy":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            CONSULTANCY - FOOD SAMPLE ANALYSIS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61] mb-6 leading-relaxed">The following parameters can be analysis from food samples.</p>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">S.No.</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Parameters</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Charges in Rs. (Students)</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Charges in Rs. (Others)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consultancyData.map((item) => (
                                    <tr key={item.sno} className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">{item.sno}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">{item.param}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">{item.chargeStudents}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">{item.chargeOthers}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "PAC Members":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            PAC MEMBERS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-center uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">S.No</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Name</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Designation</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* To be populated from database */}
                            </tbody>
                        </table>
                    </div>
                );
            case "Faculty Profile":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            FACULTY PROFILE
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61]">Content for Faculty Profile will be updated soon.</p>
                    </div>
                );
            case "Curriculum":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            CURRICULUM
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61]">Information coming soon...</p>
                    </div>
                );
            case "Placements":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            PLACEMENTS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61] mb-6 leading-relaxed">First batch yet to graduate.</p>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-center uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">List of key companies visited so far for placement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: Math.ceil(keyCompanies.length / 2) }).map((_, i) => (
                                    <tr key={i} className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] w-1/2">{keyCompanies[i * 2]}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] w-1/2">{keyCompanies[i * 2 + 1] || ""}</td>
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
                        </h3>
                        <p className="text-[#585a61]">Content for {activeTab} will be updated soon.</p>
                    </div>
                );
        }
    };

    return (
        <div className="max-w-[1280px] mx-auto py-12 px-6 bg-white min-h-[calc(100vh-200px)]">
            <div className="mb-10 border-b-[3px] border-[#ffdc52] pb-4">
                <h2 className="text-[#00854a] text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent">
                    FOOD TECHNOLOGY
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

export default FoodTechnology;
