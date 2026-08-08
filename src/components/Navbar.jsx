import {
  MdHome,
  MdPerson,
  MdBuild,
  MdWork,
  MdMail,
} from "react-icons/md";

const navItems = [
  { id: "home", label: "Home", icon: MdHome },
  { id: "about", label: "About", icon: MdPerson },
  { id: "skills", label: "Skills", icon: MdBuild },
  { id: "projects", label: "Works", icon: MdWork },
  { id: "contact", label: "Contact", icon: MdMail },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 rounded-full border border-yellow-500/20 bg-[#131313]/90 backdrop-blur-xl px-8 py-4 shadow-2xl">
      <div className="flex items-center gap-10">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="group flex flex-col items-center text-gray-400 transition-all duration-300 hover:text-yellow-400"
          >
            <Icon size={22} />

            <span className="mt-1 hidden text-[10px] uppercase tracking-[0.2em] sm:block">
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}