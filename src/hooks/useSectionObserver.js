import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../context/ActiveSectionContext";

export default function useSectionObserver(sectionName) {
  const { setActiveSection } = useActiveSection();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, sectionName, setActiveSection]);

  return ref;
}