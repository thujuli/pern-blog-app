import "./sidebarCardTitle.css";

export default function SidebarCardTitle({ children }) {
  return <h2 className="sidebarCardTitle">{children.toUpperCase()}</h2>;
}
