import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Sidebar />
      <Navbar />
      {children}
    </>
  );
}

export default MainLayout;