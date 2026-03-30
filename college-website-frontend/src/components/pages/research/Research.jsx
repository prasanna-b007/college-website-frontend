import React, { useState } from "react";


const ArrowIcon = () => (
  <div className="flex-shrink-0 mt-1">
    <div className="w-5 h-5 bg-[#00854a] rounded-full flex items-center justify-center text-[#ffdc52] text-[10px]">
      <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

const Research = () => {
  const [activeTab, setActiveTab] = useState("objective");
  const [activeIprSubTab, setActiveIprSubTab] = useState("about");
  const [viewingCenterDetails, setViewingCenterDetails] = useState(null);
  const [selectedConference, setSelectedConference] = useState(null);

  const menu = [
    { id: "objective", label: "Objective" },
    { id: "constitution", label: "Constitution of R&D Cell" },
    { id: "advisory", label: "Research advisory Board" },
    { id: "centers", label: "Research Centers" },
    { id: "grants", label: "Grants Fetched" },
    { id: "ipr", label: "Intellectual property Rights" },
    { id: "journals", label: "3 International Journals" },
    { id: "conferences", label: "6 International Conferences" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "objective":
        return (
          <div className="tab-pane">
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Objective</h3>
            <div className="space-y-4 max-w-4xl mb-8">
              {[
                "To emphasize the importance of innovation and discovery in academia, there by gaining knowledge to be imparted to students",
                "Empowering the faculty and students with creative and interdisciplinary thinking by stimulating and encouraging in all possible ways",
                "Create the ecosystem for research and incubation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start text-left">
                  <ArrowIcon />
                  <div className="ml-3">
                    <p className="text-gray-700 leading-relaxed text-base text-justify">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-8 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Policy</h3>
            <div className="space-y-4 max-w-4xl">
              {[
                "Identify the capability of faculty and students in R&D activities",
                "Create platform for knowledge enhancement",
                "Keep watching the funding opportunities and mentor faculty to write proposals",
                "Creating proof of concept of the chosen field of expertise by doing student projects",
                "The student projects are mentored to get published in journal and getting patented",
                "Providing seed money for theme based R&D activities",
                "Create industry collaboration"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start text-left">
                  <ArrowIcon />
                  <div className="ml-3">
                    <p className="text-gray-700 leading-relaxed text-base text-justify">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "constitution":
        return (
          <div className="tab-pane">
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Constitution of R&D Cell</h3>
            <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Role</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name & Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Chief Advisor</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. S. Thangavelu, Chairman, SIET</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]" rowSpan="2">Advisors</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Er. Dheepan Thangavelu, Secretary, SIET</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. Sheelan Thangavelu, Joint Secretary, SIET</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Chairman</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. N. K. Sakthivel, Principal, SIET</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">President</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. Bindu Salim, Director-Research</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]" rowSpan="10">Members</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. Dooslin Mercy bai</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. K. E. Kannamal</td></tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. G. Sundar</td></tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. S. Bhavani</td></tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. Gnanasekaran S</td></tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. P. Violet Marry</td></tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. Deepa M</td></tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. Ibrahim Sheriff</td></tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. Subramaniam</td></tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. Remya K R</td></tr>
              </tbody>
            </table>
            </div>
          </div>
        );
      case "advisory":
        return (
          <div className="tab-pane">
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Research Advisory Board</h3>
            <p className="text-gray-700 text-base mb-4">The Research Advisory Board (RAB) provides strategic direction and guidance for the institution's research activities.</p>
            <div className="space-y-4">
              {[
                "Dr. B. Chandrasekhar, CEO, Bigtec Labs Bangalore",
                "Dr. Murali Krishna, Technical Officer-DRDO (NPOL Cochin)",
                "Mr. Krishnakumar S, Associate Director, CDAC",
                "Dr. Nagamani A N Rao, Design Engineer MTS Silicon",
                "Dr. Sudha Ramalingam, Director Research, PSGIMSR",
                "Dr. R Rudramoorthy, Director, PSGCARE"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <ArrowIcon />
                  <div className="ml-3">
                    <p className="text-gray-700 leading-relaxed text-base">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "centers":
        if (viewingCenterDetails === "water") {
          return (
            <div className="tab-pane">
              <button 
                onClick={() => setViewingCenterDetails(null)}
                className="mb-6 flex items-center text-[#00854a] font-bold text-base uppercase hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Research Centres
              </button>

              <h2 className="text-[#00854a] text-xl font-bold mb-6 border-b-2 border-[#00854a]/20 pb-2 uppercase text-center">
                Centre for Geoinformatics and Water Technology
              </h2>

              <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="mb-3 text-lg">Vision</h3>
                <p className="text-gray-700 leading-relaxed text-base text-justify italic">
                  The Centre is established to fully utilize and manage natural resources and the environment, 
                  towards increasing sustainability and providing global security to all sectors of society. 
                  It also aims to enhance the quality of life by ensuring water security for all by providing 
                  necessary research and development inputs, with special emphasis on the use of Geoinformatics.
                </p>
                
                <h3 className="mt-8 mb-3 text-lg">Mission</h3>
                <p className="text-gray-700 leading-relaxed text-base text-justify italic">
                  To pursue exploratory research projects in diverse areas of Geoinformatics and Water Technology 
                  and bring together a team of dedicated researchers who push the limits to achieve the goals. 
                  The major goal is to use the latest tools and techniques in Geoinformatics to come up with 
                  innovative research designs and transferring the developed technology to the society that can make life easier.
                </p>
              </div>

              <h3 className="mb-4">List of Ongoing Research Projects</h3>
              <p className="text-base font-bold text-[#00854a] mb-3">Principal Investigator: Dr. D. Karunanidhi</p>
              <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                <thead>
                <tr>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Funding Agency</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Title of the Projects</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Amount (Rs. In Lakhs)</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DST - NRDMS Major Project</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Geospatial Technology in Promoting Recharge in Lower Bhavani Basin in between Bhavanisagar to Bhavani Town Erode District, Tamil Nadu</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">14.80</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">On going</td>
                  </tr>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DST- SERB ECRA Scheme</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Identification of Hydrogeochemical Controls on Occurrence of High Fluorides in Bed Rock Aquifers of Shanmuganadhi Sub-basin, Amravathi river, Tamil Nadu – a Special Stress on Remediation by Managed Aquifer Recharge</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">26.27</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">On going</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 mb-4">Core Faculty</h3>
              <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                <thead>
                <tr>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Sl.No</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Core Faculty</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Highest Qualification</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Area of Specialization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">1.</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. D. Karunanidhi, Associate Professor</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Ph.D</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Geoinformatics Application for Groundwater Modelling</td>
                  </tr>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">2.</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. K.Y. Raneesh, Associate Professor</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Ph.D</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Water Resources Management and Climate Changes</td>
                  </tr>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">3.</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. S. Saravanan</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Ph.D</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Irrigation Engineering Remote Sensing and GIS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 mb-4">List of Pursuing Ph.D Scholars</h3>
              <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                <thead>
                <tr>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Sl.No</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of The Scholar</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Faculty/Degree</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Title of the Thesis</th>
                    <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Supervisor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">1.</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. D. Sakthivelu</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Civil Engineering (Part-time)</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">GIS based hydrological modeling in Kangayam Taluk, Thirupur District of Tamil Nadu</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. D. Karunanidhi</td>
                  </tr>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">2.</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. J. Vignesh</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">S&H (Geology) (Part-time)</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Geoinformatics modeling for hydrogeochemical process in Mettur Taluk, Salem District, Tamil Nadu</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. D. Karunanidhi</td>
                  </tr>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">3.</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Ms. T. Maithili</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">S&H (Geology) (Part-time)</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Hydrogeochemical process and evolution of Fluoride in groundwater at Eadapadi Taluk, Salem District, Tamil Nadu using GIS</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. D. Karunanidhi</td>
                  </tr>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">4.</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. B. Anand</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Civil Engineering (Full-time)</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Geoinformatics based groundwater resources Development planning and Promoting recharge in Lower Bhavani basin, Erode District, Tamil Nadu</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. D. Karunanidhi</td>
                  </tr>
                  <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">5.</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Ms. Christina Marcus</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">S&H (Geology) (Full-time)</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Hydrogeochemical Investigation and GIS based Groundwater Modeling of Thutha sub-basin, Bharathapuzha River, Kerala</td>
                    <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. D. Karunanidhi</td>
                  </tr>
                </tbody>
              </table>
            </div>

            
          </div>
        );
        }
        return (
          <div className="tab-pane">
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Anna University Recognised Research Centres</h3>
            <div className="space-y-4 mb-8">
              {[
                { label: "Department of Electronics and Communication Engineering", file: "research/Research Center approval_ECE.pdf" },
                { label: "Department of Computer Science Engineering", file: "research/research_center_cse.pdf" },
                { label: "Department of Electrical and Electronics Engineering", file: "research/Research centre Approval_EEE.pdf" },
                { label: "Department of Mechanical Engineering", file: "research/Research center renewal_mech.pdf" },
                { label: "Department of Civil Engineering", file: "research/Civil_Research center.pdf" },
                { label: "Department of Physics", file: "research/Research Supervisor and Scholar details.pdf" }
              ].map((item, idx) => (
                <div key={idx} className="w-full transition-all duration-300 ease-in-out border border-[#ccc] bg-[#f9fafb] rounded-xl overflow-hidden hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] hover:border-[#00854a] hover:bg-white flex items-center justify-between p-4 group">
                  <div className="flex items-start flex-1 min-w-0">
                    <ArrowIcon />
                    <div className="ml-3 text-gray-700 text-base font-medium">{item.label}</div>
                  </div>
                  <a href={item.file} target="_blank" rel="noopener noreferrer" className="shrink-0 ml-4 whitespace-nowrap flex items-center text-[#00854a] text-xs font-bold uppercase hover:bg-[#00854a] hover:text-[#ffdc52] px-3 py-1 rounded border border-[#00854a] transition-colors">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    View File
                  </a>
                </div>
              ))}
            </div>

            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Other Research Centres</h3>
            <div className="space-y-4 mb-8">
              <div className="w-full transition-all duration-300 ease-in-out border border-[#ccc] bg-[#f9fafb] rounded-xl overflow-hidden hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] hover:border-[#00854a] hover:bg-white flex items-center justify-between p-4 group">
                <div className="flex items-start flex-1 min-w-0">
                  <ArrowIcon />
                  <div className="ml-3 text-gray-700 text-base font-medium">Centre for Geoinformatics and Water Technology</div>
                </div>
                <button 
                  onClick={() => setViewingCenterDetails("water")}
                  className="shrink-0 ml-4 whitespace-nowrap flex items-center text-[#00854a] text-xs font-bold uppercase hover:bg-[#00854a] hover:text-[#ffdc52] px-3 py-1 rounded border border-[#00854a] transition-colors">
                  View Details
                </button>
              </div>
            </div>

            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">List Of Research Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Dr. Kannammal K.E", "Dr. Sundararajan.T.V.P", "Dr. Somasundharam.D", "Dr. Kumaresan.N",
                "Dr. Sundar.G", "Dr. Balasubramaniam.P.M", "Dr. Murthi.P", "Dr. Karunanidhi.D",
                "Dr. Manian. R", "Dr. Palanichamy.R", "Dr. Ravikumar.A.R", "Dr. Mohammed Bak.K",
                "Dr. Sundharapandiyan.S", "Dr. Raneesh.K.Y", "Dr. Manikandan.P", "Dr. Dhanabal. S",
                "Dr. Navaneedhapandiya Raj.K", "Dr. David Stephan.A", "Dr. Kandavelu.V", "Dr. Sameena.Y"
              ].map((name, idx) => (
                <div key={idx} className="flex items-start">
                  <ArrowIcon />
                  <div className="ml-3 text-gray-700 text-base">{name}</div>
                </div>
              ))}
            </div>

            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Number of Ph.D's Awarded</h3>
            
            <h4 className="text-[#00854a] font-bold mt-6 mb-2 uppercase text-lg text-center">Automobile Engineering</h4>
            <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of the PhD scholar</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Title of the thesis</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Reg. Year</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Award Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. G.Vairamuthu</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Experimental investigations on the influence of properties of Calophyllum inophyllum biodiesel on performance, combustion, and emission characteristics of a DI diesel engine</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">2012</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">2016</td>
                </tr>
              </tbody>
            </table>
            </div>

            <h4 className="text-[#00854a] font-bold mt-6 mb-2 uppercase text-lg text-center">CHEMISTRY</h4>
            <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of the PhD scholar</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Title of the thesis</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Reg. Year</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Award Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">D. Kalaiselvi</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Characterization & adsorption eradication of recalcitrant dyes from aqueous media in eco-friendly way</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">June 2010</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Aug 2016</td>
                </tr>
              </tbody>
            </table>
            </div>

            <h4 className="text-[#00854a] font-bold mt-6 mb-2 uppercase text-lg text-center">Civil Engineering</h4>
            <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of the PhD scholar</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Title of the thesis</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Reg. Year</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Award Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr.D.Karunanidhi</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Integrated remote sensing and GIS based hydrogeology studies in Omalur tk salem dt.</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Oct 2009</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">2014</td>
                </tr>
              </tbody>
            </table>
            </div>

            <h4 className="text-[#00854a] font-bold mt-6 mb-2 uppercase text-lg text-center">Electrical and Electronics Engineering</h4>
            <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of the PhD scholar</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Title of the thesis</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Reg. Year</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Award Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">S.Senthilkumar</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Certain Investigations on medical image compression</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Jan 2010</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">June 2015</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">K.Indiradevi</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Implementation of Image fusion method in digital image processing</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Apr 2007</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">June 2015</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">P.M.Balasubramaniam</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Assessment And Investigation On Harmonic Mitigation And Design Of DC Voltage Controllers For Enhancing Power Quality</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">July 2008</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Aug 2016</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">S.Charles</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">A Low cost Reconfigurable FPGA based 3phase SAPF for current harmonic elimination and power Factor Constraints</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Jan 2011</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Feb 2017</td>
                </tr>
              </tbody>
            </table>
            </div>

            <h4 className="text-[#00854a] font-bold mt-6 mb-2 uppercase text-lg text-center">Electronics and Communication Engineering</h4>
            <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of the PhD scholar</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Title of the thesis</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Reg. Year</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Award Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">S.Bhavani</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Comparison of Fractal Coding Methods for medical Image compression</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Jan 2009</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">June 2014</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr.Somasundaram.S</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Certain Investigations on medical image compression</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Jan 2012</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">June 2016</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr.Rajmohan</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Design of Binary Multipliers and their Reversible Realization using Toffoli gates</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">July 2012</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">June 2017</td>
                </tr>
              </tbody>
            </table>
            </div>

          </div>
        );
      case "grants":
        return (
          <div className="tab-pane">
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Grants Fetched</h3>
            <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of Principal Investigator</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of the research project</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Amount / Fund received</th>
                  <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of funding agency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">K. Navaneetha Pandiyaraj</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Surface Modification and Characterization of Polymeric Films Using Glow Discharge Plasma to Improve Their Blood and Cell Compatibility for Vascular Implants</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">18.18 Lakhs</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DST-SERB, Govt of India</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. S. Charles</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Automatic Inspection Method</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">50,000</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Effica Automations Ltd</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. S. Charles</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Automatic pattern matching and Fault identification System</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">50,000</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Ranbo Castings Ltd</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. S. Charles</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">LabVIEW based VFD fed Three Phase Induction Motor control and data loging</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">50,000</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">RV Machine tools</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. A. Manimaran</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DNA binding and NLO applications of novel bi nuclear Ru(II)bipyridyl Schiff base complexes: synthesis, structural characterisation, electrochemical and antibacterial activity studies.</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Rs. 22.01 L</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DST SERB</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">A. David Stephen</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Ab initio prediction of crystal structure of molecular solids</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">14.64 Lakhs</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DST-SERB</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">K. Navaneetha Pandiyaraj</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Development of bio functional coatings on the surface of polymeric films through cold atmospheric pressure plasma (CAPP) for biomedical applications</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">24,95,000</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DAE-BRNS, Govt of India</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">G. Mari Prabu</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Fully automated solar agri-drone with advance communication system</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Rs.37,240</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Tech Mahindra</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Prof. B. Vinodh Kumar</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">PLC Industrial Automation Consultancy work</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Rs.40,000</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Unitechnique Bangladesh</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. D. Karunanidhi</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Geospatial technology in promoting recharge in lower Bhavani basin in between Bhavanisagar to Bhavani town, Erode district, Tamil Nadu.</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Rs 14,80,000/-</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">NRDMS- DST</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. D. Karunanidhi</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Identification of hydro chemical occurrence of high fluids in bed rock aquifers in shanmuga nathi sub-basin, Amaravathi river, Tamil nadu - Special stressed and remidation by managed aquifer recharge.</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">RS 26,27,200/-</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DST</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. T.V.P. Sundararajan</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Internet of everything for ubiquitous healthcare system</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">40,000</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">ICMR</td>
                </tr>
                <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none">
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">K. Navaneetha Pandiyaraj</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Deprivation of dye and pharmaceutical compound from textile and pharmaceutical industry waste water through pin-to-plate dielectric barrier discharge plasma assisted with activated catalysis for agricultural application</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">37.44 Lakhs</td>
                  <td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">DST-SERB, Govt of India</td>
                </tr>
              </tbody>
            </table>
            </div>

          </div>
        );
      case "ipr":
        return (
          <div className="tab-pane">
            <div className="flex bg-gray-50/50 p-1.5 rounded-2xl mb-10 w-fit border border-gray-100 shadow-sm gap-1">
              {[
                { id: "about", label: "About IPR" },
                { id: "vision", label: "Vision & Mission" },
                { id: "panel", label: "IPR Cell Panel Members" }
              ].map((sub) => (
                <button
                   key={sub.id}
                   onClick={() => setActiveIprSubTab(sub.id)}
                   className={`px-6 py-2.5 text-sm font-black uppercase tracking-wider transition-all duration-400 rounded-xl flex items-center gap-2 ${
                     activeIprSubTab === sub.id
                       ? "bg-[#00854a] text-[#ffdc52] shadow-[0_4px_12px_-2px_rgba(0,133,74,0.3)] scale-105 z-10"
                       : "text-gray-500 hover:text-[#00854a] hover:bg-white hover:shadow-sm"
                   }`}>
                   {sub.label}
                 </button>
              ))}
            </div>

            {activeIprSubTab === "about" && (
              <div>
                <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Intellectual Property Rights (IPR) Cell</h3>
                <p className="text-gray-700 leading-relaxed text-base text-justify">
                  Intellectual property Rights plays an important role in Technical and Engineering Institutions.
                  The tangible assets like inventions, designs, literary or artistic work, images, symbols and other
                  creative and innovative ideas are more valuable than physical assets in an institution.
                  SIET IPR Cell is committed to encourage, protect, manage and commercialize Intellectual Property
                  such as Patent, Copyright, Trademark etc. generated through the College. The IPR cell creates an
                  encouraging environment in the academics by providing suitable training, research and awareness
                  programs for students and faculties. The IPR Cell safeguards their inventions and commercializes
                  their intellectual property with legal and expert support wherever necessary. Faculty and students
                  of different disciplines are actively participating in the Patent filing process and IPR activities.
                </p>
              </div>
            )}

            {activeIprSubTab === "vision" && (
              <div className="py-4 max-w-3xl mx-auto">
                {/* VISION */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-[#00854a] uppercase tracking-widest mb-2">Vision</h2>
                  <div className="w-12 h-1 bg-[#ffdc52] mx-auto mb-6 rounded-full"></div>
                  <p className="text-gray-700 leading-relaxed text-base italic text-center">
                    To become a center of excellence in creating and protecting intellectual property that transforms innovative ideas into socio-economic benefits.
                  </p>
                </div>

                {/* MISSION */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-extrabold text-[#00854a] uppercase tracking-widest mb-2">Mission</h2>
                  <div className="w-12 h-1 bg-[#ffdc52] mx-auto mb-6 rounded-full"></div>
                  <p className="text-gray-700 text-base mb-8">To achieve the vision, the IPR Cell will:</p>
                </div>

                <div className="space-y-5">
                  {[
                    "To create awareness among faculty and students about Intellectual Property Rights.",
                    "To provide institutional support for patent filing and registration.",
                    "To facilitate industry-academia collaboration for technology transfer."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#00854a] text-white flex items-center justify-center text-xs font-bold">
                        M{idx + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed text-base pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeIprSubTab === "panel" && (
              <div>
                <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">IPR Cell Panel Members</h3>
                <div className="max-w-6xl mx-auto mb-10 bg-white rounded-2xl shadow-md overflow-hidden">
<table className="w-full border-separate border-spacing-0 mt-6 text-[0.95rem] border border-[#ccc] rounded-2xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <thead>
                <tr>
                      <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Sr. No.</th>
                      <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Name of Member</th>
                      <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">Member type</th>
                      <th className="bg-gradient-to-br from-[#00854a] to-[#167436] text-[#ffdc52] px-5 py-[18px] text-left uppercase font-extrabold text-sm tracking-[0.1em] border-b-2 border-[#ffdc52]">KEY ROLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">1.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. S. THANGAVELU, Chairman, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Chairman</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Chairman, IPR Cell</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">2.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. N. K. Sakthivel, Principal, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">3.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. S.P. SUBRAMANIYAN, Deputy Controller of Patent, Patent Office, Chennai</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Patent Expert</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">4.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. R. SELVA KUMAR, Former Professor of Clinical Biochemistry, Vellore</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Innovation Expert</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">5.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. A.V. GNANASAMBANDAM, CEO, TBI, Agri Business Incubation Society, TNAU, Coimbatore</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Innovation Expert</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">6.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. SIVAKUMAR PALANISWAMY, CEO, MABIF (NABARD) Madurai, Tamil Nadu</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">External Expert - Ecosystem Enabler</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">7.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Mr. NRR. VIJAYKUMAR, Founder Passion, Coimbatore</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">External Expert - Ecosystem Enabler</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">8.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. S. SHANMUGASUNDARAM, Professor, Dept. Biotechnology, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Biotechnology</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">9.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. K. NAVANEETHA PANDIYARAJ, Professor, Dept. of Physics, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Nano Science and Technology</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">10.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. RANEESH K Y, Associate Professor and Head Dept. of Agricultural Engineering, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Agricultural Engineering</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">11.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. SHAKILA, M, Professor and Head, Dept. of Food, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Food Technology</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">12.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. V. DOOSLIN MERCY BAI, Professor and Head, Dept. of Biomedical Engineering, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Biomedical Engineering</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">13.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Prof. M. SUJITHA, Professor and Head, Dept. Biotechnology, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Biotechnology</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">14.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. A.R. RAVI KUMAR, Professor and Head, Dept. Mechanical Engineering, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Mechanical Engineering</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">15.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. G. SUNDAR, Associate Professor and Head Dept. of Electrical and Electronics, Engineering (EEE), SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Electrical and Electronics Engineering (EEE)</td></tr>
                    <tr className="group even:bg-[#00854a]/[0.02] hover:bg-[#ffdc52]/10 [&:last-child>td]:border-none"><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">16.</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Dr. S. BHAVANI, Professor and Head Dept. of ECE, SIET</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Member</td><td className="border-b border-[#f9fafb] px-5 py-[18px] text-[#585a61] align-middle transition-colors group-hover:text-[#00854a]">Subject Expert Electronics and Communication Engineering</td></tr>
                  </tbody>
                </table>
                </div>
              </div>
            )}
          </div>
        );
      case "journals":
        return (
          <div className="tab-pane">
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">International Journals</h3>
            <p className="text-gray-700 text-base mb-6">We take pride in managing and publishing these prestigious international journals:</p>
            <div className="space-y-6">
              {[
                {
                  title: "International Journal of Civil, Environmental and Agricultural Engineering (IJCEAE)",
                  desc: "The International Journal of Civil, Environmental and Agricultural Engineering (IJCEAE) publishes original research findings and ideas of various scientists and practising engineers in the field of Civil, Environmental and Agricultural Engineering. It briefly covers various technological researches on the present developmental domain of highly specialized fields like, geo-technical engineering, earthquake engineering, structural engineering, water management, soil conservation practices, traffic & highway engineering, climate change, wastewater treatment, energy conservation, environmental pollutions, irrigation, hydrogeology, dairy & food engineering, farm power & machineries, post-harvest technology, and so on."
                },
                {
                  title: "International Journal of Computer Communication and Informatics (IJCCI)",
                  desc: "The aim of the Journal is to serves as a platform to exhibit the skills of research scholars, teaching faculty, industrialists and professionals, and also publishes their research work in all manifestations of Computer Science, Electrical, Electronics and Information Technology disciplines. It publishes articles which contribute new theoretical and practical results in all areas of Computer Science, Electrical, Electronics and Information Technology. Papers reporting original research and innovative applications from all parts of the world are welcome."
                },
                {
                  title: "Frontiers in Advanced Materials Research (FAMR)",
                  desc: "Frontiers in Advanced Materials research is an international open access journal and publishing novel experimental and theoretical cutting edge of broad interest to the materials community. This journal provides a forum for materials scientists, chemists, physicists, ceramicists, engineers, metallurgists on the most important topics in the field of materials."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start text-left">
                  <ArrowIcon />
                  <div className="ml-3">
                    <p className="text-gray-700 leading-relaxed text-base text-justify">
                      <span className="font-bold underline decoration-[#00854a]/30">{item.title}:</span> {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#ffdc52]/10 border-l-4 border-[#00854a]">
              <p className="text-[#00854a] font-bold">
                Visit our Journal Website: <a href="http://www.sietjournals.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00854a]/80 transition-colors">www.sietjournals.com</a>
              </p>
            </div>
          </div>
        );
      case "conferences": {
        if (selectedConference) {
          const confs = {
            "ICCCI": {
              title: "International Conference on Computer Communication and Informatics (ICCCI 2020)",
              desc: "The 2020 International Conference on Computer Communication and Informatics (ICCCI 2020) aims to provide an outstanding opportunity for both academic and industrial communities alike to address new trends and challenges and emerging technologies on topics relevant to today’s fast moving areas of Computer, Communication and Informatics. The conference will feature invited talks and referred paper presentations. The vision of ICCCI 2020 is to develop foster communication among researchers and practitioners working in a wide variety of areas in communication and informatics with a common interest.",
              link: "www.iccci.in"
            },
            "ICAPST": {
              title: "International Conference on Advances in Plasma Science and Technology (ICAPST)",
              desc: "The conference is focused on plasma processing of materials using both non-thermal and thermal plasmas. Plasma processing is a promising technology to create surfaces with novel functional capabilities and characteristics for many emerging applications in a more rationally and eco-friendly manner. Plasma technology can be effectively and efficiently deployed for a wide range of applications from catalysis, sensors, medicine, self-cleaning surfaces, displays, fundamental and applied studies of surface, interface processes of critical importance to address the emerging technological challenges. Plasma processing is widely recognized as the key element in materials processes of primary importance in the health, energy, electronics, and environmental sectors. This conference addresses the role of plasma in several of these applications and aims to promote cross-disciplinary interaction by bringing together experts from various fields of Plasma Physics, Materials Science, Food Technology, Agricultural Science, Pharmaceutical Science, Biotechnology and Biomedical Engineering. Experts from various Universities and International labs will be sharing their research experience and knowledge-base with the young faculty and research scholars. An important objective of this conference is to foster national and international collaborations.",
              link: "www.icapst.in"
            },
            "ICFBB": {
              title: "International Conference on Future Prospects of Biotechnology and Bio-Medical Applications (ICFBB 2020)",
              desc: "The first International Conference on Future Prospects of Biotechnology and Bio-Medical Applications (ICFBB 2020) will be held during May 14-16, 2020 in Sri Shakthi Institute of Engineering and Technology, Coimbatore, Tamilnadu, India This conference is going to be an established event attracting global participant’s intent on sharing, exchanging and exploring new avenues of Biomedical and Biotechnological Engineering, related research and latest developments. Healthcare across the globe is facing major changes than a decade ago, thanks to the development of sophisticated medical technologies which have replaced the helping hand and healing touch of physicians. The complex spectrum of medical technology involves interplay of engineering, life sciences, clinical and managerial knowledge at its best for its development. This conference is an ideal forum to exchange innovative ideas and thoughts with researchers across the globe. The aim of the First International Conference on Future Prospects of Biotechnology and Bio- Medical Applications (ICFBB 2020) is to promote quality research and real-world impact in an atmosphere of true international cooperation between scientists and engineers by bringing together again the world class researchers, international communities and industrial heads to discuss the latest developments and innovations in the field of Biomedical and Biotechnological Engineering. This invitation is open for all academicians, research scholars, Post-Docs, PG and UG students working in the field of Biomedical Engineering and Biotechnology related areas.",
              link: "www.icfbb.in"
            },
            "ICEECT": {
              title: "International Conference on Electrical, Electronics and Communication Technology (ICEECT)",
              desc: "The International Conference on Electrical, Electronics and Communication Technology aims in providing a premier interdisciplinary platform for leading academic scientists, industry peers, research fellows and students to share the latest research and information on recent innovations, practical challenges encountered and solutions adopted in the fields of Electrical, Electronics and Communication Engineering. Future advances in multiple fields of science and engineering will be promoted through quality research. The conference will provide networking opportunities for global collaborations, develop suitable solutions for diverse applications and modern technologies, and help in providing solutions for sustainable development All submitted papers will be reviewed by double blind peer review process to maintain high quality publications in Springer Indexed Journal of Intelligence and Robotics Systems (SCOPUS), International Journal of Electronics and Journal of Advanced Research in Dynamical & Control Systems.",
              listTitle: "The accepted papers with extended version will be considered for publication in:",
              list: [
                "Springer Indexed 'Lecture Notes in Electrical Engineering', SCOPUS.",
                "Springer Journal of Intelligence and Robotics Systems, SCOPUS.",
                "International Journal of Electronics.",
                "Journal of Advanced Research in Dynamical & Control Systems."
              ],
              link: "www.ic-eect.in"
            },
            "ICAEFT": {
              title: "International Conference on Innovative Agricultural Engineering and Food Technology Strategies for Profitable Agriculture (ICAEFT)",
              desc: "Agricultural engineering and Food technology are the two primal pitches that are being transformed from the inside out by innovative technology and practices. These innovative practices and technologies may very well prove to be more than just the future of agriculture and food technology. — they may be the very keys to the survival of the human race. This conference addresses the current innovative approaches in the unique areas of agriculture and food technology and their applications towards attaining effectiveness. It aims to promote a multi-faceted interaction amongst experts from arenas of Agriculture, Food Technology and Biotechnology. Academic and research experts from several professional organizations would share a mutual platform to raise the curtains to an impressive experiential research experience to ignite the young minds of students, faculty, industry personnel and research scholars. An important objective of this conference is to reassure national and international collaborations towards realising the professional competence of enhancing agricultural productivity to attain food safety and security.",
              link: "www.icaeft.in"
            },
            "ICRACM": {
              title: "International Conference on Recent Advances in Civil and Mechanical Engineering (ICRACM 2020)",
              desc: "International Conference on Recent Advances in Civil and Mechanical Engineering 2020 (ICRACM 2020) aims at exploring the new horizon on innovation from distinguished researchers, eminent professionals from academia and industry to address new trends and challenges and emerging technologies. This event will be a platform to showcase and deliberate research work, studies and contribution consists of keynotes, lectures given by eminent personalities and stake holders. The ICRACM – 2020 event will help participants to sharpen their skills and refine their ideas as well as approaches by meeting with their peers and counterparts. ICRACM 2020 aims gathering of both industrial and academic professional from across the world in the fields of Civil and Mechanical Engineering. It provides a major forum for the exchange of information among practising professionals from all over the world.",
              link: "www.icacm.in"
            }
          };

          const c = confs[selectedConference];
          return (
            <div className="tab-pane">
              <button 
                onClick={() => setSelectedConference(null)}
                className="mb-6 flex items-center text-[#00854a] font-bold text-base uppercase hover:underline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Conferences
              </button>
              <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">{c.title}</h3>
              <p className="text-gray-700 leading-relaxed text-base text-justify mb-6">{c.desc}</p>
              
              {c.list && (
                <div className="mb-8">
                  <h4 className="text-[#00854a] font-bold text-base uppercase mb-3">{c.listTitle}</h4>
                  <div className="space-y-2">
                    {c.list.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <ArrowIcon />
                        <div className="ml-3 text-gray-700 text-base">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-[#ffdc52]/10 border-l-4 border-[#00854a]">
                <p className="text-[#00854a] font-bold">
                  For registration & more details: <a href={`http://${c.link}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#00854a]/80 transition-colors">{c.link}</a>
                </p>
              </div>
            </div>
          );
        }
        return (
          <div className="tab-pane">
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">International Conferences</h3>
            <p className="text-gray-700 text-base mb-6">The R&D Cell successfully organizes the following annual international conferences:</p>
            <div className="space-y-4">
              {[
                { id: "ICCCI", label: "International Conference on Computer Communication and Informatics (ICCCI)" },
                { id: "ICAPST", label: "International Conference on Advances in Plasma Science and Technology (ICAPST)" },
                { id: "ICFBB", label: "International Conference on Future Prospects of Biotechnology & Biomedical Applications (ICFBB)" },
                { id: "ICEECT", label: "International Conference on Electrical, Electronics and Communication Technology (ICEECT)" },
                { id: "ICAEFT", label: "International Conference on Innovative Agricultural Engineering and Food Technology Strategies for Profitable Agriculture (ICAEFT)" },
                { id: "ICRACM", label: "International Conference on Recent Advances in Civil and Mechanical Engineering (ICRACM)" }
              ].map((c, idx) => (
                <div key={idx} className="w-full transition-all duration-300 ease-in-out border border-[#ccc] bg-[#f9fafb] rounded-xl overflow-hidden hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] hover:border-[#00854a] hover:bg-white flex items-center justify-between p-4 group">
                  <div className="flex items-start flex-1 min-w-0">
                    <ArrowIcon />
                    <div className="ml-3 text-gray-700 text-base font-medium">{c.label}</div>
                  </div>
                  <button 
                    onClick={() => setSelectedConference(c.id)}
                    className="shrink-0 ml-4 whitespace-nowrap flex items-center text-[#00854a] text-xs font-bold uppercase hover:bg-[#00854a] hover:text-[#ffdc52] px-3 py-1 rounded border border-[#00854a] transition-colors">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      }
      case "publications":
        return (
          <div className="tab-pane">
            <h3 className="text-[#00854a] text-[1.5rem] font-extrabold mt-0 mb-7 uppercase relative inline-block transition-colors duration-300 ease-in-out after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full">Publications & Patents</h3>
            <p className="text-gray-700 text-base mb-6">Access the detailed reports of our academic output for the recent years:</p>
            <div className="space-y-4">
              {[
                { 
                  title: "Journal Publication Details", 
                  type: "General",
                  link: "https://drive.google.com/drive/folders/1quPgq2ZEf-SjGxK4_Nc4kLbOGWpIzfic" 
                },
                { 
                  title: "Journal Publication Details 2024-2025", 
                  type: "Journal",
                  link: "https://docs.google.com/spreadsheets/d/1kRyCGoDXEQ-BSp4TNs69LXM3_FSPeKg-H9QEfocJ-mA/edit?gid=949055814#gid=949055814"
                },
                { 
                  title: "Journal Publication Details 2023-2024", 
                  type: "Journal",
                  link: "https://docs.google.com/spreadsheets/d/1htKJYTyHOrZsoRcZKWwlB6fVYYvnaPLq/edit?gid=949055814#gid=949055814"
                },
                { 
                  title: "Patents 2023-2024", 
                  type: "Patent",
                  link: "https://docs.google.com/spreadsheets/d/1Aup-JqOOETwPB3F4GUZ_Ni2W-35b-fnyIndY27jrOPI/edit?gid=1590793968#gid=1590793968"
                }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link || "#"} 
                  target={item.link ? "_blank" : "_self"}
                  rel={item.link ? "noopener noreferrer" : ""}
                  className="transition-all duration-300 ease-in-out border border-[#ccc] bg-[#f9fafb] rounded-xl overflow-hidden hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] hover:border-[#00854a] hover:bg-white flex items-center text-left p-4 rounded-lg transition-all group no-underline">
                  <ArrowIcon />
                  <div className="ml-4 flex-1">
                    <p className="text-[#00854a] font-bold text-base group-hover:underline">{item.title}</p>
                    <p className="text-gray-500 text-[12px] uppercase tracking-wider mt-1">{item.type} Details</p>
                  </div>
                  <div className="text-[#00854a]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      case "patents":
        return (
          <div className="tab-pane">
            <h2 className="text-[#00854a] text-xl font-bold mb-6 uppercase tracking-tight">Patent Details</h2>
            
            <div className="space-y-4">
              {[
                { label: "Patent Details", file: "research/Details_of_Patents.pdf" },
                { label: "Format Patent Details", file: "research/Format_Patent_Details.pdf" }
              ].map((item, idx) => (
                <div key={idx} className="w-full transition-all duration-300 ease-in-out border border-[#ccc] bg-[#f9fafb] rounded-xl overflow-hidden hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] hover:border-[#00854a] hover:bg-white flex items-center justify-between p-4 group">
                  <div className="flex items-start flex-1 min-w-0">
                    <ArrowIcon />
                    <div className="ml-3 text-gray-700 font-medium">{item.label}</div>
                  </div>
                  <a href={item.file} target="_blank" rel="noopener noreferrer" className="shrink-0 ml-4 whitespace-nowrap flex items-center text-[#00854a] text-xs font-bold uppercase hover:bg-[#00854a] hover:text-[#ffdc52] px-3 py-1 rounded border border-[#00854a] transition-colors">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    View File
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return <div>Select a topic from the sidebar.</div>;
    }
  };

  return (
    <div id="research" className="max-w-7xl mx-auto py-12 px-6 bg-white min-h-[calc(100vh-200px)]">
      <div className="mb-10 border-b-[3px] border-[#ffdc52] pb-4 flex justify-between items-center">
        <h2 className="text-4xl font-extrabold uppercase m-0 tracking-tight bg-gradient-to-r from-[#00854a] to-[#167436] bg-clip-text text-transparent inline-block">RESEARCH AND DEVELOPMENT CELL (R&D CELL)</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[64px] items-start w-full">
        <aside className="w-full lg:w-1/4 static lg:sticky lg:top-[100px] border-b-2 lg:border-b-0 lg:border-r-2 border-[#f9fafb] pr-0 lg:pr-8 pb-8 lg:pb-0 flex-shrink-0">
          <ul className="space-y-4">
            {menu.map((item) => (
              <li key={item.id}>
                <div
                  className={`px-5 py-[14px] cursor-pointer text-[#00854a] font-bold text-[0.85rem] uppercase transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-xl mb-2.5 border border-transparent flex items-center gap-3 no-underline relative overflow-hidden hover:bg-[#00854a]/[0.04] hover:text-[#06864B] hover:translate-x-2 hover:border-[#00854a]/10 [&.active]:bg-[#00854a] [&.active]:text-[#ffdc52] [&.active]:border-[#00854a] [&.active]:shadow-[0_8px_20px_-6px_rgba(0,133,74,0.4)] [&.active]:scale-105 [&.active]:translate-x-1 ${
                    activeTab === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(item.id)}>
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1 w-full lg:w-3/4 min-w-0 space-y-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Research;
