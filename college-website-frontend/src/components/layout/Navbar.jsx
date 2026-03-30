import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
        setActiveSubMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const menuConfig = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      submenu: [
        { name: "Vision And Mission", link: "/vision-mission" },
        { name: "Core Beliefs", link: "/core-beliefs-institutional" },
        { name: "The Chairman's Desk", link: "/chairmans-desk" },
        { name: "From the Principal", link: "/from-the-principal" },
      ],
    },
    {
      name: "Admissions",
      submenu: [
        { name: "Undergraduate Programs", link: "/undergraduate" },
        { name: "Postgraduate Programs", link: "/postgraduate" },
        { name: "Admission Enquiry", link: "/enquiry" },
        { name: "Admission Referral", link: "/referral" },
      ],
    },
    {
      name: "Academics",
      submenu: [
        {
          name: "Departments",
          innerSubmenu: [
            { name: "Agricultural Engineering", link: "/dept/agri" },
            { name: "Artificial Intelligence and Data Science", link: "/dept/ai-ds" },
            { name: "Artificial Intelligence and Machine Learning", link: "/dept/ai-ml" },
            { name: "Biomedical Engineering", link: "/dept/biomedical" },
            { name: "Biotechnology", link: "/dept/biotech" },
            { name: "Civil Engineering", link: "/dept/civil" },
            { name: "Computer Science and Engineering", link: "/dept/cse" },
            { name: "Computer Science (Cyber Security)", link: "/dept/cyber" },
            { name: "Electrical and Electronics Engineering", link: "/dept/eee" },
            { name: "Electronics and Communication Engineering", link: "/dept/ece" },
            { name: "Food Technology", link: "/dept/food" },
            { name: "Information Technology", link: "/dept/it" },
            { name: "Mechanical Engineering", link: "/dept/mech" },
          ],
        },
        { name: "Academic Calendar", link: "/calendar" },
      ],
    },
    {
      name: "Placements",
      submenu: [
        { name: "Job Placements", link: "/placements/jobs" },
        { name: "Entrepreneurship", link: "/placements/entrepreneurship" },
        { name: "Higher Education", link: "/placements/higher-edu" },
        { name: "Government Services", link: "/placements/govt-services" },
      ],
    },
    {
      name: "#LifeatSriShakthi",
      submenu: [
        { name: "Student Clubs", link: "/life/clubs" },
        { name: "Flagship Events", link: "/life/events" },
        { name: "Influential Speakers", link: "/life/speakers" },
        { name: "Campus Experience", link: "/life/campus" },
        { name: "Learning Experience", link: "/life/learning" },
        { name: "Sports Experience", link: "/life/sports" },
        { name: "Central Library", link: "/life/library" },
      ],
    },
    {
      name: "Career @ SIET",
      submenu: [
        { name: "Faculty Recruitment Form", link: "/career/faculty" },
      ],
    },
    {
      name: "COE",
      submenu: [
        { name: "COE Portal", link: "/coe/portal" },
        { name: "Result", link: "/coe/result" },
        { name: "Transcript", link: "/coe/transcript" },
      ],
    },
    {
      name: "Accreditation",
      submenu: [
        { name: "Governance / Committees", link: "/accreditation/governance" },
        { name: "Mandatory Disclosure", link: "/accreditation/disclosure" },
        { name: "Statutory Declaration", link: "/accreditation/statutory" },
        { name: "NIRF", link: "/accreditation/nirf" },
        { name: "NAAC", link: "/accreditation/naac" },
        { name: "NBA", link: "/accreditation/nba" },
        { name: "IQAC", link: "/accreditation/iqac" },
        { name: "ARIIA Report", link: "/accreditation/ariia" },
      ],
    },
    { name: "Research", link: "/research" },
  ];

  // Desktop: hover open/close
  const handleMenuEnter = (name) => {
    if (!mobileMenuOpen) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveMenu(name);
      setActiveSubMenu(null);
    }
  };
  const handleMenuLeave = () => {
    if (!mobileMenuOpen) {
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
        setActiveSubMenu(null);
      }, 300); // 300ms delay before closing
    }
  };

  // Mobile: toggle on click/tap
  const toggleMenu = (name) => {
    setActiveMenu((prev) => (prev === name ? null : name));
    setActiveSubMenu(null);
  };
  const toggleSubMenu = (e, name) => {
    e.stopPropagation();
    setActiveSubMenu((prev) => (prev === name ? null : name));
  };

  const ChevronIcon = ({ open }) => (
    <svg
      className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );

  // Right-pointing arrow for items whose submenu opens to the side
  const RightChevronIcon = ({ open }) => (
    <svg
      className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <nav
      ref={navRef}
      className="w-full bg-gray-100 border-t border-gray-300 relative z-50"
      aria-label="Main navigation"
    >
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center justify-between px-6 py-3">
        <span className="text-sm font-bold text-gray-700">MENU</span>
        <button
          onClick={() => {
            setMobileMenuOpen((prev) => !prev);
            setActiveMenu(null);
            setActiveSubMenu(null);
          }}
          className="p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop & Mobile Navigation Links */}
      <ul
        className={`
          ${mobileMenuOpen ? "flex" : "hidden"} 
          lg:flex flex-col lg:flex-row lg:justify-between items-start lg:items-center 
          px-6 lg:py-3 text-sm font-medium text-gray-700 w-full 
          max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-visible
        `}
        role="menubar"
      >
        {menuConfig.map((item, index) => (
          <li
            key={index}
            className="w-full lg:w-auto relative group"
            role="none"
            onMouseEnter={() => handleMenuEnter(item.name)}
            onMouseLeave={handleMenuLeave}
          >
            {/* Top-level item */}
            {item.link && !item.submenu ? (
              <a
                href={item.link}
                className={`flex items-center py-2 lg:py-0 lg:px-2 w-full relative text-gray-700 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:text-[#00854a] hover:-translate-y-[2px] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full [&.active]:after:w-full [&.active]:text-[#00854a] [&.active]:font-bold ${activeMenu === item.name ? "active" : ""}`}
                role="menuitem"
              >
                {item.name}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => mobileMenuOpen && toggleMenu(item.name)}
                aria-haspopup="true"
                aria-expanded={activeMenu === item.name}
                className={`flex items-center justify-between py-2 lg:py-0 lg:px-2 w-full text-left cursor-pointer relative text-gray-700 transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:text-[#00854a] hover:-translate-y-[2px] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[3px] after:bg-[#ffdc52] after:rounded after:transition-[width] after:duration-400 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:after:w-full [&.active]:after:w-full [&.active]:text-[#00854a] [&.active]:font-bold ${activeMenu === item.name ? "active" : ""}`}
                role="menuitem"
              >
                <span>{item.name}</span>
                {item.submenu && <ChevronIcon open={activeMenu === item.name} />}
              </button>
            )}

            {/* Top-Level Dropdown */}
            {item.submenu && (
              <ul
                className={`${activeMenu === item.name ? "block" : "hidden"} lg:absolute lg:top-full lg:left-0 mt-2 bg-white lg:min-w-[220px] py-2 z-[100] w-full lg:w-max rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]`}
                role="menu"
                aria-label={`${item.name} submenu`}
              >
                {item.submenu.map((sub, subIdx) => (
                  <li
                    key={subIdx}
                    className="relative group/sub"
                    role="none"
                    onMouseEnter={() => !mobileMenuOpen && sub.innerSubmenu && setActiveSubMenu(sub.name)}
                    onMouseLeave={() => !mobileMenuOpen && sub.innerSubmenu && setActiveSubMenu(null)}
                  >
                    {sub.link && !sub.innerSubmenu ? (
                      <a
                        href={sub.link}
                        className="block w-full px-5 py-2.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-[#00854a] font-semibold text-[0.9rem] border-l-[3px] border-transparent hover:bg-[#00854a]/5 hover:text-[#167436] hover:translate-x-1 hover:border-l-[#ffdc52] hover:pl-6"
                        role="menuitem"
                      >
                        {sub.name}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => mobileMenuOpen && toggleSubMenu(e, sub.name)}
                        aria-haspopup="true"
                        aria-expanded={activeSubMenu === sub.name}
                        style={{ display: "flex" }}
                        className="!flex items-center justify-between w-full px-5 py-2.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-[#00854a] font-semibold text-[0.9rem] border-l-[3px] border-transparent hover:bg-[#00854a]/5 hover:text-[#167436] hover:translate-x-1 hover:border-l-[#ffdc52] hover:pl-6 text-left cursor-pointer"
                        role="menuitem"
                      >
                        <span className="flex-1">{sub.name}</span>
                        {sub.innerSubmenu && <RightChevronIcon open={activeSubMenu === sub.name} />}
                      </button>
                    )}

                    {/* Nested Sub-Dropdown (e.g. Departments) */}
                    {sub.innerSubmenu && (
                      <ul
                        className={`${activeSubMenu === sub.name ? "block" : "hidden"} lg:absolute lg:top-0 lg:left-full bg-white lg:min-w-[280px] py-2 z-[110] w-full lg:w-max rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]`}
                        role="menu"
                        aria-label={`${sub.name} submenu`}
                      >
                        {sub.innerSubmenu.map((inner, innerIdx) => (
                          <li key={innerIdx} role="none">
                            <a
                              href={inner.link}
                              className="block w-full px-5 py-2.5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-[#00854a] font-semibold text-[0.9rem] border-l-[3px] border-transparent hover:bg-[#00854a]/5 hover:text-[#167436] hover:translate-x-1 hover:border-l-[#ffdc52] hover:pl-6"
                              role="menuitem"
                            >
                              {inner.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
