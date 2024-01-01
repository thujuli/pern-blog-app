import Container from "../atoms/Container/Container";
import Navbar from "../organisms/Navbar/Navbar";
import Sidebar from "../organisms/Sidebar/Sidebar";

export default function NavbarSidebar({ children }) {
  return (
    <>
      <Navbar />
      <Container className="pt-70">
        {children}
        <Sidebar />
      </Container>
    </>
  );
}
