import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const sections = {
    sectionHero: useRef(null),
    sectionAbout: useRef(null),
    sectionProjects: useRef(null),
    sectionContacts: useRef(null),
  };

  return (
    <ScrollContext.Provider value={{ sections }}>
      {children}
    </ScrollContext.Provider>
  );
}

function useApp() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error("💥 Don't use a hook useApp outside of the provider!!!");
  }

  return context;
}

export { ScrollProvider, useApp };
