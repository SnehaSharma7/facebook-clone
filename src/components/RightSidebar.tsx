import SponsoredAds from "./SponsoredAds";
import ContactsList from "./ContactsList";

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block w-72">
      <div className="sticky top-14 h-[calc(100vh-56px)] overflow-y-auto p-4">
        <SponsoredAds />
        <hr className="my-4" />
        <ContactsList />
      </div>
    </aside>
  );
}
