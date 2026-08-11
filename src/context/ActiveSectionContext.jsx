import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ActiveSectionContext = createContext();

export function ActiveSectionProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // If we're near the top of the page,
      // Home should always be active.
      if (window.scrollY < window.innerHeight * 0.3) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}