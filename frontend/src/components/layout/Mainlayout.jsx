import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#0f172a",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />

        <main
          style={{
            flex: 1,
            padding: "24px",
            background: "#0f172a",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;