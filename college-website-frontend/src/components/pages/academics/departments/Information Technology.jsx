import React, { useState } from "react";

const InformationTechnology = () => {
    const [activeTab, setActiveTab ] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Information Technology at SIET",
        "Unique Facilities",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "Academic Calendar",
        "Curriculum",
        "Placements - Key Companies",
        "Student Placements",
        "Newsletter & Magazine",
        "Alumni Corner",
        "Feedback",
    ];

    const peos = [
        { id: "PEO1", text: "Core Competency & Lifelong Learning – Equip graduates with a strong foundation in Information Technology, enabling them to analyze, design, and implement innovative solutions while adapting to evolving technologies through lifelong learning." },
        { id: "PEO2", text: "Research, Innovation & Entrepreneurship – Encourage graduates to engage in cutting-edge research, develop innovative IT solutions, and pursue entrepreneurial ventures through incubation, mentorship, and industry collaborations." },
        { id: "PEO3", text: "Industry Readiness & Global Competence – Prepare graduates for successful careers by fostering technical expertise, problem-solving skills, professional certifications, and hands-on experience through internships, projects, and industry-driven training." },
        { id: "PEO4", text: "Ethical, Social & Leadership Responsibilities – Instill professional ethics, teamwork, leadership, and a sense of social responsibility, ensuring graduates contribute to sustainable technological advancements and societal well-being." }
    ];

    const psos = [
        { id: "PSO1", text: "Software Development & Emerging Technologies – Apply core computing principles, programming skills, and knowledge of emerging technologies like AI, IoT, and cloud computing to design and develop efficient IT solutions." },
        { id: "PSO2", text: "Research, Innovation & Entrepreneurship – Analyze real-world challenges, conduct research, and develop innovative, market-driven IT products and solutions while fostering an entrepreneurial mindset." },
        { id: "PSO3", text: "Industry Readiness & Ethical IT Practices – Demonstrate proficiency in industry-relevant tools, project management, and cyber security best practices while upholding ethical, legal, and social responsibilities in professional IT solutions." }
    ];

    const whyPoints = [
        "B. Tech (Information Technology) has been accredited by National Board of Accreditation since 2014",
        "100% Placement every year",
        "Signed MoU with University of California Riverside for student exchange, faculty exchange and higher studies",
        "Eminent Professors with cumulative experience in Academy, Research, Industry.",
        "NPTEL and online certifications.",
        "Around 150 technical articles have been published by the faculty members in the top-ranked Journals in the last five years",
        "Strong Alumni Connect and Industry connect.",
        "Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses, and internships",
        "Membership in various Professional societies CSI, IEEE, IEI, ISTE, and etc",
        "Centre of Excellence for Software Testing in collaboration with Vitusa",
        "Value-added Courses with Industry collaboration certified faculty: ISTQB, Cloud services (EMC2)",
        "Intensive Training is given to all the students on Full Stack, Machine Learning and Data Science",
        "Paid Internship during the final year",
        "Flagship event “International Conference on Computer Communication and Informatics”",
        "Good number of Patents have been registered and published by the faculty members of the department and three book chapters are also published by the faculty members."
    ];

    const uniqueFacilities = [
        "Using online platform for Programming Practice. Students used to practice 200 problems per subject",
        "Industry Training for faculty members in the latest technology like Full Stack, Machine Learning and Data Science",
        "Certification Courses with industry Collaboration- Software Testing with Virtusa and Data Analytics with Ducen."
    ];

    const keyCompanies = [
        ["Examly", "Future Generalic"],
        ["Skava Tech", "Talentio"],
        ["Full Creative", "Fourentech"],
        ["Doodleblue", "CYGNUS SOFTWARE"],
        ["Nationstar", "CTS"],
        ["Springrole", "Codingmart"],
        ["Softcrylic", "Sopra Steria"],
        ["Focus Edumatic", "Excelacom"],
        ["Dotworld Technologies", "Aspire Systems"],
        ["Iexceed", "TCS"],
        ["Ducen IT", "Rently"],
        ["Virtusa", "Bibox"],
        ["NDOT Technologies", "Maximl Labs"],
        ["Amazon", "Bluebird"]
    ];

    const placement2016 = [
        { name: "T.AARTHY LAKSHMI", org: "TECH MAHENDRA" },
        { name: "K.ANGURAJ", org: "KATSI" },
        { name: "KEERTHANA.K", org: "KATSI, BLUE WHALE SOLUTIONS, KARMA,KAMBAA" },
        { name: "V.DHILEEBAN", org: "HCL" },
        { name: "J.B.FAZEELA", org: "GNTS, KAMBAA,KARMAA, EXTEERRO" },
        { name: "B.GAYATHRI", org: "GNTS, KAMBAA,KARMAA" },
        { name: "A.K.GAYATHRIDEVI", org: "VERNALIS" },
        { name: "S.HAREESH", org: "HCL" },
        { name: "S.HARITHA", org: "GNTS" },
        { name: "S.KASTURI NATHAN", org: "HCL" },
        { name: "KAUSIKA.R", org: "ZENSAR TECHNOLOGIES" },
        { name: "KEERTHANA.R", org: "VIRTUSA" },
        { name: "K.T.KOUSALYA", org: "ZENSAR TECHNOLOGIES" },
        { name: "S.LALITHAA SHRI", org: "ZENSAR TECHNOLOGIES" },
        { name: "V.MANOJ KUMAR", org: "KATSI, HP" },
        { name: "K.NAGAPPAN", org: "VURAM TECHNOLOGY, ZIFO TECHNOLOGY" },
        { name: "V.PRABHA", org: "ZENSAR TECHNOLOGIES" },
        { name: "S.PRASHANTH", org: "HCL" },
        { name: "U.H.PRIYESH", org: "BLUE WHALE, HCL" },
        { name: "M.RAVINDRANATH", org: "TECH MAHENDRA, SKAVA" },
        { name: "SANTHOSHPRIYA.N", org: "PAYODA" },
        { name: "SARANYA.P", org: "VIRTUSA" },
        { name: "SHOBANA.V", org: "ZENSAR TECHNOLOGIES, VIRTUSA POLARIS" },
        { name: "SRI VIGNESH.S", org: "KATSI , HTC, DUCEN" },
        { name: "M.SUGUNA", org: "GNTS" },
        { name: "D.UMA MAHESWARI", org: "KATSI, HP, SKAVA" },
        { name: "B.INIAMUDHAN", org: "INNOART TECHNOLOGIES, INFOFACES" },
        { name: "N.SARANYA", org: "IBS TECHNOLOGY" },
        { name: "N.DILIP KUMAR", org: "RAPID VALUE, KAMBA" },
        { name: "R.DEEPIKA", org: "RAPID VALUE, INFOFACES" },
        { name: "A.BRINDHA", org: "KARMA IT SOLUTIONS" },
        { name: "KAVYA.R", org: "KARMA IT SOLUTIONS" },
        { name: "V.PRIYANKA", org: "KARMA IT SOLUTIONS" },
        { name: "K.V.PRIYANKA", org: "KARMA IT SOLUTIONS" },
        { name: "K.RANJANI", org: "TECHZONE" },
        { name: "K.SANGEETHA", org: "CMS" },
        { name: "SRIMATHI.T", org: "TECHZONE" }
    ];

    const alumniPoints = [
        "Invited talks on latest technologies",
        "Acted as a reviewers in the project work",
        "Refer the students to top companies through Employee referral programs",
        "Mentoring the students for placement and project"
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
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Course Offered</th>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Intake</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.Tech - Information Technology</td>
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">180</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ABOUT THE DEPARTMENT
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            The Department of Information Technology was established in 2006 with the objective of imparting quality education in the field of Information Technology. Since its inception, the department has expanded and grown in terms of dissemination of knowledge within and outside curriculum and skill development activities.
                        </p>
                    </div>
                );
            case "Why Information Technology at SIET":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            WHY INFORMATION TECHNOLOGY AT SIET
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
            case "Unique Facilities":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            UNIQUE FACILITIES
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <ul className="list-none p-0 space-y-4">
                            {uniqueFacilities.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[25px] min-w-[25px] h-[25px] flex justify-center items-center font-bold text-[0.7rem]">{idx + 1}</span>
                                    <p className="m-0 text-[#585a61] text-justify leading-relaxed">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "Vision & Mission":
                return (
                    <div className="flex flex-col text-center">
                        <div className="mb-10">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit mx-auto">
                                VISION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                            <p className="text-[#585a61] italic leading-relaxed max-w-[900px] mx-auto text-justify">
                                To be a globally recognized centre of excellence in Information Technology education, research, innovation, and entrepreneurship. The goal is to nurture highly skilled IT professionals, advance cutting-edge research, and develop impactful technological solutions that drive societal progress. By fostering industry collaborations, promoting entrepreneurship, and embracing emerging technologies, the aim is to become the preferred destination for students, researchers, and industry leaders seeking IT expertise.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit mx-auto">
                                MISSION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                            <div className="space-y-4 text-justify max-w-[900px] mx-auto text-[#585a61]">
                                <p><strong>Excellence in Education & Research:</strong> Deliver industry-aligned education, foster hands-on learning, and drive cutting-edge research in emerging technologies.</p>
                                <p><strong>Industry & Entrepreneurship Focus:</strong> Strengthen industry collaborations, support student startups through incubation and mentorship, and promote innovation-driven initiatives.</p>
                                <p><strong>Global & Ethical Impact:</strong> Equip students with technical expertise, global certifications, and ethical responsibility to create socially conscious and globally competitive IT professionals.</p>
                            </div>
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
                                    <p className="m-0 text-[#585a61] text-[0.9rem] leading-relaxed text-justify"><strong>{peo.id}:</strong> {peo.text}</p>
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
                                    <p className="m-0 text-[#585a61] text-[0.9rem] leading-relaxed text-justify"><strong>{pso.id}:</strong> {pso.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "Placements - Key Companies":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            PLACEMENTS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-center uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">List of key companies visited so far for placement</th>
                                </tr>
                            </thead>
                            <tbody>
                                {keyCompanies.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-3.5 px-5 text-[#585a61] align-middle group-hover:text-[#00854a] w-1/2">{row[0]}</td>
                                        <td className="border-b border-[#f9fafb] py-3.5 px-5 text-[#585a61] align-middle group-hover:text-[#00854a] w-1/2">{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "Student Placements":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                PLACEMENTS
                            </h3>
                        </div>
                        <h4 className="text-[#00854a] text-xl font-bold mb-4 uppercase text-center">2016 Batch</h4>
                        <table className="w-full border-separate border-spacing-0 text-[0.9rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-md">
                            <thead>
                                <tr>
                                    <th width="50%" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Student Name</th>
                                    <th width="50%" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Organization</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placement2016.map((p, idx) => (
                                    <tr key={idx} className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-3.5 px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">{p.name}</td>
                                        <td className="border-b border-[#f9fafb] py-3.5 px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">{p.org}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "Alumni Corner":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ALUMNI CORNER
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61] mb-6 leading-relaxed">
                            We have strong Alumni Team. Apart from Annual Alumni meet they are involved in the following activities:
                        </p>
                        <ul className="list-none p-0 space-y-4">
                            {alumniPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[25px] min-w-[25px] h-[25px] flex justify-center items-center font-bold text-[0.7rem]">{idx + 1}</span>
                                    <p className="m-0 text-[#585a61] text-justify leading-relaxed">{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            {activeTab.toUpperCase()}
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
                    INFORMATION TECHNOLOGY
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

export default InformationTechnology;
