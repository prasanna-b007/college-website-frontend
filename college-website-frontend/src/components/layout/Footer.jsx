import React from "react";
import logo from "../../assets/Footer/College-Logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] border-t border-[#dcdcdc]">

      {/* MAIN GRID */}
      <div className="max-w-[1300px] mx-auto px-[40px] py-[50px] grid grid-cols-[1.2fr_1.8fr] gap-[70px] max-[900px]:grid-cols-1">

        {/* LEFT COLUMN */}
        <div className="text-center">

          <img
            src={logo}
            alt="Sri Shakthi Logo"
            className="w-[320px] mb-[15px] mx-auto"
          />

          <p className="text-[15px] text-[#6a6a6a] leading-[1.6]">
            Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai
          </p>

          <p className="text-[15px] text-[#6a6a6a] leading-[1.6]">
            Accredited by NBA (CSE, EEE, ECE, IT, MECH) & NAAC with A Grade
          </p>

          <p className="mt-[14px] text-[15px] text-[#555] leading-[1.8]">
            Sri Shakthi Nagar, L & T By-Pass,<br />
            Chinniyampalayam Post,<br />
            Coimbatore - 62.
          </p>

          <div className="mt-[16px] text-[15px]">

            <div className="my-[6px]">
              <span className="font-semibold text-[#333] mr-[6px]">
                Principal E-Mail:
              </span>
              <a
                href="mailto:principal@siet.ac.in"
                className="text-[#2d6bb3] ml-[4px] hover:underline"
              >
                principal@siet.ac.in
              </a>
            </div>

            <div className="my-[6px] text-[#2d6bb3]">
              ☎ +91 422 2369900
            </div>

            <div className="my-[6px] text-[#2d6bb3]">
              📱 +91 75041 69999 , +91 94446 20505
            </div>

            <div className="my-[6px]">
              ✉
              <a
                href="mailto:admissions@siet.ac.in"
                className="text-[#2d6bb3] ml-[4px] hover:underline"
              >
                admissions@siet.ac.in
              </a>
            </div>

          </div>


          {/* SOCIAL ICONS */}
          <div className="mt-[12px] flex justify-center gap-[16px]">

            <span className="text-[14px] text-[#444] cursor-pointer hover:text-[#0b7a3d]">
              f
            </span>

            <span className="text-[14px] text-[#444] cursor-pointer hover:text-[#0b7a3d]">
              t
            </span>

            <span className="text-[14px] text-[#444] cursor-pointer hover:text-[#0b7a3d]">
              in
            </span>

            <span className="text-[14px] text-[#444] cursor-pointer hover:text-[#0b7a3d]">
              yt
            </span>

            <span className="text-[14px] text-[#444] cursor-pointer hover:text-[#0b7a3d]">
              ig
            </span>

          </div>

        </div>


        {/* RIGHT COLUMN */}
        <div>

          <h3 className="text-[20px] font-semibold text-[#555] mb-[22px]">
            QUICK LINKS
          </h3>


          {/* QUICK LINKS GRID */}
          <div className="grid grid-cols-2 gap-[50px] max-[900px]:grid-cols-1">

            {/* COLUMN 1 */}
            <ul className="list-none p-0">

              {[
                "Value Added Courses",
                "Exam Cell",
                "Antiragging",
                "Mandatory Disclosure",
                "Code of Conduct Student",
                "Rules and Regulations",
                "Strategic Plan"
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-[14px] py-[9px] border-b border-[#cfcfcf] text-[#3a6ea5] cursor-pointer relative hover:text-[#0b7a3d] before:content-['›'] before:mr-[8px] before:text-[#666]"
                >
                  {item}
                </li>
              ))}

            </ul>


            {/* COLUMN 2 */}
            <ul className="list-none p-0">

              {[
                "Anna University Affiliation",
                "AICTE Approval",
                "NBA Accreditation",
                "NAAC Accreditation",
                "Online Grievance",
                "Professional Ethics Handbooks",
                "Audited Balance Sheet"
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-[14px] py-[9px] border-b border-[#cfcfcf] text-[#3a6ea5] cursor-pointer relative hover:text-[#0b7a3d] before:content-['›'] before:mr-[8px] before:text-[#666]"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>


      {/* COPYRIGHT BAR */}
      <div className="text-center py-[15px] text-[13px] text-[#666] border-t border-[#ddd] bg-[#ececec]">
        © {new Date().getFullYear()} Sri Shakthi Institute of Engineering and Technology. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;