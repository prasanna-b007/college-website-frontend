import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import VisionandMission from "../components/pages/AboutUs/VisionandMission";
import Philosophy from "../components/pages/AboutUs/Philosophy";
import CoreBeliefs from "../components/pages/AboutUs/CoreBeliefs";
import ProgramOutcomes from "../components/pages/AboutUs/ProgramOutcomes";
import CoreValues from "../components/pages/AboutUs/CoreValues";
import TheChairmansDesk from "../components/pages/AboutUs/TheChairmansDesk";
import FromthePrincipal from "../components/pages/AboutUs/FromthePrincipal";
import Research from "../components/pages/research/Research";

// Department Imports
import AgriculturalEngineering from "../components/pages/academics/departments/Agricultural_Engineering";
import ArtificialIntelligenceAndDataScience from "../components/pages/academics/departments/Artificial Intelligence and Data Science";
import ArtificialIntelligenceAndMachineLearning from "../components/pages/academics/departments/Artificial Intelligence and Machine Learning";
import BiotechnologyEngineering from "../components/pages/academics/departments/Biotechnology Engineering";
import CivilEngineering from "../components/pages/academics/departments/Civil Engineering";
import ComputerScienceAndEngineering from "../components/pages/academics/departments/Computer Science and Engineering";
import CyberSecurity from "../components/pages/academics/departments/Cyber Security";
import ElectricalAndElectronicsEngineering from "../components/pages/academics/departments/Electrical and Electronics Engineering";
import FoodTechnology from "../components/pages/academics/departments/Food Technology";
import InformationTechnology from "../components/pages/academics/departments/Information Technology";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/vision-mission" element={<VisionandMission />} />
      <Route path="/program-outcomes" element={<ProgramOutcomes />} />
      <Route path="/core-values" element={<CoreValues />} />
      <Route path="/philosophy" element={<Philosophy />} />
      <Route path="/core-beliefs" element={<Philosophy />} />
      <Route path="/core-beliefs-institutional" element={<CoreBeliefs />} />
      <Route path="/chairmans-desk" element={<TheChairmansDesk />} />
      <Route path="/from-the-principal" element={<FromthePrincipal />} />
      <Route path="/research" element={<Research />} />
      
      {/* Department Routes */}
      <Route path="/dept/agri" element={<AgriculturalEngineering />} />
      <Route path="/dept/ai-ds" element={<ArtificialIntelligenceAndDataScience />} />
      <Route path="/dept/ai-ml" element={<ArtificialIntelligenceAndMachineLearning />} />
      <Route path="/dept/biotech" element={<BiotechnologyEngineering />} />
      <Route path="/dept/civil" element={<CivilEngineering />} />
      <Route path="/dept/cse" element={<ComputerScienceAndEngineering />} />
      <Route path="/dept/cyber" element={<CyberSecurity />} />
      <Route path="/dept/eee" element={<ElectricalAndElectronicsEngineering />} />
      <Route path="/dept/food" element={<FoodTechnology />} />
      <Route path="/dept/it" element={<InformationTechnology />} />

      {/* Redirect /about to /vision-mission*/}
      <Route path="/about" element={<Navigate to="/vision-mission" replace />} />
    </Routes>
  );
}

export default AppRoutes;