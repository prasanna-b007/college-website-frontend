import React, { useState } from "react";

const ComputerScienceAndEngineering = () => {
    const [activeTab, setActiveTab] = useState("About the Department");

    const tabs = [
        "About the Department",
        "Why Computer Science & Engg. at SIET",
        "Unique Facilities",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Programme Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Academic Calendar",
        "Achievements",
        "Curriculum",
        "Placements-Key Companies",
        "Student Placements",
        "Newsletter & Magazine",
        "Alumni Corner",
        "Feedback",
    ];

    const peos = [
        { id: "PEO1", text: "Graduates will demonstrate the ability to effectively apply their Computer science and engineering principles to solve real-world problems and advance in their careers." },
        { id: "PEO2", text: "Graduates will contribute to the development and application of innovative solutions in their professional practice, demonstrating critical thinking and problem-solving abilities." },
        { id: "PEO3", text: "Graduates will possess professional and ethical attitude, effective communication skills, team working skills, multi-disciplinary approach, and an ability to relate engineering issues to broader social contexts." },
        { id: "PEO4", text: "Graduates will Possess an attitude of lifelong learning to adapt to changes in technology as well as in the environment." }
    ];

    const psos = [
        { id: "PSO1", text: "Ability to understand the core principles of the theory of computing, programming and data organization and to make use of them in designing, developing and testing software systems with assured quality." },
        { id: "PSO2", text: "The ability to use software engineering practices and tools in developing complete software based solutions for identified real world problems with the help of acquired knowledge in computer networking and World Wide Web." },
        { id: "PSO3", text: "The ability to learn new technologies and acquire new skill sets to adapt to the changing requirements in the career and to pursue entrepreneurship." }
    ];

    const placements2015 = [
        { name: "C.Abhinaya", org: "Vernalis" },
        { name: "N.Abinaya", org: "Infosys" },
        { name: "R.Abinaya", org: "Vernalis" },
        { name: "I.Anjana", org: "Savvysoft" },
        { name: "C.Anuragavi", org: "Vernalis" },
        { name: "A.Archana Devi", org: "ENS/Duratech Solutions" },
        { name: "A.Asha Parveen", org: "Umedex" },
        { name: "T.BrindhaDevi", org: "CTS/Umedex" },
        { name: "D.Deepika", org: "EP Tech India ltd / Gloriex Infosystems" },
        { name: "S.Deepikaa", org: "Calydon Infotech/EP Tech India ltd / Gloriex Infosystems" },
        { name: "N.Dhineshkumar", org: "AVEON INFOTECH" },
        { name: "R.Divya", org: "Vernalis" },
        { name: "K.Geetha", org: "HP" },
        { name: "S.Geetha Priya", org: "EP Tech India ltd/Duratech Solutions" },
        { name: "D.Gowri", org: "Infosys/ENS" },
        { name: "P.S.Jaishree", org: "CTS/Fony Technologies" },
        { name: "G.Jayaprashanth", org: "Sanspareil/Savvysoft/Serco" },
        { name: "S.Jayashree", org: "Calydon Infotech/EP Tech India ltd/ Gloriex Infosystems" },
        { name: "R.Jesseyma", org: "UST GLOBAL/Equator Technologies" },
        { name: "R.Jisha Poduval", org: "L&T Infotech" },
        { name: "B.Kamalakannan", org: "VVDN" },
        { name: "M.Kartheeswari", org: "CTS/EP Tech India ltd" },
        { name: "K.Karthika", org: "Infosys" },
        { name: "S.Kaviyarasu", org: "Max IT global" },
        { name: "B.KEERTHANA", org: "Accenture/Vernalis" },
        { name: "S.Mahesh Kumar", org: "Telesonic" },
        { name: "M.Mirunalini", org: "EP Tech India ltd" },
        { name: "S.Mohana Priya", org: "CTS/Fony Technologies" },
        { name: "R.Mohanapriya", org: "Carex Services/ENS" },
        { name: "R.Mythili", org: "Calydon Infotech/EP Tech India ltd/ Gloriex Infosystems" },
        { name: "V.Narmadha", org: "Max IT global" },
        { name: "G.Naveen Kumar", org: "Eagleray Technologies" },
        { name: "R.V.Nevethini", org: "Vdart/ ENS" },
        { name: "P.Nithyashree", org: "NTT Data/Calydon Infotech/EP Tech India ltd" },
        { name: "K.S.Pavithra", org: "Carex Services" },
        { name: "M.Pavithra", org: "Eagleray Technologies" },
        { name: "P.Prakash Babu", org: "Tamps Tech" },
        { name: "R.Hari Hara Karthikeyan", org: "Gloriex Infosystems" },
        { name: "J.Jennix Deva Kumar", org: "Equator Technologies" },
        { name: "S.Prasaanth", org: "Mindtree/ENS" },
        { name: "R.Prasanya", org: "Infosys" },
        { name: "V.Praveena", org: "CTS/Cloud that" },
        { name: "S.Preetha", org: "Infosys" },
        { name: "A.Priya", org: "EP Tech India ltd" },
        { name: "B.Radha Amruta", org: "CTS/ENS" },
        { name: "S.Ramesh", org: "Fony Technologies" },
        { name: "K.Ramkumar", org: "Equator Technologies" },
        { name: "J.Ramya", org: "Infosys" },
        { name: "R.Ranjith", org: "Mindtree/Savvysoft" },
        { name: "K.Renugadevi", org: "Savvysoft" },
        { name: "B.Rupa", org: "CTS/EP Tech India ltd" },
        { name: "M.Sai Teja", org: "Savvysoft/Duratech Solutions" },
        { name: "R.Sangavi", org: "Infosys" },
        { name: "J.Sanjay", org: "Vernalis" },
        { name: "S.Santhosh", org: "Aditi Technologies/Vdart/ Fony Technologies" },
        { name: "R.Sathya Sangari", org: "Skava Systems" },
        { name: "P.Shanmugapriya", org: "Infosys/ENS" },
        { name: "R.Shree Shalini", org: "HP" },
        { name: "B.Sidharth", org: "Sanspareil/Savvysoft/Serco" },
        { name: "P.Sindhuja", org: "CTS/Infence" },
        { name: "S.Sivasangari", org: "L&T Infotech" },
        { name: "M.Sowmiya", org: "Sanspareil/EP Tech India ltd/Duratech Solutions" },
        { name: "V.M.Subhashini", org: "NTT Data/Calydon Infotech" },
        { name: "G.Sudhandaraa", org: "L&T Infotech" },
        { name: "K.Sujitha", org: "Infosys/ENS" },
        { name: "S.Sujithra", org: "Savvysoft" },
        { name: "K.Sushanth", org: "Infosys" },
        { name: "G.Swathipriya", org: "Payoda/Mindtree" },
        { name: "P.Tamilarasan", org: "Max IT global" },
        { name: "C.Thaarani", org: "Vdart/ Fony Technologies / Gloriex Infosystems" },
        { name: "T.Thamil Iniyaal", org: "Fony Technologies / Gloriex Infosystems" },
        { name: "C.V.Tharun", org: "Payoda" },
        { name: "N.Thiyagu", org: "NTT Data/ENS" },
        { name: "J.Vidyalakshmi", org: "Calydon Infotech/EP Tech India ltd / Gloriex Infosystems" },
        { name: "A.Vijay Akilan", org: "ENS/Duratech Solutions" },
        { name: "A.Vinodhini", org: "Savvysoft" },
        { name: "T.Vishakha", org: "5th Generation" },
        { name: "O.Vishnuvarthini", org: "Infence" },
        { name: "L.Saranya", org: "EP Tech India ltd" }
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
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">B.E - Computer Science and Engineering</td>
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a] text-center">240</td>
                                    </tr>
                                    <tr className="hover:bg-[#ffdc52]/[0.1] transition-colors group">
                                        <td className="border-b border-[#f9fafb] py-[18px] px-5 text-[#585a61] align-middle group-hover:text-[#00854a]">M.E - Computer Science and Engineering</td>
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
                            Computer science deals with the theoretical foundations of information, computation, and with practical
                            techniques for their implementation and application. The Field of Computer Science is the main developing area in the
                            country, as well as a major contributor to the skilled and trained manpower of the world. Computer engineers are involved in
                            many aspects of computing, from the design of individual microprocessors, personal computers, and supercomputers, to
                            circuit design. The department offers B.E. and M.E program in Computer Science and Engineering.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            The aim of these programs is to enable students to acquire specialized knowledge for various subjects in
                            computer science and to update regularly to keep up with the growing demands and the changing trends of the software
                            industry. And also offers certified Value-added courses like CCNA, JAVA, soft skill development programs and job-oriented
                            courses to help increase the employment potential of the students.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            The Department has state of the art infrastructure, laboratories and computing equipment supported by high
                            speed Ethernet and wireless networks. The faculty members update their knowledge by regularly attending various
                            conferences and faculty development program .Several faculty members are currently doing their research work and are
                            involved in taking care of software projects.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            Mere theoretical knowledge is not sufficient for the students hence Industrial visit is considered as one of the
                            most practical methods of teaching. Students are taken for a guided tour to various industries, providing them information
                            about the background of the companies and their current position in the global business scenario. It helps the students to
                            know things practically through interaction, working methods and employment practices. Moreover, it gives exposure from
                            academic point of view.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            With a view to bridge the gap between industrial requirements and academic curriculum, the department invites
                            experts from various fields of engineering and management to enable the students to know and understand the
                            requirements of industries. And have designed a discussion forum to share and learn.
                        </p>
                        <p className="mb-4 text-[#585a61] text-justify leading-relaxed">
                            A team of learned and dedicated teachers train the students in the latest technology enabling them to acquire
                            the necessary skills to work in any reputed IT industry and prides itself on good career opportunities for students. There is a
                            major contribution from our Alumni team in the development of the department as well as mentoring and sharing
                            experiences to the existing students.
                        </p>
                    </div>
                );
            case "Why Computer Science & Engg. at SIET":
                return (
                    <div className="flex flex-col">
                        <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                            WHY COMPUTER SCIENCE & ENGG. AT SIET
                            <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                        </h3>
                        <div className="text-[#585a61] text-justify leading-relaxed space-y-3">
                            <p>1. The Dept of CSE consecutively producing 100% Placement every year.</p>
                            <p>2. B.E CSE has been Accredited by NBA</p>
                            <p>3. Anna University approved Research Centre.</p>
                            <p>4. Eminent Professors with cumulative experience in Academy, Research, Industry.</p>
                            <p>5. NPTEL and online certifications.</p>
                            <p>6. Around 200 technical articles have been published by the faculty members in the top ranked Journals in the last five years.</p>
                            <p>7. Strong Alumni Connect and Industry connect.</p>
                            <p>8. Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships.</p>
                            <p>9. Membership in various Professional society CSI, IEEE, IEI, ISTE and Etc.</p>
                            <p>10. Centre of Excellence for software Testing in collaboration with Virtusa.</p>
                            <p>11. Value added Courses with Industry collaboration Certified faculty: ISTQB, Cloud services(EMC2), NPTEL Courses.</p>
                            <p>12. Special training for bright students.</p>
                            <p>13. Quality placements & Internship - Internshala.</p>
                            <p>14. Sponsorship from funding agencies like AICTE and others.</p>
                            <p>15. Yearly Flagship events:</p>
                            <ul className="ml-10 list-disc space-y-1">
                                <li>IEEE sponsorship for International Conference on Computer Communication and Informatics</li>
                                <li>24 hours Hackathon and Programming Contests with industrial collaborations.</li>
                            </ul>
                            <p>16. Three Patents have been registered by the doctorates of the department and few book chapters are also published by the faculty members.</p>
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
                            <p>3. Certification Courses with industry Collaboration- Software Testing with Virtusa and Data Analytics with Duccen.</p>
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
                                To be a center of excellence in Computer Science and Engineering by providing quality education and research to produce globally competent and ethical professionals who contribute to the advancement of society.
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
                                { id: "M1", text: "To provide an environment that fosters technical excellence and research in Computer Science." },
                                { id: "M2", text: "To equip students with problem-solving skills and innovative thinking to solve real-world challenges." },
                                { id: "M3", text: "To promote collaboration with industry and academia for continuous learning and professional growth." },
                                { id: "M4", text: "To instill ethical values and social responsibility in the minds of young engineers." }
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
                            {[
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
                                { id: "PO11", title: "Project Management and Finance", text: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
                                { id: "PO12", title: "Life-long Learning", text: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
                            ].map((po) => (
                                <li key={po.id} className="flex items-start gap-4">
                                    <span className="bg-[#00854a] text-white rounded-full w-[30px] min-w-[30px] h-[30px] flex justify-center items-center font-bold text-[0.7rem] transition-transform hover:scale-110">{po.id}</span>
                                    <p className="m-0 text-[#585a61] text-[0.9rem] leading-relaxed"><strong>{po.id}: {po.title}:</strong> {po.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "Achievements":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                ACHIEVEMENTS
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <div className="text-[#585a61] text-justify leading-relaxed space-y-3">
                            <p>1. R.P.Narmadha received Best Coordinator award for Socio Club from Nature Conservative Society.</p>
                            <p>2. N.Saranya, Top 2 % scorer in NPTEL Certification Exams.</p>
                            <p>3. L.Sindhia, Received Tamil Shakthi award from Malaysia Tamil Sangam for contribution towards Tamil Research.</p>
                            <p>4. Received Best CSI student Branch Award.</p>
                        </div>
                    </div>
                );
            case "Placements-Key Companies":
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
                                    ["Rently", "Hyperverge"], ["Eunimart", "Zoho"], ["Comcast", "Infirna"], ["Kaar Tech", "GRL Software"],
                                    ["Codemonk", "VVDN"], ["Vuram Technology", "Thoughtworks"], ["Aspire Systems", "CES"], ["Capgemini", "Calypso"],
                                    ["Wipro", "Guardian Link"], ["Kaar Tech", "Coding Mart"], ["Aptean", "Tata Consultancy Services"],
                                    ["Amazon web services", "HTC Global Services"], ["OLA Cabs", "Virtusa"], ["Intel Corporation", "L&T InfoTech"],
                                    ["Cisco", "Tech Mahindra"], ["IBM", "Skava Tech"], ["FlipKart", "Full Creative"], ["Examly", "Amphisoft"],
                                    ["Payoda", "Nationstar"], ["Squash Apps", "Springrole"], ["Infosys", "Sirius Software Solutions"], ["CTS", ""]
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
            case "Student Placements":
                return (
                    <div className="flex flex-col">
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                STUDENT PLACEMENTS
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
                        <div className="text-center mb-[30px]">
                            <h3 className="text-[#00854a] text-[1.75rem] font-extrabold mt-0 mb-7 uppercase relative inline-block group w-fit">
                                ALUMNI CORNER
                                <span className="absolute -bottom-1.5 left-0 w-10 h-1 bg-[#ffdc52] rounded-full transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:w-full"></span>
                            </h3>
                        </div>
                        <p className="text-[#585a61] text-justify leading-relaxed mb-4">
                            We have strong Alumni Team. They are involved in the following activities:
                        </p>
                        <div className="text-[#585a61] text-justify leading-relaxed space-y-2.5 mt-5">
                            <p>1. Giving sessions on latest technologies</p>
                            <p>2. Acted as a reviewers in the project work</p>
                            <p>3. Refer the students to top companies through Employ referral programs</p>
                            <p>4. Mentoring the students</p>
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
                        <ul className="list-none p-0 space-y-0 text-[#585a61]">
                            {[
                                { text: "Feedback on Curriculum", link: "#" },
                                { text: "Student and Alumni Feedback", link: "#" },
                                { text: "Employer's feedback", link: "#" },
                                { text: "Feedback on Facility", link: "#" },
                                { text: "Feedback on Department Vision and Mission", link: "#" }
                            ].map((item, idx) => (
                                <li key={idx} className="py-2.5 border-b border-[#eee]">
                                    <a href={item.link} className="text-[#00854a] no-underline font-medium hover:text-[#06864B]">
                                        {item.text}
                                    </a>
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
                <div className="flex flex-col">
                    <h2 className="text-[#00854a] text-[1.8rem] font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent">
                        COMPUTER SCIENCE AND ENGINEERING
                    </h2>
                    <div className="text-[#00854a] text-[0.9rem] font-semibold mt-1">
                        Home / Departments / Computer Science and Engineering
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

export default ComputerScienceAndEngineering;
