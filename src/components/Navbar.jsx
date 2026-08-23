import { MdHome, MdPerson, MdBuild, MdWork, MdMail } from "react-icons/md";

import { useActiveSection } from "../context/ActiveSectionContext";

const navItems = [
  { id: "home", label: "Home", icon: MdHome },
  { id: "about", label: "About", icon: MdPerson },
  { id: "skills", label: "Skills", icon: MdBuild },
  { id: "projects", label: "Projects", icon: MdWork },
  { id: "contact", label: "Contact", icon: MdMail },
];

export default function Navbar() {
  const { activeSection } = useActiveSection();

  return (
    <nav className="fixed left-1/2 top-6 z-200 w-[min(72vw,310px)] -translate-x-1/2 rounded-full border border-yellow-500/20 bg-[#131313]/60 px-2 py-1.5 shadow-2xl backdrop-blur-lg md:top-10 md:w-[min(80vw,420px)] md:px-4 md:py-2 lg:w-[min(60vw,560px)]">
      <div className="flex items-center justify-between gap-1 md:gap-2 lg:gap-4">
        {navItems.map(({ id, label, icon: Icon }) => {
          const active = activeSection === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              className="group flex flex-col items-center transition-all duration-300"
            >
              <Icon
                size={16}
                className={
                  active
                    ? "scale-125 text-yellow-400 md:text-[22px]"
                    : "text-gray-500 group-hover:text-yellow-400 md:text-[20px]"
                }
              />

              <span
                className={`mt-1 hidden text-[7px] uppercase tracking-[0.14em] transition-all sm:block md:text-[9px] ${
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
