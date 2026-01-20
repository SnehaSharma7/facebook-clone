import SidebarContent from "./SidebarContent";

export default function MobileSidebar({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="relative bg-white w-64 h-full p-4 shadow-lg">
        <SidebarContent onClick={onClose} />
      </aside>
    </div>
  );
}
