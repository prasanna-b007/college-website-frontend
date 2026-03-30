import React, { useState } from "react";

const BiotechnologyEngineering = () => {
    const [activeTab, setActiveTab ] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Biotechnology at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Academic Calendar",
        "Curriculum",
        "Placements - Key Companies",
        "Student Placements",
        "Newsletter & Magazine"
    ];

    const newsletters = [
        { year: "2019-2020", file: "/academics/departments/BT/BT_2019-2020.pdf" },
        { year: "2020-2021", file: "/academics/departments/BT/BT_2020-2021.pdf" },
        { year: "2021-2022", file: "/academics/departments/BT/BT_2021-2022.pdf" }
    ];

    const peos = [
        { id: "PEO1", text: "Graduates will be able to identify, analyze and solve the biotechnological problems in product and process development." },
        { id: "PEO2", text: "Graduates will be able to identify and control hazards in bioprocess industries." },
        { id: "PEO3", text: "Graduates will be able to apply modern computational, and analytical tools and techniques to address biotechnological challenges." },
        { id: "PEO4", text: "Graduates will be able to pursue life-long learning as a means of enhancing the knowledge base and skills for professional advancements." },
        { id: "PEO5", text: "Graduates will be able to communicate effectively and demonstrate and impart entrepreneurial and leadership skills." }
    ];

    const psos = [
        { id: "PSO1", text: "Cultivate understanding of biotechnology principles for a robust and solid foundation that allows them to comprehend emerging and innovative engineering concepts in life sciences." },
        { id: "PSO2", text: "To inculcate Knowledge and hands on training to solve engineering and scientific problems." },
        { id: "PSO3", text: "Empower the students ability to work in interdisciplinary areas of science and technology towards industrial and academic research applications." }
    ];

    const placementCompanies = [
        ["PULSUS Healthtech LLP", "Yaazh xenomics"],
        ["Think & Learn", "Finoseq"],
        ["NL MICRO LABORATORY", "Mayilmark"],
        ["Agro Green Biolife", "Xcellogen Biotech ."],
        ["TNQ technologies", "Focus Edumatic"],
        ["Tex Biosciences", "Biocon"],
        ["Visionary RCM", "Anthem Bio Science ."]
    ];

    const studentAchievements = [
        { name: "Akksadha", year: "IV", type: "ACADEMIC", details: "Student have got their post graduation MS at East China University for Science & Technology, China with a fellowship of 1 lakh/month." },
        { name: "S.Janupriya", year: "IV", type: "ACADEMIC", details: "Internship at Monash University, Malaysia to carry out the project titled \"Antioxidants study of PCL/lignin-PEG-15% NCC\"" },
        { name: "Aishwarya S.Y", year: "III", type: "ACADEMIC", details: "Got 1st Prize in Nano challenge 2019 held on PSG STEP, Coimbatore. She has been awarded Rs 25000 for the incubation space to carry out her prototype development." },
        { name: "S.Janupriya", year: "IV", type: "ACADEMIC", details: "Got Agathiyar award 2020 and also cash prize of Rs 5000 for poster presentation in National Conference, organised by Central Council for Research in Siddha with Support of Ministry of AYUSH." },
        { name: "Kavipriya, Nivedithalakshmi", year: "IV", type: "ACADEMIC", details: "Got First place in Paper presentation in World cancer Day at Dr.NGP college of Arts & Science." },
        { name: "Elizabeth Angel, Bharath Kumar, Bruce Joshua Sinclair", year: "I", type: "ACADEMIC", details: "Selected for final round of TNSI(Tamilnadu Student Innovators) which is under EDIITN(Entrepreneurship Development Institute of India Tamilnadu) Project Titled \"Neero\" where it deals with mini household sewage treatment plant under low cost." },
        { name: "Bhagyalakshmi, Prithika, Bhavanisha, Sruthi", year: "I", type: "ACADEMIC", details: "Got first prize for Poster presentation in the national conference at Bharathiar University, Coimbatore organised by Department of Microbial Biotechnology." },
        { name: "Harisudhan. T, Vignesh A", year: "III", type: "SPORTS", details: "Hockey team \" Runner's up \"held at Bannari Amman Institute of Technology, Erode" },
        { name: "Nandhini.P", year: "III", type: "SPORTS", details: "i) Anna University Zone-9, Badminton Runner 2019-2020 ii) Anna University Zone-9, Ball Badminton Winner 2019-2020 iii) KCT Trophy 2019-2020 Badminton Runner" },
        { name: "Harisudhan. T, Vignesh A", year: "III", type: "SPORTS", details: "Hockey team \" Winner\" held at Hindusthan College Alumni Meet, Coimbatore" },
        { name: "Viba Varshini.K", year: "III", type: "SPORTS", details: "Anna University Zone-9, Chess Second Runner Up 2019-2020" },
        { name: "Dilip Kumar, Gautham Siddharth", year: "III, II", type: "CO CURRICULAR", details: "IInd place in ADIVIDYA – National Level Symposium 2K20 - Sri Krishna Adithya College of Arts & Science" }
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
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Course Offered</th>
                                        <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Intake</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.Tech - Biotechnology</td>
                                        <td className="border-none py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">60</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ABOUT THE DEPARTMENT
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            Biotechnology (BT) combines the biological science with technologies to create innovative products for healthcare, agriculture, food, pharmaceuticals and environmental control. The biotechnology sector is expected to offer huge opportunities in the next 5-10 years in the areas of vaccines, bioactive therapeutic proteins, contract research, clinical trials, bioinformatics, medicinal plants, animal biotechnology, seri biotechnology, stem cell biotechnology, bio-fuels, bio-pesticides, human genetics and environmental biotechnology.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            BT produces Orphan Medicinal Products (OMP) to cure rare and incurable chronic diseases. BT already benefited 350 million patients around the world. BT medicines help to treat chronic illnesses such as heart attacks, stroke, multiple sclerosis, breast cancer, cystic fibrosis, leukemia, diabetes, hepatitis and other rare, infectious diseases. Insulin is a life saving biotech medicine for patients with diabetes.
                        </p>
                    </div>
                );
            case "Why Biotechnology at SIET":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            WHY BIOTECHNOLOGY AT SIET
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-justify mb-4 text-[#585a61] leading-relaxed">
                            The department is equipped with state-of-the-art facilities that enable students to gain strong practical training in biotechnology. It is supported by a team of experienced and accomplished faculty members who have collectively published more than 50 research papers. The faculty actively mentor students in emerging and interdisciplinary areas such as bioenergy, biofuels, microbial robotics, living concrete, bio design, industrial enzymes, recombinant protein therapeutics, development of anti-aging formulations, and photobioreactor design.
                        </p>
                        <p className="text-justify mb-4 text-[#585a61] leading-relaxed">
                            The program emphasizes experiential learning, encouraging students to learn science through hands-on practice rather than purely theoretical study. Students are also trained to effectively access scientific databases, analyze information, and transform it into meaningful knowledge. In addition, the department ensures 100% placement assistance for registered students in core biotechnology and related companies.
                        </p>
                        <p className="text-justify mb-4 text-[#585a61] leading-relaxed">
                            Students receive training across diverse scientific domains, enabling them to participate in innovation and entrepreneurship competitions such as IICDC, TNSTI, INOWAH, and other national-level innovation challenges. To strengthen industry exposure and practical understanding, industrial visits related to each subject are organized every semester, allowing students to connect academic learning with real-world applications.
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
                        <ol className="list-decimal ml-6 space-y-3 text-[#585a61] leading-relaxed text-justify">
                            <li>100% Placement</li>
                            <li>Industry oriented curriculum supported for engineering exploration labs and internships.</li>
                            <li>Eminent professors with excellent experience in Academics, Research and Industry.</li>
                            <li>Summer and Winter Internships are provided for all the students.</li>
                            <li>Facilities are available to provide internship for 12 months during final year so that the students can get employment immediately after internship.</li>
                            <li>Research project on Microbial Robotics for targeted drug delivery is underway. Dr.S.Shanmugasudaram, Emeritus Scientist is carrying out the project for the last 6 months and the project is expected to be completed in 2 years and also the above project is fully funded and supported by our management. In this project Selected microorganisms will be loaded with desired drugs and it will be magnetised which will move to the place where it is required.</li>
                            <li>Research project carried out by final year students like Sowndarya, Kaviya and Ramya where they have already generated the 3D structure of a synthetic enzyme and also planning to synthesize the enzymes according to industry needs which do not exist in nature.</li>
                            <li>Faculty research project on Bio-refinery and Bio-oil production is carried out by Mrs.M.Sujitha Head of the Department, where lipid containing yeast is used as a source of oil production and also it is microbial oil.</li>
                            <li>Faculties have published papers in Scopus indexed Journals</li>
                            <li>It is proposed to conduct International conference every year in the month of May</li>
                        </ol>
                    </div>
                );
            case "Achievements":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            STUDENTS ACHIEVEMENTS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
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
                            <p className="text-center italic max-w-[900px] mx-auto my-2.5 text-[#585a61] leading-relaxed">
                                To cultivate scientific and technical manpower in Biotechnology to solve various problems and challenges faced by industry and academia for the betterment of society.
                            </p>
                        </div>
                        <div className="text-center my-[30px] mb-5">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-3 uppercase relative inline-block group w-fit">
                                MISSION
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <p className="text-center mb-5 text-[#585a61] leading-relaxed">To achieve the vision, the department will:</p>
                        <ul className="list-none p-0 space-y-4">
                            {[
                                { id: "M1", text: "To provide an academic environment that emphasizes critical thinking" },
                                { id: "M2", text: "To equip students with the knowledge and practical skills required for the industry and academia." },
                                { id: "M3", text: "To constitute Institute-Industry relationships via implant training programs and projects and establish a centre of excellence (COE) in the frontier areas of biotechnology." }
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
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem]">{peo.id}</span>
                                    <p className="m-0 text-[#585a61] leading-relaxed"><strong>{peo.id}:</strong> {peo.text}</p>
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
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem]">{pso.id}</span>
                                    <p className="m-0 text-[#585a61] leading-relaxed"><strong>{pso.id}:</strong> {pso.text}</p>
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
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-center uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">S.No</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Name</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Designation</th>
                                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-left uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">Qualification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* To be populated */}
                            </tbody>
                        </table>
                    </div>
                );
            case "Academic Calendar":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            ACADEMIC CALENDAR
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61]">Information coming soon...</p>
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
                                    <th colSpan="2" className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] py-[18px] px-5 text-center uppercase font-extrabold text-[0.75rem] tracking-widest border-b-2 border-[#ffdc52]">LIST OF KEY COMPANIES VISITED SO FAR FOR PLACEMENT</th>
                                </tr>
                            </thead>
                            <tbody>
                                {placementCompanies.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">{row[0]}</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">{row[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case "Student Placements":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            STUDENT PLACEMENTS
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <div className="flex flex-wrap gap-5 justify-center">
                            {newsletters.map((newsletter, idx) => (
                                <a 
                                    key={idx}
                                    href={newsletter.file} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center p-5 bg-[#f9f9f9] rounded-xl no-underline text-[#00854a] w-[200px] shadow-sm border border-[#eee] transition-transform hover:-translate-y-1.5"
                                >
                                    <span className="text-[2rem] mb-2.5">📄</span>
                                    <span className="font-bold text-center">Placement Details</span>
                                    <span className="text-[#585a61]">{newsletter.year}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                );
            case "Newsletter & Magazine":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            NEWSLETTER & MAGAZINE
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <p className="text-[#585a61]">Information coming soon...</p>
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
                   BIOTECHNOLOGY
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="w-full lg:w-[40%] lg:sticky lg:top-[100px] lg:border-r-2 lg:border-[#f9fafb] lg:pr-8 mb-8 lg:mb-0 border-b-2 lg:border-b-0 border-[#f9fafb] pb-8 lg:pb-0">
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

                <div className="flex-1 w-full lg:w-[60%]">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default BiotechnologyEngineering;
