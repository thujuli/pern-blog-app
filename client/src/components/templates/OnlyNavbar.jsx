import Navbar from "../organisms/Navbar/Navbar";

export default function OnlyNavbar({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
