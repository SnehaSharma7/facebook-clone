import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white">
      <div className="sticky top-14 h-[calc(100vh-56px)] overflow-y-auto p-4">
        <SidebarContent />
      </div>
    </aside>
  );
}
