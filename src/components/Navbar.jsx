import {
  MdHome,
  MdPerson,
  MdBuild,
  MdWork,
  MdMail,
} from "react-icons/md";

import { useActiveSection } from "../context/ActiveSectionContext";

const navItems = [
  { id: "home", label: "Home", icon: MdHome },
  { id: "about", label: "About", icon: MdPerson },
  { id: "skills", label: "Skills", icon: MdBuild },
  { id: "projects", label: "Works", icon: MdWork },
  { id: "contact", label: "Contact", icon: MdMail },
];

export default function Navbar() {
  const { activeSection } = useActiveSection();

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 rounded-full border border-yellow-500/20 bg-[#131313]/90 backdrop-blur-xl px-8 py-4 shadow-2xl">
      <div className="flex items-center gap-8">
        {navItems.map(({ id, label, icon: Icon }) => {
          const active = activeSection === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              className="group flex flex-col items-center transition-all duration-300"
            >
              <Icon
                size={22}
                className={
                  active
                    ? "text-yellow-400 scale-125"
                    : "text-gray-500 group-hover:text-yellow-400"
                }
              />

              <span
                className={`mt-1 text-[10px] uppercase tracking-[0.2em] hidden sm:block transition-all ${
                  active
                    ? "text-yellow-400"
                    : "text-gray-500 group-hover:text-yellow-400"
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}