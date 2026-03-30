import TopBar from "./TopBar.jsx";
import AnnouncementBar from "./AnnouncementBar.jsx";
import Navbar from "./Navbar.jsx";

const Header = () => {
  return (
    <>
      <TopBar />
      <div className="sticky top-0 z-[100] bg-white">
        <Navbar />
      </div>
    </>
  );
};

export default Header;