import { useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header />

      {/* Routes will render here */}
      <AppRoutes />

      {isHomePage && (
        <div className="elfsight-app-91c8d808-1161-4358-a834-a62791a58788" data-elfsight-app-lazy></div>
      )}

      <Footer />
    </>
  );
}

export default App; 