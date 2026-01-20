import contacts from "../data/contacts";

export default function ContactsList() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-600 mb-3">Contacts</h3>

      <ul className="space-y-2">
        {contacts.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-3 px-2 py-1 rounded-lg hover:bg-gray-200 cursor-pointer"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gray-300 rounded-full" />
              {user.online && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>
            <span className="text-sm">{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
